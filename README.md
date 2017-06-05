# tourist
This is a restaurant finder application that uses google places api to help tourist locate nearby restaurants.

## Built With
Bootstrap, Angular2, Sailsjs

## Installation
This project was built to support multiple deployment architecture. So you can easily separate your frontend from your backend service. This is flexible because you might want to run your frontend on a different server and your backend on another one.

### Angularjs
Install the angularjs dependencies
```
npm install
```

From root, Development only (Angular)
```
ng serve
```

From root, Production only (Angular) [Before you build, change the url in `src/app/app.config.ts` to suite your server configuration]
```
ng build
```
A dist folder is created with the minified html,css and javascripts resouces. Copy this into a directory available to the public. Eg www folder.

### Sailsjs
From the root directory, install the sails dependencies
```
cd server && npm install
```

From server, Development only (Sails)
```
sails lift
```

From server, Production only (Sails)
```
forever start app.js --prod
```

### Note:
Sails is lifted on port 1337 by default during development. I have changed the port to 8081 for production so you have to change the url and port in src/app/app.config.ts for your application to communicate with the backend api service.


## Tests
From the root directory

```
cd server && npm test
```

## Credits
* **Akinjiola Toni** *Toniton*

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* WEAREREASONABLEPEOPLE
