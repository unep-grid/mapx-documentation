#!/bin/bash

usage() {
  echo "Usage: $0 [-d <docker image>] [-v <version>]"
  echo "  -d    Docker image (required)"
  echo "  -v    Version for building the Docker image (required, must be a valid SemVer format)"
  exit 1
}

validate_semver() {
  local version=$1
  # SemVer format: major.minor.patch, optionally with pre-release or build metadata
  # Example valid versions: 1.0.0, 1.0.0-beta, 1.0.0+build123
  if [[ ! "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[a-zA-Z0-9.-]+)?(\+[a-zA-Z0-9.-]+)?$ ]]; then
    return 1
  fi
  return 0
}

while getopts ":d:v:" opt; do
  case $opt in
    d)
      docker_image=$OPTARG
      ;;
    v)
      version=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      usage
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      usage
      ;;
  esac
done

# Check if the docker image argument is provided
if [ -z "$docker_image" ]; then
  echo "Docker image is required." >&2
  usage
fi

# Check if the version argument is provided
if [ -z "$version" ]; then
  echo "Version is required." >&2
  usage
fi

# Validate the version argument
if ! validate_semver "$version"; then
  echo "Invalid version format. Must be in SemVer format (e.g., '1.0.0')."
  exit 1
fi

# Remove _build folder
rm -r _build/

# Build PDF & HTML
# The PDF document is copied to `_static` to allow PDF export from the HTML
docker run --rm \
       --volume "$(pwd):/docs" \
       git.unepgrid.ch/mapx/sphinx-latexpdf-mapx:1.0.1 sh -c \
       "make latexpdf && cp _build/latex/mapx.pdf _static/ && make html"

# Build Docker image and push to online repository
docker buildx build \
       --platform linux/amd64,linux/arm64 \
       -f Dockerfile.docs \
       -t "$docker_image:$version" \
       --push  .
