## Testing

TODO...

- Any file in the `src` folder that ends with `.test.{js, jsx, mjs}` will be loaded as a unit test by Jest.
- All the mocks for node_modules can be placed in `__mocks__` in the root of the project.
- The unit tests can be run with `yarn test` and `yarn tdd` to run them in watch mode.
- When in watch mode, hit `p` and type the name of the file you want to load (or just partial name) to focus down your tests. Eg. type `p` and type `value`, it will load tests that includes the string `value` in the file name.
- To generate test coverage, run `yarn test:cover`.
