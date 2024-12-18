# Usar imagen base
FROM node:20

# Configuración del directorio
WORKDIR /app

# Copiar archivos de la app
COPY package*.json ./
RUN npm install

# Copiar todo
COPY . .

# Exponer puerto
EXPOSE 8080

# Ejecutar la app
CMD ["npm", "start"]

