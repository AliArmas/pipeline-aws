FROM node:14.19.3
RUN mkdir -p /docker/usr/src/app
#establecer espacio de trabajo
WORKDIR /docker/usr/src/app
#
COPY package*.json ./

#instalar packeterias
RUN npm install
#copiar archivos en la ruta actual
COPY . .
# #puerto expuesto
EXPOSE 8080
#comando para ejecutarse
CMD [ "npm","start" ]
