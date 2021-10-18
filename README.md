# Apalabrados
Prueba técnica para el programa platzi master.

## Backend

- Template basico de express con conexión a una base de datos de mongo, te permite agregar items a una colleccion y obtener el contenido de la misma
### DB Connection

Puedes usar una base de datos de mongo desde  [mongo atlas](http:/https://www.mongodb.com/cloud/atlas/ "mongo atlas").
Los requetimientos para la conexión estan en el archivo .env.example:
- DB_USER
- DB_PASSWORD
- DB_HOST
- DB_NAME

### Funciones

El programa incluye las peticiones basicas de: 
- getItems 
- createItem

### Como usar
Una vez tengas tu base de datos:

1. Clone el proyecto y ve a la carpeta de backend.
	
2. Instala las dependecias:
	`npm install`
	
3. Crea el archivo .env con tu configuración.
4. Ejecuta el proyecto:
	`npm run dev` o `npm start`

## Frontend

- Frontend básico creado con Reactjs

### Páginas

* Home: Permite agregar un input y lo clasifica en una tabla.
* Numbers: Muestra la tabla de números.
* Texts: Muestra la tabla de textos.
* Chaaracters: Muestra la tabla de caracteres.

### Reglas

El home cuenta con ciertas reglas para clasificar el imput:

- Si es un número, lo guarda en la tabla numeros. En la columna número guardará el input y acumulará el valor con los valores anteriores de la misma tabla, este se almacenará en acumulado.
- Si es un texto, debe almacenar en la tabla texto. Guarda el input en la columna texto, el caracter inicial se guarda en la columna inicial y el caracter final se guarda en la columna final.
- Si el input tiene algún caracter especial como tilde, coma, punto y coma, punto, numeral o parecidos, debe extraerlo del input y enviar el caracter a la tabla caracteres, columna caracter. El resto del input se descarta.


### Diagrama de Flujo

![](https://i.imgur.com/NO2M6zh.png)

### Como usar

Una vez este funcionando tu backend: 

1. Clone el proyecto y ve a la carpeta de frontend.
	
2. Instala las dependecias:
	`yarn install`
	
3. Crea el archivo .env con tu configuración.
4. Ejecuta el proyecto:
	`yarn start`

## Demo

Mira la implementación:

* Frontend: https://murmuring-anchorage-42572.herokuapp.com/
* Backend: https://secure-savannah-58734.herokuapp.com/
