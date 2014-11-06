FROM hairmare/node
Maintainer Lucas Bickel <hairmare@purplehaze.ch>

# install deps

RUN emerge net-libs/zeromq -q

# stage app

COPY ogc-api.js /usr/local/src/ogc-api/ogc-api.js
COPY package.json /usr/local/src/ogc-api/package.json
COPY README.md /usr/local/src/ogc-api/README.md
COPY app /usr/local/src/ogc-api/app

# install app

RUN cd /usr/local/src/ogc-api; npm install -g && chmod +x /usr/lib/node_modules/ogc-api/ogc-api.js

# configure runtime

ENTRYPOINT [ "node", "/usr/lib/node_modules/ogc-api/ogc-api.js" ]

EXPOSE 80 3000
