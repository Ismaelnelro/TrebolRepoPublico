
<p align="center">
<img src="https://github.com/Ismaelnelro/Trebol/blob/develop/client/public/assets/brand/logo.png?raw=true"/>
</p>
<h1 align="center" style="font-size: 100px;">TrebolNET</h1>

<p align="center" style="font-size: 26px">
<span style="color:#0EA94C">TrebolNET</span>es una página de inicio de referencia de todas tus redes sociales, para luego ser compartido con quien quieras conectarte.
</p>
<hr/>


## Características

- **Registro de Cuenta**: Regístrate utilizando tu correo electrónico, nombre y contraseña.
- **Inicio de Sesión**: Inicia sesión con tu correo electrónico y contraseña.
- **Perfil Personalizado**: Accede a tu perfil donde puedes editar la información de contacto y la apariencia.
- **Enlaces de Contacto**: Agrega hasta 5 enlaces a tus perfiles en GitHub, página web, LinkedIn, etc.
- **Avatar Personalizado**: Elige un avatar que represente tu identidad en la plataforma.
- **Personalización de Fondo**: Cambia el color de fondo de tu perfil según tus preferencias.


## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/Ismaelnelro/Trebol.git
    ```

2. Instala las dependencias del proyecto:

    ```bash
    cd trebol
    npm install
    ```

3. Crea la base de datos en MongoDB [Documentación de MongoDB](https://docs.mongodb.com/)


4. Configuracion de variables de entorno en los archivos .env.example tanto en folder client(FrontEnd) como service(BackEnnd)
    1.  FrontEnd: Primero renombra el archivo .env.example a .env.local, luego agrega la variable: [VITE_BACKEND_URL] 
    2.  BackEnd: Primero renombra el archivo .env.example a .env, luego agrega las variables: [PORT , DB_URI] 

5. Ejecutar comandos en terminal integrada para folder client y service:

    ```bash
    npm run dev
    ```


6. Abre tu navegador web y visita `http://localhost:5173/` para comenzar a utilizar TrebolNET.


## Tecnologías Utilizadas

- Frontend:
  - HTML5
  - CSS3
  - React.js

- Backend:
  - Node.js
  - Express.js
  - MongoDB


## Autores

- Nelson Ismael Rosas



¡Gracias por usar TrebolNET! 🍀


# SECCION DE CORRECCIONES 


## BUGS ENCONTRADOS FRONTEND
1.  No se notifica mediante pupUp al momento de logeo las credenciales incorrectas.
2.  Boton Register habilitado al crear la cuenta lo cual genera cuentas duplicadas.
3.  Username capitalizer  no se identifican al buscar un perfil de username 
4.  Al logear o registrarse se mueve el formulario
5.  Password debil
7.  Identificar mejor el acceso a settings 

## BUGS ENCONTRADOS BACKEND
1.  Validar correctamente las credenciales
2.  Creacion de cuentas con mismo email (Email duplicado)
3.  Evitar userName duplicados
4.  Validar Passwords mas fuertes


## FEATURES
1.  Eliminar cuenta
2.  Retorno a LandingPage desde Login o Registro
3.  Busqueda de perfiles desde LandingPage y otros sectores
4.  Notificacion de creacion de cuenta en correo electronico
5.  Juego didactico de competicion entre usuarios (Futuro)
6.  Registro agregar userName