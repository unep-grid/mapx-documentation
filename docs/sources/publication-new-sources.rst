Publication of new sources
==========================

Data preparation
----------------

Before adding a new source to MapX, it is necessary to prepare the
spatial dataset to be compatible with the application. A geographic
information system (GIS) software such as
`QGIS <https://www.qgis.org/en/site/>`__ (cross-platform, free &
open-source) or `ArcGIS
Desktop <https://www.esri.com/en-us/arcgis/products/arcgis-desktop/overview>`__
can be used to check the compatibility of your spatial dataset, to edit
it and to convert it into another format if necessary.

Users should pay attention that:

- the geometries of the spatial dataset are valid
- the attribute table is encoded in UTF-8
- the columns of the attribute table are associated to the right data type
  (e.g., text attributes don't offer the same styling possibilities
  as numerical ones)
- the dataset is stored in a format supported by MapX

.. warning::
   Dates must be stored in one of two formats ``YYYY-MM-DD`` or
   ``YYYY/MM/DD``. If not, dates will be imported as text into
   the MapX database.

.. note::
   If your data has a time component and you want to
   activate the time-slider in MapX, you will need to preformat your
   dataset before importing it. To be integrated in a time-slider, dates
   must be stored in a column named ``mx_t0`` and time intervals must be
   stored in columns ``mx_t0`` (start date) and ``mx_t1`` (end date). The
   format of these columns must be `Unix
   epoch <https://en.wikipedia.org/wiki/Unix_time>`__ (in seconds).
   Relevant information for converting from and to Unix epoch can be found
   at this address: https://www.epochconverter.com/. Alternatively, it is
   possible to perform date <-> epoch conversions using the `Field
   Calculator <https://docs.qgis.org/3.34/en/docs/user_manual/working_with_vector/attribute_table.html#using-the-field-calculator>`__
   in `QGIS <https://www.qgis.org/en/site/>`__.

   .. figure:: ./img/source-publication-qgis.png
      :align: center
      :class: with-shadow

.. _supported-formats:

Supported formats
-----------------

Here is a list of formats supported by MapX for importing and exporting
data:

+------------------+-------------------+-------------------+------------------+
| Format           | Import: module    | Import: drag and  | Export           |
|                  |                   | drop              |                  |
+==================+===================+===================+==================+
| GeoPackage       | yes               | no                | yes              |
| *(vector only)*  |                   |                   |                  |
+------------------+-------------------+-------------------+------------------+
| GeoJSON          | yes               | yes               | yes              |
+------------------+-------------------+-------------------+------------------+
| ESRI Shapefile   | yes :sup:`1`      | yes :sup:`1,Z`    | yes :sup:`1`     |
+------------------+-------------------+-------------------+------------------+
| SQLite           | yes               | no                | yes              |
+------------------+-------------------+-------------------+------------------+
| KML              | yes :sup:`1`      | yes :sup:`1`      | yes :sup:`1`     |
+------------------+-------------------+-------------------+------------------+
| GML              | yes :sup:`1`      | no                | yes :sup:`1`     |
+------------------+-------------------+-------------------+------------------+
| GPX              | yes :sup:`1`      | yes :sup:`1`      | no :sup:`2`      |
+------------------+-------------------+-------------------+------------------+
| CSV *(tabular    | yes :sup:`1`      | no                | yes :sup:`1`     |
| only)*           |                   |                   |                  |
+------------------+-------------------+-------------------+------------------+
| DXF              | yes :sup:`1,3`    | no                | no :sup:`2`      |
+------------------+-------------------+-------------------+------------------+
| PostgreSQL SQL   | no                | no                | yes              |
| Dump             |                   |                   |                  |
+------------------+-------------------+-------------------+------------------+

:sup:`1` partial support, data could be altered, missing attribute,
missing geometry

:sup:`2` driver error

:sup:`3` need SRS assignation

:sup:`Z` ESRI Shapefiles being composed of multiple files, it's necessary
to zip them in an archive to be uploaded with the drag and drop method.
The files (at least: ``.shp``, ``.shx``, ``.dbf``, ``.cpg`` & ``.prj``)
should be located at the first level of the archive.

Types of geometry
~~~~~~~~~~~~~~~~~

The types of geometry supported by MapX are :

-  Geometry primitives: Point, LineString & Polygon
-  Multipart geometries: MultiPoint, MultiLineString & MultiPolygon

.. note::
   MapX only partially supports GeometryCollection. For this reason, the
   MapX team recommends that you do **not** use this type of geometry
   to upload your data into the platform.

Data publication
----------------

.. note::
   Sources are linked to the project in which they were uploaded and
   will only be accessible from there. Be careful to be in the right
   project when uploading sources.

There are two different ways to upload datasets to a project in MapX:

1. the **Add a source layer** tool (also called **Upload tool**)

2. the **drag and drop** method

Upload tool
~~~~~~~~~~~

1. Click on the **Add a source layer** button in the **Toolbox** to load
   the **Upload tool** in the MapX UI.

   .. figure:: ./img/source-publication-upload.png
      :width: 450
      :align: center
      :class: with-shadow

2. Add the dataset(s) you want to import into MapX. For this, two
   methods are available (they can be combined):

   1. drag and drop your file(s) from your computer
   2. click on **Add files…** to open your device file browser and
      select your chosen file(s)

3. By default, the name of the dataset is assigned to the source that
   will be created in MapX. If required, you can edit it before the
   import.

   .. figure:: ./img/source-publication-upload-titles.png
      :width: 450
      :align: center
      :class: with-shadow

4. The import of each dataset can be configured by expanding its
   **Settings** section:

   .. figure:: ./img/source-publication-upload-view.png
      :width: 450
      :align: center
      :class: with-shadow

   -  **Automatically create a view**: creates a preconfigured view
      during the upload process using the data source. The view will
      automatically be added at the top of the data catalog.
   -  **Enable WMS services**: In a public project, if public views are
      created using this source, enabling WMS service will automatically
      create a layer and a style (SLD) in the `MapX
      GeoServer <https://geoserver.mapx.org/geoserver/web/?0>`__.
   -  **Allow this source to be downloaded**: If the data license allows
      for redistribution, enabling this option will activate the
      :doc:`Download tool <../views/download-tool>` for
      this data source for all users.
   -  **Assign the SRS**: The upload tool will automatically retrieve
      the Spatial Reference System (SRS) of the dataset and will
      reproject it to `WGS 84 <https://epsg.io/4326>`__ (EPSG:4326), the
      SRS used to store all data in the MapX database. If you want to
      bypass this behavior, you can enable this option and manually
      select the SRS corresponding to your dataset.

5. If needed, you can remove a dataset from the **Upload tool** by
   clicking on the **X** button located in its upper left corner.
   Moreover, it is possible to empty the entire **Upload tool** by
   clicking on the **Reset** button.

   .. figure:: ./img/source-publication-upload-remove.png
      :width: 450
      :align: center
      :class: with-shadow

6. Once configured, datasets can be imported into MapX one by one by
   clicking on the **Send** button located in their upper right corner
   or in bulk mode by clicking on the **Upload** button.

   .. figure:: ./img/source-publication-upload-send.png
      :width: 450
      :align: center
      :class: with-shadow

   The import status can be consulted from the MapX notification panel:

   .. figure:: ./img/source-publication-upload-notification.png
      :width: 450
      :align: center
      :class: with-shadow

7. Once the upload process is completed, you will be notified by email.
   In the event of failure, the error is returned in the body of the
   email.

.. _upload-drag-drop:

Drag and drop
~~~~~~~~~~~~~

.. note::
   The **drag and drop** method only allows to upload spatial datasets
   with a SRS equal to `WGS 84 <https://epsg.io/4326>`__ (EPSG:4326).

1. Drag and drop your file from your computer to the map in MapX.

   .. figure:: ./img/source-publication-drag-drop.png
      :width: 650
      :align: center
      :class: with-shadow

2. A progress bar indicates the status of loading.

   .. figure:: ./img/source-publication-drag-drop-progress.png
      :width: 650
      :align: center
      :class: with-shadow

3. Once your file is loaded, it will appear in the data catalog on top
   of the list of views. An orange circle on the left side of the view
   indicates that its type is **Local GeoJSON**. This means that the
   data linked to the view has been temporarily stored in the local
   storage of your web browser and **not** in the MapX database.

   .. figure:: ./img/source-publication-temp-view.png
      :width: 400
      :align: center
      :class: with-shadow

4. To add your dataset as a source to MapX (your dataset will be stored
   in the MapX database):

   1. click on the view corresponding to your dataset
   2. click on **Upload**.

   .. figure:: ./img/source-publication-upload-button.png
      :width: 200
      :align: center
      :class: with-shadow

5. The **Upload tool** automatically opens in the MapX interface with
   your dataset (**Local GeoJSON**) included. See the **Upload tool**
   section above for the rest of the operations.

   .. figure:: ./img/source-publication-upload-panel.png
      :width: 400
      :align: center
      :class: with-shadow

6. Once your dataset has been added to the MapX database and to avoid
   duplicates, you can delete the **Local GeoJSON** (orange circle) by
   clicking on **Delete**.

   .. figure:: ./img/source-publication-temp-view-delete.png
      :width: 225
      :align: center
      :class: with-shadow
