# Datum Brain Official Website

## Run Development Version

Make sure you have installed `yarn`. If not, do this

```
npm install -g yarn
```

Install dependencies

```
yarn install
```

Run development version

```
yarn start
```

The project will be hosted at [http://localhost:3000](http://localhost:3000)

## Make Build

Do

```
yarn build
```

And there will be a `build/` folder created. Before you paste the content
of `build/*` into the hosting using SFTP, make sure you follow [this](https://stackoverflow.com/a/47605730/1439913),
otherwise the JS won't load up correctly.
