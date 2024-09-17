Tips & tricks
=============

List of current shortcuts
-------------------------

-  ``space`` Start / Stop autoplay
-  ``esc`` Stop playing and close
-  ``l`` Lock / Unlock story to interact with map features
-  ``← ↑ → ↓`` Next / previous step. Continuous keypress will
   fast-forward the steps
-  ``0-9`` Activate step number. Type without pause to reach a number
   greater than “9”. For example, type ``1`` then ``3`` to activate step
   13. There is no key repeat prevention: if you keep pressing ``1``, it
   will try to reach step ``11111111`` : the last step will be played.

**Note**: Shortcuts only work in edit mode if the focus is on the map
and the text editor is not active.

How to handle badly formatted HTML from story map slides ?
----------------------------------------------------------

Description of a possible issue
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  When the visual editor is launched , a cog logo appears and the
   editor toolbar does not show up.

-  An error is visible in the console:

   .. code:: js

      Error: Transition is undefined: ...

-  Other “it does not work after I've made a manual operation” errors.

Probable cause
~~~~~~~~~~~~~~

Badly formatted HTML in a slide

How to avoid it
~~~~~~~~~~~~~~~

Use the visual editor and don't modify HTML manually.

How to solve an issue
~~~~~~~~~~~~~~~~~~~~~

For large story map JSON, it could be difficult to detect errors simply
by reading the code. A solution is to use a HTML validation tool, such
as the one available in `jsfiddle.net <https://jsfiddle.net/>`__.

MapX also has an integrated validator, but it's turned off at the
moment. So, you will have to use an external tool for now.

1. Copy the JSON code from the story map editor

2. Open a javascript console

3. Paste the JSON in a variable, for example:

   .. code:: js

      var story={ "steps": []} 

4. Using a nested loop, extract the HTML for the desired language:

   .. code:: js

      var txt = "";
      story.steps.forEach(
        function(s) {
          s.slides.forEach(function(sl) {
            txt = txt + sl.html.en
          })
        })

5. Copy the result. In Chrome interactive console, the command
   ``copy(txt)`` will copy the result in your clipboard.

6. Paste the result in `jsfiddle.net <https://jsfiddle.net/>`__, under
   the HTML section

7. Now you can see issues visually, for example:

   .. figure:: ./img/sm-tips-jsfiddle-issue.png
      :width: 500
      :align: center
      :class: with-shadow
