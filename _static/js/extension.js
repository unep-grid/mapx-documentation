class SphinxExtension {
  constructor() {
    // Define available themes and local configuration
    this.themes = ["dark", "light"];
    this.localConf = {
      theme: this.themes[1], // Default to "light"
      id: 123,
    };

    // Initialize the extension
    this.init();
  }

  /**
   * Get the id
   */
  get id() {
    return this.localConf.id;
  }

  /**
   * Initializes the extension by wrapping history methods,
   * adding event listeners, and setting the initial theme.
   */
  init() {
    this.wrapHistoryMethods();
    this.addEventListeners();

    // Set the theme when the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
      this.setTheme();
    });
  }

  /**
   * Sets the theme of the document based on the provided theme ID.
   * If no valid theme ID is provided, it defaults to stored or default theme.
   * @param {string} [themeId] - The theme ID to set ("dark" or "light").
   */
  setTheme(themeId) {
    const theme = this.themes.includes(themeId)
      ? themeId
      : localStorage.getItem("local_theme") || this.localConf.theme;

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("local_theme", theme);
  }

  /**
   * Sends a message to the parent window indicating the URL has changed.
   */
  onUrlChange() {
    parent.postMessage(
      { id: this.id, type: "url_changed", url: location.href },
      "*"
    );
  }

  /**
   * Wraps the history methods to detect URL changes initiated via pushState or replaceState.
   */
  wrapHistoryMethods() {
    const methods = ["pushState", "replaceState"];
    const self = this;

    for (const type of methods) {
      const original = history[type];
      history[type] = function (...args) {
        original.apply(this, args);
        self.onUrlChange();
      };
    }
  }

  /**
   * Adds necessary event listeners for URL changes and message handling.
   */
  addEventListeners() {
    // Detect URL changes via browser navigation or hash changes
    window.addEventListener("popstate", () => this.onUrlChange());
    window.addEventListener("hashchange", () => this.onUrlChange());

    // Handle messages from the parent window
    window.addEventListener("message", (event) => this.handleMessage(event));
  }

  /**
   * Handles incoming messages from the parent window.
   * @param {MessageEvent} event - The message event containing data from the parent.
   */
  handleMessage(event) {
    const data = event.data;

    // Validate the message format
    if (!data || typeof data !== "object" || !("type" in data)) {
      return;
    }

    // Handle different message types
    switch (data.type) {
      case "init":
        this.localConf.id = data.id;
        this.onUrlChange();
        break;
      case "set_theme":
        this.setTheme(data.theme);
        break;
      default:
        console.warn("Unknown message type:", data.type);
    }
  }
}

// Instantiate the SphinxExtension when the script is loaded
(() => {
  new SphinxExtension();
})();
