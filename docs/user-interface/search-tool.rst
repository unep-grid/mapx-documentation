Search tool
===========

The **Search tool** enables users to do a full-text search on the MapX
public catalog. Views that are returned by the tool can be filtered,
displayed in the map and/or added to the current project if the user's
privileges allow it (i.e., publisher, admin).

General description
-------------------

Users regardless of their privileges can access the **Search tool** from
the left panel by clicking on the **Catalog** tab. The tool consists of
six elements:

1. a field where search keywords can be specified
2. a button to access the help of the **Search tool** (this page)
3. a button to reset the search criteria
4. a button allowing access to advanced filter options
5. a list of results returned by the search tool
6. a footer where the number of views matching the search criteria is
   displayed

.. only:: html

   .. figure:: ./img/search-tool-details.png
      :width: 400
      :align: center
      :class: with-shadow

      Search tool layout

.. only:: latex

   .. figure:: ./img/search-tool-details.png
      :width: 7cm
      :align: center
      :class: with-shadow

      Search tool layout

.. hint::
   In the **Project's views** tab, the search field allows users to
   filter views within the current project, while the **Search tool**
   available in the **Catalog** tab allows users to search the MapX public
   catalog (cross-projects).


How do I use the Search tool?
-----------------------------

To perform a search, enter a series of keywords in the search field
separated by a space. These keywords can be related to a specific topic,
a geographic entity (e.g., country, region) or even a date. The **Search
tool** is dynamic meaning that the list of views matching the search
criteria is re-evaluated each time a new character is added in the
search field.

.. only:: html

   .. figure:: ./img/search-tool-usage.gif
      :width: 450
      :align: center
      :class: with-shadow

      Full-text search

Structure of a result
~~~~~~~~~~~~~~~~~~~~~

.. only:: html

   .. figure:: ./img/search-tool-results.png
      :width: 400
      :align: center
      :class: with-shadow

      Result

.. only:: latex

   .. figure:: ./img/search-tool-results.png
      :width: 8cm
      :align: center
      :class: with-shadow

      Result

-  yellow: title of the view followed by text elements matching the
   search criteria
-  green: list of tools available for a view:

   1. **Direct link**: generates a share link to the view in a new tab
   2. **Metadata**: opens a panel containing the metadata of the view
      and the data source
   3. **Activate this view**: displays the view in the map. If this
      option is activated, the view is added temporarily to the views
      catalog of the current project. In the project's catalog, views
      shared from the **Search tool** (called temporary views in MapX)
      are indicated with a badge (orange circle in the image below).
      Temporary views can be removed from the project's catalog by
      clicking on the **Remove / unlink this temporary view** button
      (red circle in the image below).

      .. only:: html

         .. figure:: ./img/search-tool-shared-view.png
            :width: 400
            :align: center
            :class: with-shadow

            Shared view from the search tool (temporary views)

      .. only:: latex

         .. figure:: ./img/search-tool-shared-view.png
            :width: 8cm
            :align: center
            :class: with-shadow

            Shared view from the search tool (temporary views)

-  blue: list of thematic and geographic keywords and type of view
-  red: time interval covered by the view (start year & end year)

How can I filter the results?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are two methods to filter the results returned by the **Search
tool**: the advanced filtering options and dynamic items in the list of
results. Whatever method is used, filters can be combined to reduce the
list of results. When a filter is activated, a red circle is displayed
in the upper right corner of the **Advanced filtering options** button
and matching items in the list of results are underlined.

Advanced filtering options
^^^^^^^^^^^^^^^^^^^^^^^^^^

The **Advanced filtering options** allow users to filter the results of
a search according to five different criteria:

1. temporal range: start and end year can be defined independently
2. thematic keywords
3. thematic keywords from the
   `GEMET <https://www.eionet.europa.eu/gemet/en/about/>`__ thesaurus
4. geographic keywords (generally corresponding to the spatial extent of 
   the data)
5. type of view

.. only:: html

   .. figure:: ./img/search-tool-filters.gif
      :width: 450
      :align: center
      :class: with-shadow

      Filter from the advanced filtering options

.. only:: latex

   .. figure:: ./img/search-tool-filters.png
      :width: 8cm
      :align: center
      :class: with-shadow

      Filter from the advanced filtering options

.. hint::
   Advanced users can make more precise filters on dates (all those
   recorded in the views metadata) than with the temporal range by
   activating the **Advanced filtering by date** option.


Filtering from the list of results
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Some items in the interface are dynamic and allow users to filter the
results with a single click:

- |gemet| GEMET thematic keywords
- |geo| geographic keywords
- |type| type of view
- |start| start and |end| end year


If an item is clicked to activate a filter, it is underlined. A filter
can be removed by clicking again on the item (underlined) or from the
**Advanced filtering options**.

In the example below, a click on “Water quality” triggers a filter equal
to ``keywords GEMET = "Water quality"``.

.. only:: html

   .. figure:: ./img/search-tool-filter-results.gif
      :width: 450
      :align: center
      :class: with-shadow

      Filter from the list of results

.. only:: latex

   .. figure:: ./img/search-tool-filter-results.png
      :width: 8cm
      :align: center
      :class: with-shadow

      Filter from the list of results

How can I import a view into my project from the search tool?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

First, temporarily add the view to the project's data catalog by
clicking the **Activate this view** option in the search tool. Then, to
add it to the project permanently, click on the **Import as external
view** button in the view toolbar. Views imported like this are handled
from the **Manage external views** tool in the toolbox.

.. only:: html

   .. figure:: ./img/search-tool-import-view.png
      :width: 400
      :align: center
      :class: with-shadow

      Import a temporary view to the current project

.. only:: latex

   .. figure:: ./img/search-tool-import-view.png
      :width: 8cm
      :align: center
      :class: with-shadow

      Import a temporary view to the current project

.. |gemet| image:: ./img/search-tool-gemet.png
.. |geo| image:: ./img/search-tool-geographic-keywords.png
.. |type| image:: ./img/search-tool-view-type.png
.. |start| image:: ./img/search-tool-start-year.png
.. |end| image:: ./img/search-tool-end-year.png
