# Etapa de construcción
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

# Instalación de dependencias
RUN npm install

COPY . .

# Construcción del proyecto
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar archivos generados de la etapa de construcción a la imagen de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80 para Nginx
EXPOSE 80

# Comando para iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

