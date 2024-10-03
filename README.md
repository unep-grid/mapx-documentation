<img src="_static/mapx_logo.png" width="200" alt="MapX logo">

This repository is meant to write and manage the official documentation of [MapX](https://app.mapx.org/) ([source code](https://github.com/unep-grid/mapx)), an online platform for managing geospatial data on natural resources, developed by [UNEP/GRID-Geneva](https://unepgrid.ch/en) - a data centre resulting from the partnership between [UN Environment Programme](https://www.unep.org/), the Swiss [Federal Office for the Environment](https://www.bafu.admin.ch/) and the [University of Geneva](https://unige.ch/).

## Building the documentation

The best way to build the documentation is to use the dedicated [Docker image](https://git.unepgrid.ch/mapx/-/packages/container/sphinx-latexpdf-mapx) based on `sphinx-latexpdf` and containing all required dependencies.

Build PDF & HTML:

```sh
# The PDF document is copied to `_static` to allow PDF export from the HTML

docker run --rm \
      --volume "$(pwd):/docs" \
      git.unepgrid.ch/mapx/sphinx-latexpdf-mapx:1.0.1 sh -c \
      "make latexpdf && cp _build/latex/mapx.pdf _static/ && make html"
```

## Disclaimer

Although, the content has been prepared and reviewed with utmost care by the authors, errors may still exist. As such, UNEP/GRID-Geneva and the authors disclaim any responsibility or liability for errors and their potential impact.

We welcome any feedback regarding inaccuracies you may encounter and encourage you to contact us at <info@mapx.org>.
