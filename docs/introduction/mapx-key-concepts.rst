MapX key concepts
=================

Projects
--------

MapX offers dedicated environments (projects) where users can find
specific maps, statistic data and/or story maps (views). Each project
contains a set of views that have a common topic, or that are relevant
for the institution/organization that manages the project or that cover
a specific geographical area.

Projects are managed independently of each other either by the MapX team
or by its partners. They can be opened to the public to reach a large
audience or set to “private mode” so that only its members can access
it. Being a member of a project allows access to content and features
that are not available to public users. Every registered user in MapX
can make a request to the administrators of a project to join it as a
member (only possible if the option has been activated by the
administrators).

.. _roles:

Roles
-----

MapX has four types of roles which are incremental:

-  Public
-  Member
-  Publisher
-  Administrator

User rights (roles) are configured per project and will define their
degree of freedom in each project. For example, a user can have a public
role in a project X while being a member in a project Y and an
administrator in a project Z at the same time.

Public
~~~~~~

Public is the default role users have in MapX when they are unlogged or
when they are not granted a specific role in a project. This role offers
basic rights over the content of a project:

-  visualization of content published without restrictions (i.e., maps,
   attribute tables, dashboards, story maps)
-  creation and export of static maps
-  approximate overlap analyses of views
-  draw new geometries on map and export them
-  download spatial data (requires to be logged in)

Member
~~~~~~

Members of a project can access non-public content and can be granted
the right to edit a specific view in this project.

Publisher
~~~~~~~~~

Publishers have the ability to add in the MapX database new data to the
project (only vector data) and create content such as maps and story
maps. They can be granted the right to edit and/or delete content in the
project and can also grant the edit rights over a view to a specific
member.

Administrator
~~~~~~~~~~~~~

Administrators are in charge of managing the project and user rights. In
particular, they can edit the preferences of the project (title,
description, country/ies to which the project is associated, theme,
projection), can invite new members to the project, change the roles of
specific users, accept or deny requests of membership, set the project
public/private, define if the project accepts membership requests from
external users, define the default organization of the views in the
views panel, and can delete the project.

Special roles
-------------

MapX has two type of special roles which are configured per instance
(i.e., valid in all projects):

-  Superuser
-  Developer

Superuser
~~~~~~~~~

Superusers have access to advanced MapX features to manage the
application and its content. For security and confidentiality reasons
only MapX instance managers should have this role. For
https://app.mapx.org/, superusers are the MapX development team within
UNEP/GRID-Geneva.

.. _role-developer:

Developer
~~~~~~~~~

The developer role is assigned on a case-by-case basis by the MapX team
and provides access to tools for creating and editing dashboards and
custom code views. This organisation ensures that only users with enough
knowledge of web development are able to code content in the application
and thus minimizes the chance of having content in MapX that may
negatively affect the user experience.

Data organisation
-----------------

A two levels-data management system exists in MapX: “sources” and
“views”. Simply put, sources are raw spatial data stored in the MapX
database while views are a cartographic representation of it. As you
will see below, the concept of view can go beyond this simple
definition.

The different types of views available in MapX are:

-  `Vector
   tiles <https://docs.mapbox.com/help/glossary/vector-tiles/>`__
   **views** are used to display on the map data published in the MapX
   database.
-  `Raster <https://docs.mapbox.com/help/glossary/raster/>`__ **views**
   are based on external data services as MapX does not support raster
   storage.
-  **Custom coded views** are fully customisable views that allow, among
   other things, to display data from external sources or to implement
   advanced features (e.g., drop-down list, slider). Advanced knowledge
   in web development is required to code this type of view.
-  **Story maps** are communication products consisting of a mix of
   spatial data and other types of information (text, images, graphes,
   videos).
-  **Local GeoJSON views** are a special type of view allowing users to
   visualize their vector data without having to upload it to the MapX
   database. The data is thus temporarily stored in the user's browser.
