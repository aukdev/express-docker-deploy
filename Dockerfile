FROM node:lts-alpine3.20
WORKDIR /server
COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build
EXPOSE 4000
CMD ["npm","start"]