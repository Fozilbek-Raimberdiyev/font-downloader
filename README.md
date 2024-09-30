
`font-downloader` - This is a CLI tool that downloads Google Fonts and generates CSS stylesheets for using them.

# Installation

You can install this package using `npm`:

```sh
npm install  font-downloader

```
 Or using `pnpm`:

```sh
pnpm add font-downloader

```

Or using `yarn`:

```sh
yarn add font-downloader
```

# Usage

### Downloading Fonts

You can download fonts using the following command:
```sh
font-downloader <fontName>
```

For example, to download the `Roboto` font and generate its CSS stylesheet:

```sh
font-downloader Roboto
```
This command will download the `Roboto` font files and generate its CSS stylesheet.


### Structure
 Downloaded font files are saved in the following structure:

 ```sh
/src/assets/fonts/<font-name>/
    - <font-name>-Regular.ttf
    - <font-name>-Bold.ttf
    - <font-name>.css
 ```

 The generated CSS file contains @font-face rules for including the font in your project.

 ### Using CSS

 ```css
@import url('./src/assets/fonts/roboto/roboto.css');

body {
    font-family: 'Roboto', sans-serif;
}
 ```


# Contributing

To contribute to this project, please submit a pull request or open an issue.


# Litsenziya

<span style="color : #2964AA">MIT</span>
