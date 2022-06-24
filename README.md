# Image Processing API

This is and API that serves images in 2 ways. First way is to serve the existing images as is. The second way is to resize and image and serve the new generated image as thumb.

## To use the project

First, clone the project by running :

```bash
git clone git@github.com:khalidhmd/Image-Processing-API.git
```

Then, install the dependencies by running:

```bash
git clone git@github.com:khalidhmd/Image-Processing-API.git
```

## Project scripts

To build the project, run:

```bash
npm run build
```

To run the built project, run:

```bash
npm run start
```

To run the project (from "src" directory) with live reload, run:

```bash
npm run dev
```

To run the project tests, run:

```bash
npm run test
```

To run the linter, run:

```bash
npm run lint
```

To format the source code, run:

```bash
npm run prettier
```

## Usage

### To serve exisiting image:

send get request to the url of the following format (assuming the project is served on port 3000 on local host) and change the file name as you wish:

```code
http://localhost:3000/api/images?file=fjord.jpg
```

### To serve new generated thumb files:

send get request to the url of the following format (assuming the project is served on port 3000 on local host) and change the file name, width, or height as you wish:

```code
http://localhost:3000/api/thumbs?file=fjord.jpg&w=200&h=2000
```

#
