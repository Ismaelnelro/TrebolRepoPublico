// import httpProxy from 'express-http-proxy';
// import config from '../config';

// type targetPath = 'login' | 'register';

// // TODO: manejar  el envirmoent esto en el archivo config 
// const enviroment = 'dev'
// let URL_PROXY: string;
// if (enviroment === 'dev') {
//   URL_PROXY = `${config.uriProxy_DEV}`;
// } else if (enviroment === 'prod') {
//   URL_PROXY = `${config.uriProxy_PRO}`;
// }

// const createProxy = (targetPath: targetPath) => {

//   return httpProxy(`${URL_PROXY}`, {

//     proxyReqPathResolver: async (req) => {
//       return `${URL_PROXY}${targetPath}`;
//     },

//     proxyReqBodyDecorator: async (bodyContent, srcReq) => {
//       // Puedes modificar el contenido del cuerpo aquí antes de enviarlo
//       // Por ejemplo, simplemente devuelve el contenido original del cuerpo
//       return bodyContent;
//     },
//     userResDecorator: async (proxyRes, proxyResData, userReq, userRes) => {
//       // Aquí puedes procesar la respuesta del servidor destino (proxyResData)
//       // Puedes realizar cualquier manipulación necesaria en proxyResData
//       // Envía la respuesta procesada al servidor principal
//       const responseBody = proxyResData.toString('utf8');
//       const jsonResponse = JSON.parse(responseBody);
//       return jsonResponse;
//     },
//     proxyErrorHandler: (err, res, next) => {
//       console.error('Error en el proxy:', err);
//       res.status(500).json({ error: 'Error en el servidor de autenticación' });
//     }
//   });
// };

// export { createProxy }