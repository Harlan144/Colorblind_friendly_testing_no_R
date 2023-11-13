FROM node:19-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .
RUN chmod -R 777 /app/

CMD ["node", "app.js"]
#CMD ["/bin/bash"]
