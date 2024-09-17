Highlight vector features tool
==============================

This **Highlight vector features** tool enables users to identify areas
where several layers overlap. The tool draws a highlight over the
overlapping data on map and shadows the rest of the data. The tool only
accepts vector tiles views as input data, but it is fully responsive to
any change to the data displayed on map through filtering processes.

.. note::
   For technical reasons, this tool is currently disabled in non-blink
   browsers (i.e., Safari, Firefox).

How do I use the Highlight vector features tool?
------------------------------------------------

Before activating the tool from the **Menu bar**, define the “highlight
mode” - minimum number of overlapping layers to be highlighted - in the
**Toolbox** and activate the views that you want to overlap.

.. figure:: ./img/highlight-menu-bar.png
   :width: 450
   :align: center
   :class: with-shadow

   Highlight vector features tool.


.. figure:: ./img/highlight-config.png
   :width: 400
   :align: center
   :class: with-shadow

   Highlight tool configuration.


The tool additionally offers an option to estimate the overlapping area.
Please note that the area estimate only takes into account what is
displayed on the screen and not the complete datasets. Values are
updated automatically when the position or the zoom in the map are
modified by the users.

.. figure:: ./img/highlight-area.png
   :width: 600
   :align: center
   :class: with-shadow

   Area estimation.


.. warning::
   This tool should be used for preliminary investigation. It uses the
   approximated area of spatial features and is therefore not suitable for
   reporting.

Example of use
--------------

.. figure:: ./img/highlight-usage.gif
   :align: center
   :class: with-shadow

   Overlap area estimation.

