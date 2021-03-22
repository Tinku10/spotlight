FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install --silent && npx tailwind init --full && ngtw configure && touch src/tailwind.css && ngtw scripts

COPY . /app

CMD ["npm","start"]
