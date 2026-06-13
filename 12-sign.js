//npm init -y creates a package.json file with default values
//command nuclear approach to uninstall the packages npm uninstall lodash 
//remove from package.json and node_modules folder
//npm install -g package-name to install a package globally
const _=require('lodash');
const items=[1,[2,[3,[4]]]];
const newitem =_.flattenDeep(items)
console.log(newitem);
console.log("hello world")
//npm init -y creates a package.json file with default values
//nodemon creates a server and restarts it whenever there is a change in the code. It is a development dependency and is used to improve the development workflow by automatically restarting the server when changes are made to the code. This eliminates the need to manually stop and restart the server every time a change is made, allowing for faster development and testing.
//lodash is a utility library that provides a wide range of functions for working with arrays, objects, and other data types. It is a production dependency and is used to simplify common programming tasks such as manipulating arrays, objects, and functions. Lodash provides a variety of methods for working with data, including methods for filtering, mapping, and reducing data, as well as methods for working with strings, numbers, and other data types. It is widely used in JavaScript development to improve code readability and maintainability. 
//The -D or --save-dev flag is used to install a package as a development dependency. This means that the package is only needed during the development phase and is not required for the production environment. Development dependencies are typically used for tools such as testing frameworks, build tools, and linters that are necessary for development but not for running the application in production.
//The -P or --save-prod flag is used to install a package as a production dependency. This means that the package is required for the application to run in a production environment. Production dependencies are typically used for libraries and frameworks that are necessary for the application to function properly in production.
//npm install lodash --save-prod
//npm install nodemon --save-dev