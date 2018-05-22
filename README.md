# Electron with Vuejs and Python


## What is?


This program get http request and show the header comment. Using Electron with Vuejs and Python.  

## Usage


Install nodejs.  

```sh
node -v
v8.11.2

npm -v
5.6.0
```


Clone this project in your directory. Just run npm installer. Then start the script.  


```sh
git clone https://github.com/bluelief/pyelectron.git
cd pyelectron
npm install
npm run start
```

If you want to use 'exe' file. Input bellow command.  


```sh
npm run package-win
```

## package.json


scripts can use only windows.  

```json:package.json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": ".\\node_modules\\.bin\\electron .",
  "package-win": ".\\node_modules\\.bin\\electron-packager . pyelectron --overwrite --platform=win32 --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE"
  }
```


## License

Copyright (c) 2018 bluelief.  
Licensed under the MIT License.  
