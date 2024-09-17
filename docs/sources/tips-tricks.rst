Tips & tricks
=============

ESRI Shapefiles import: column format might not be respected
------------------------------------------------------------

In a ESRI Shapefile, the column format in the dbf file may not be
respected in the data. This can be problematic during the upload process
in MapX. In PostgreSQL, the table will be created according to what is
specified in the dbf headers. If the data stored in the dbf doesn't
respect the format, the upload will most certainly fail.

**Example**

- header: Shape_Area,N,19,11
- value found in the dbf: 62124125000.00000000000

**Solutions (user side)**

- open & save the dbf in ``R``
- delete problematic columns for the ESRI Shapefile
- save the ESRI Shapefile in another format such as GeoPackage

Layer cleaning and simplification
---------------------------------

Mapping performance and visualization experience could be heavily
impacted by the quality and shape of the uploaded data. The simpler and
cleaner the layer is, the smoother the experience will be. Sometimes,
complexity is not negotiable and simplification is only advisable at
render time, at a given zoom level. MapX handle this automatically. In
other cases, the data can be poorly optimized and can be simplified
without losing any meaningful information. In all cases, it is
recommended to pre-process the data to improve the final user
experience. There is a lot of tools to help: any GIS software have
solutions. However, some specialized tools outperform all others, in
terms of simplicity, quality and speed.

Mapshaper
~~~~~~~~~

One of those tool that will help tremendously is
`mapshaper <https://mapshaper.org>`__. There is a lot of options and it
has a nice GUI and a very performant command-line version. Here is a use
case and a single command line to solve most of the issues encountered
within a layer.

The layer ``CobVeg_180615.shp`` has > 100'000 features, 75 classes in
the main attribute (``Simbolo``), ~10 attributes and many polygons are
vectorised rasters, at high resolution. The original file size is >
600MB. There are also encoding issues and line artefacts in many
polygons. The strategy will be to simplify the arcs as much as possible
without losing data and merge all geometries into a multi-features per
class, and then convert back into cleaned single features. MapX requires
data to have a specific projection type. Our layer has a ``.prj`` file,
so we can handle the re-projection in the same step:

.. code:: sh

   mapshaper-xl \
     CobVeg_180615.shp \
     -simplify 20% keep-shapes \
     -dissolve Simbolo copy-fields=Simbolo,CobVeg2013 \
     -explode \
     -clean \
     -proj EPSG:4326 \
     -o out/mapa_cobertura_vegetal_2015.shp

-> ~100'000 features, ~ 137MB

The option -explode is not required, but the upload and validation will
be slower. However, the rendering time online for the end user will be
faster :

.. code:: sh

   mapshaper-xl \
     CobVeg_180615.shp \
     -simplify 20% keep-shapes \
     -dissolve Simbolo copy-fields=Simbolo,CobVeg2013 \
     -clean \
     -proj EPSG:4326 \
     -o out/mapa_cobertura_vegetal_2015.shp

-> ~75 multi features, ~ 132MB

