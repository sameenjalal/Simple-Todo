function todo(res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("Hello World");
  res.end();
}

exports.todo = todo;
