const http = require('http');
const htmlHanlder = require('./htmlResponses.js');
const textHanlder = require('./textResponses.js');
const jsonHanlder = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');


const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHanlder.getIndex(request, response);
      break;

    case '/page2':
      htmlHanlder.getPage2(request, response);
      break;

    case '/hello':
      textHanlder.getHello(request, response);
      break;

    case '/time':
      textHanlder.getTime(request, response);
      break;

    case '/helloJSON':
      jsonHanlder.getHelloJSON(request, response);
      break;

    case '/timeJSON':
      jsonHanlder.getTimeJSON(request, response);
      break;

      case '/dankmemes':
        imageHandler.getImage(request, response);
        break;

    default:
      htmlHanlder.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
