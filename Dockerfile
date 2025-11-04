FROM node:24

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Csak a futtatáshoz szükséges fájlokat másoljuk
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]