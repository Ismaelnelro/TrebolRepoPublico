import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5001,
  database: process.env.DB_URI,
  // uriProxy_PRO: process.env.URI_PROXY_PROD,
  // uriProxy_DEV: process.env.URI_PROXY_DEV,
  corsOptions: {
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'multipart/form-data'],
    credentials: true,
    preflightContinue: true,
  }
}


export default config;