# Library

This project is a book reading assistant built with JavaScript, built using
technologies like [webpack](https://webpack.js.org/), and made to demonstrate
vanilla JavaScript proficiency.

An demo of the working project follows.

![library app demo](docs/images/library_demo.gif)

## Features

- It can save books in the browser local storage
- It can delete books from it
- It can check the reading status of books
- It is responsive

## Setup

First of all, you'll need `node`, which comes with `npm`, visit
[this link](https://nodejs.org/es/download/) to get it.

Second, install the project dependencies.

```shell
npm install
```

And you are done.

### Warning

Because this project uses **webpack**, after any change to the files under
`src` you need to run `npx webpack` to make the bundle again, this is, rebuild
the file `dist/main.js`.

## Developers

This project was developed by
[santiag-rodrig](https://github.com/santiago-rodrig) and
[mrnadaara](https://github.com/mrnadaara).

## License

This project is licensed under the [MIT](https://github.com/santiago-rodrig/library/blob/master/LICENSE) license.
