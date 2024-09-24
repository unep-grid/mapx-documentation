import os
import sys
sys.path.insert(0, os.path.abspath("."))

# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project configuration ---------------------------------------------------

project = "MapX"
author = "UNEP/GRID-Geneva"
copyright = "2014-2024, UNEP/GRID-Geneva"
version = "1.0.2"

# -- General configuration ---------------------------------------------------

extensions = [
"myst_parser",
"sphinx.ext.imgconverter",
"sphinx_search.extension",
"sphinx_new_tab_link"
]

templates_path = ["_templates"]
exclude_patterns = ["_build", "**/.git", "Thumbs.db", ".DS_Store", "*.md"]

html_sidebars = {
  "index": [],
}

html_js_files = [
    'js/extension.js',
]


html_context = {
   "default_mode": "dark"
}

html_theme_options = {
  "secondary_sidebar_items": ["page-toc"],
  "external_links": [],
    "header_links_before_dropdown": 3,
    "footer_start": ["copyright", "contact"],
    "footer_end": ["sphinx-version", "theme-version"],
}

latex_elements = {
    'preamble': r"""
    \usepackage{longtable}
    """,
}

# Convert GIF to PNG during PDF generation with LaTex
imgconverter_image_format = "png"

# -- Options for HTML output -------------------------------------------------

html_theme = "pydata_sphinx_theme"
html_static_path = ["_static"]
html_logo = "_static/mapx_logo.png"

# Show external links with icons
new_tab_link_show_external_link_icon = True
