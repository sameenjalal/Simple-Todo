var http = require("http")
  ,url = require("url");

function start(route, handle) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    route(handle, pathname, res, req);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start
