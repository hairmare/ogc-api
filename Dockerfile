FROM hairmare/node
Maintainer Lucas Bickel <hairmare@purplehaze.ch>

# install app

COPY index.js /opt/ogc-api/index.js
COPY package.json /opt/ogc-api/package.json
COPY README.md /opt/ogc-api/README.md
COPY app /opt/ogc-api/app

WORKDIR /opt/ogc-api
RUN npm install

# configure app

COPY config.json-dist /opt/ogc-api/config.json

# configure runtime

CMD bash -c 'sed -i -e "s|\"mongodb://.*/\(.*\)\"|\"mongodb://"$MONGODB_PORT_27017_TCP_ADDR"/\1\"|" /opt/ogc-api/config.json; /opt/ogc-api/index.js'
EXPOSE 80
