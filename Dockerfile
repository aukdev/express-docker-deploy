FROM node:lts-alpine3.20
WORKDIR /aukserver
COPY . .
RUN npm install
RUN npm run build
RUN npx prisma generate
EXPOSE 4000
CMD ["npm","start"]