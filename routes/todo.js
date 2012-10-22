exports.show = function (req, res) {
  res.render('todo', {
    title: "To-Do App",
    tasks: []
  });
}

exports.add = function (req, res) {
  res.contentType("json");
  res.send({item: req.body.add_element});
}
