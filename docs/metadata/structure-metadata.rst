Structure
=========

The **MapX Metadata Standard** is composed of:

- mandatory metadata elements (prevent saving metadata if they are
  not filled in)
- recommended metadata elements (minimum to be provided so that users
  can discover the data and determine if it is suitable for their use)
  
  .. warning::
   
     A warning sign is displayed in the interface to inform users that
     some recommended elements are missing (:doc:`link <../views/badges>`).


- optional metadata elements to allow for a more detailed description
  of the data

Description of the MapX Metadata Standard
-----------------------------------------

1. Text: textual description of the data using title, abstract and tags

   -  Title :sup:`m` (multilingual): title given to the source in the MapX tools

   -  Abstract :sup:`m` (multilingual): detailed description of the dataset

   -  Additional notes (multilingual): any other relevant information to
      be provided to MapX users (processing performed on the data,
      modifications, disclaimer, citation, etc.)

   -  Keywords: keywords (or tags) help users discover your data. Please
      include terms that can be used by a technical and non-technical
      audience.

      -  Keywords :sup:`r` (user-defined)
      -  Geographic Keywords :sup:`m` (based on `Standard country or area codes
         for statistical use
         (M49) <https://unstats.un.org/unsd/methodology/m49/>`__)
      -  GEneral Multilingual Environmental Thesaurus
         (`GEMET <https://www.eionet.europa.eu/gemet/en/themes/>`__)
         keywords

   -  Attribute description (multilingual): description of the
      attributes contained in the dataset

   -  Alias for attribute names: short names (aliases) for attributes
      can be defined in this section. It's often valuable to replace
      technical or truncated attribute names by something clearer. For
      example, a source using the attribute name ``x_1Mp_mean`` would be
      more comprehensive with: “Average monthly precipitation [mm]”.
      Aliases are used when the attribute table is consulted or when an
      feature is queried in the map.

      .. figure:: ./img/metadata-alias-usage.gif
         :alt: demo_labels

         demo_labels

   -  Language: language(s) used in dataset content

2. Temporal: description of the dataset using temporal references

   -  Issuance:

      -  Periodicity: frequency at which the data is published or
         updated
      -  Release date: date of formal issuance
      -  Last update: date of the latest update

   -  Range: the time range covered by the data

      -  Check box: whether the data has no time range (yes/no)
      -  Start: initial date covered by the data
      -  End: end date covered by the data

3. Spatial: description of the data using spatial reference
   (automatically filled by MapX)

   -  Spatial reference system: description of the spatial reference
      system

      -  Code of the SRS (EPSG)
      -  URL to the SRS code definition

   -  Bounding box: spatial bounding box of the data using latitude and
      longitude

4. Contact :sup:`r`: information about people or organization related to this
   data (e.g., data provider)

5. Source: origin of the dataset and how to retrieve it

   -  Homepage :sup:`r`: homepage (URL) of the data or, where applicable, that
      of the data provider
   -  Sources: link to retrieve the data

      -  Check box: whether the link contains a query to retrieve the
         data automatically (yes/no)
      -  URL :sup:`r`: direct link to download the data or, where applicable,
         link to a webpage where the data is accessible

6. Licensing: If any, description of the data license(s)

   -  List of licenses :sup:`r`: name and/or description of the license

7. Annexes: list of online documents (URL) related to the dataset, such
   as a technical report or a scientific publication.

:sup:`m` mandatory metadata elements; :sup:`r` recommended metadata elements
