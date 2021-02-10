# Make from URL template

This is a very dumb template that simply exposes a full-sized iframe url as a data object. 

To use in Make.cm simply import this template and use the following in your API request:

`
"data":{
  "url": "https://your-url-here"
  }
`

There's so much more you can do with Make if you put your dynamic logic inside a template so consider this for testing only and use https://github.com/makecm/hello-world-react-template for a proper look at what's possible.


## Development server

Install all necessary dependencies `yarn install`

Run `yarn start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Building for Make

Run `yarn build` to build the project with correct resource pathing for the sake of deploying to make.

The build artifacts will be stored in the `/build` directory.

## Importing into Make

When importing into Make be sure to import from the `/build` folder.

The following `data` inputs are available as well.

- `headline`: string
- `backgroundImage`: string (public URL)
- `showLogos`: boolean

## Support

Here are some helpful links to get you started
- [Docs](https://docs.make.cm): First point of call
- [Twitter](https://twitter.com/home): Drop us a message on twitter if you find a bug or have any feedback
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
