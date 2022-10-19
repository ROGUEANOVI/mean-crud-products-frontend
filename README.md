

* Instalar CLI de angular ==> "npm install -g @angular/cli".
* Crear el proyecto de angular ==> "ng new frontend".
* Instalar bootstrap con node.js ==> "npm install bootstrap@5.2.2"
* Agregar en el documento angular.json lo siguiente dentro de: 
  "style": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ] 
* agregar el CDN de los iconos desde fontawesome CDN al archivo index.html.
* buscar los iconos a utilizar desde fontawesome icon.
* Instalar el siguiente paquete ==> "npm install sweetalert2" para mensajes emergentes.
* Importar sweetalert2 donde se va a utilizar "import Swal from 'sweetalert2';"

* Crear las carpetas components, services, models dentro de la carpeta app.
* Crear el componente manage-products ==> "ng generate component components/manage-products" o "ng g c components/manage-products"
* Crear el componente list-products ==> "ng generate component components/list-products" o "ng g c components/list-products"

* Crear el servicio product ==> "ng generate service services/product" o "ng g s services/product"

* Crear el modelo product ==> se crea manualmente el archivo product.ts en la carpeta models.

* Comfigurar el archivo app-routing.module.ts dentro del array routes se agregan los objetos de las rutas.
* Crear la siguiente ruta al final del array ==> {path: "**", redirectTo: "", pathMatch: "full"} para redirecionar entry points desconocidos.


# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
