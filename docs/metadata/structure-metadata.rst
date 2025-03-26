Structure
=========

The **MapX Metadata Standard** is composed of:

- Mandatory metadata elements (prevent saving metadata if they are
  not filled in).
- Recommended metadata elements (minimum to be provided so that users
  can discover the data and determine if it is suitable for their use).
  
  .. warning::
   
     A warning sign is displayed in the interface to inform users that
     some recommended elements are missing (:doc:`link <../views/badges>`).


- Optional metadata elements to allow for a more detailed description
  of the data.

Description of the MapX Metadata Standard
-----------------------------------------

1. Text: Textual description of the data using title, abstract and tags.

   - Title :sup:`m` (multilingual): Title given to the source in the MapX tools.

   - Abstract :sup:`m` (multilingual): Detailed description of the dataset.

   - Additional notes (multilingual): Any other relevant information to
     be provided to MapX users (processing performed on the data,
     modifications, disclaimer, citation, etc.).

   - Keywords: Keywords (or tags) help users discover your data. Please
     include terms that can be used by a technical and non-technical
     audience.

     - Keywords :sup:`r`: List of user-defined keywords describing the data.
     - Geographic Keywords :sup:`m`: List of geographic keywords describing
       the spatial extent of the data. These keywords come from the `Standard
       Country or Area Codes for Statistics Use (M49), 1999 (Revision 4)
       <https://unstats.un.org/unsd/methodology/m49/>`__ prepared by
       the Statistics Division of the United Nations Secretariat.
     - GEMET keywords: List of GEMET keywords describing the data.
       `GEMET <https://www.eionet.europa.eu/gemet/en/themes/>`__ (GEneral
       Multilingual Environmental Thesaurus) is a multilingual documentary
       thesaurus developed and published by the European Environment Agency. 
     - Topics: List of topic categories describing the data, in accordance with
       `EN ISO 19115
       <https://inspire.ec.europa.eu/metadata-codelist/TopicCategory>`__:
       Geographic information — Metadata.

   - Attribute description (multilingual): Description of the
     attributes contained in the dataset.

   - Alias for attribute names: Short names (aliases) for attributes
     can be defined in this section. It's often valuable to replace
     technical or truncated attribute names by something clearer. For
     example, a source using the attribute name ``x_1Mp_mean`` would be
     more comprehensive with: “Average monthly precipitation [mm]”.
     Aliases are used when the attribute table is consulted or when an
     feature is queried in the map.

     .. figure:: ./img/metadata-alias-usage.gif
        :alt: demo_labels

        demo_labels

   - Language: Language(s) used in dataset content.

   - Attribution: Data attribution as recommended by the data provider.

   - Citation: Data citation as recommended by the data provider
     (e.g., BibTeX entry).

2. Temporal: Description of the dataset using temporal references.

   - Issuance:

     - Periodicity: Frequency at which the data is published or
       updated.
     - Release date: Date of formal issuance.
     - Last update: Date of the latest update.

   - Range: The time range covered by the data.

     - Check box: Whether the data has no time range (yes/no).
     - Start: Initial date covered by the data.
     - End: End date covered by the data.

3. Spatial: Description of the data using spatial reference
   (automatically filled by MapX).

   - Spatial reference system: Description of the spatial reference
     system.

     - Code of the SRS (EPSG)
     - URL to the SRS code definition

   - Bounding box: Spatial bounding box of the data using latitude and
     longitude. A “Update values from source” button is available and allows
     for recalculating the bounding box from the form.

4. Contact :sup:`r`: Information about people or organization related to this
   data (e.g., author, publisher, point of contact).

   - Function (by default, “Point of contact”)
   - Honorific
   - Name
   - Organisation name
   - Address
   - City
   - State
   - Postal code
   - Country
   - Email :sup:`(m)` (mandatory if a contact is provided)

5. Source :sup:`r`: Origin of the dataset and how to retrieve it.

   - Homepage :sup:`r`: Homepage (URL) of the data or, where applicable, that
     of the data provider.
   - Sources: Link to retrieve the data.

     - Check box: Whether the link contains a query to retrieve the
       data automatically (yes/no).
     - URL :sup:`r`: Direct link to download the data or, where applicable,
       link to a webpage where the data is accessible.

6. Licensing :sup:`r`: If any, description of the data license(s).

   - List of licenses :sup:`r`: Name and/or description of the license.

7. Annexes: List of online documents (URL) related to the dataset, such
   as a technical report or a scientific publication.

:sup:`m` mandatory metadata elements; :sup:`r` recommended metadata elements
