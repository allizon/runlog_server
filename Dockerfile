FROM node:12.18.3-alpine3.12

WORKDIR /usr/src/app

# Install the packages at a lower level than the app code since it won't
# change as frequently.
COPY package*.json ./
RUN npm install

# Copy our app code into the image -- when this code changes, it won't force
# a rebuild at lower levels (including npm packages).
COPY . .

EXPOSE 8080

RUN tsc
CMD ["node", "out/server.js"]


