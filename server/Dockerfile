# server/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install  && npm run compilation
EXPOSE 3000
CMD ["node", "dist/index.js"]