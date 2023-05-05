FROM node:18.15.0-alpine

# configura a porta do container
EXPOSE 5000

# configura o diretório do container
WORKDIR /home/app

# copia os arquivos pra dentro do container
COPY . .

#instala as dependências
RUN npm install

# inicia o container
CMD ["npm", "run", "dev"]