Managing sources
================

In MapX, it is possible to define for each source:

1. which types of users can use the source layer to create views
   within the project

2. which type of users can edit the source layer (i.e.,
   attribute table, metadata, settings)

Editors can also allow the dataset to be downloaded from the MapX
interface (e.g., activation of the **Download** tool in all views using
the source) and/or published in the GeoServer instance of MapX from
which the dataset will be available through web services in compliance
with the Open GeoConsortium (OGC) Standards.

Additionally, superusers have the option to enable global mode, allowing
vector data sources to be accessible across all MapX projects. This
enables publishers from all projects to utilize key data sources (e.g.,
UNMap, EEZ) for creating vector views in their projects or as a
component of a join-type source.

Here are the steps to follow to configure a source:

1. To manage a source, click on the **Toolbox** tab and then on **Edit
   source settings**:

   .. figure:: ./img/manage-sources-button.png
      :align: center
      :class: with-shadow

2. A window appears, enabling you to manage all sources for which you
   have editing rights:

   1. Select the desired source.
   
   2. Configure the source as necessary:

      -  Specify the types of users who can utilize or edit the source.
      -  Activate any required services (e.g., allow download, publish
         in GeoServer).
      -  Enable global mode to make the source accessible in all MapX
         projects (superusers only).

   3. Save your edits by clicking on **Update**.

      .. figure:: ./img/manage-sources-selection.png
         :width: 400
         :align: center
         :class: with-shadow

      .. figure:: ./img/manage-sources-panel.png
         :width: 400
         :align: center
         :class: with-shadow

      .. figure:: ./img/manage-sources-panel-delete.png
         :width: 400
         :align: center
         :class: with-shadow

You can erase a source from the database by clicking on **Delete**, but
be careful this action is irreversible. A source can only be deleted if
it has no dependencies (e.g., views, joins). At the bottom of the panel,
a table indicates all its dependencies in detail.
