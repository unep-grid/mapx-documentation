<img src="_static/mapx_logo.png" width="200" alt="MapX logo">

This repository is meant to write and manage the official documentation of [MapX](https://app.mapx.org/) ([source code](https://github.com/unep-grid/mapx)), an online platform for managing geospatial data on natural resources, developed by [UNEP/GRID-Geneva](https://unepgrid.ch/en) - a data centre resulting from the partnership between [UN Environment Programme](https://www.unep.org/), the Swiss [Federal Office for the Environment](https://www.bafu.admin.ch/) and the [University of Geneva](https://unige.ch/).

## Building the documentation

The best way to build the documentation is to use the dedicated [Docker image](https://git.unepgrid.ch/grid-pub/-/packages/container/sphinx-latexpdf-mapx/) based on `sphinx-latexpdf` and containing all required dependencies.

1. Build PDF:

   ```sh
   docker run --rm \
          --volume "$(pwd):/docs" \
          git.unepgrid.ch/grid-pub/sphinx-latexpdf-mapx:1.0.0 make latexpdf
   ```

2. Copy the PDF document to `_static` to allow PDF export from the HTML:

   ```sh
   cp $(pwd)/_build/latex/mapx.pdf $(pwd)/_static/
   ```

3. Build HTML:

   ```sh
   docker run --rm \
          --volume "$(pwd):/docs" \
          git.unepgrid.ch/grid-pub/sphinx-latexpdf-mapx:1.0.0 make html
   ```

## Disclaimer

Although, the content has been prepared and reviewed with utmost care by the authors, errors may still exist. As such, UNEP/GRID-Geneva and the authors disclaim any responsibility or liability for errors and their potential impact.

We welcome any feedback regarding inaccuracies you may encounter and encourage you to contact us at <info@mapx.org>.
