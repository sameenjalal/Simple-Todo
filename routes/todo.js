function show(req, res) {
  res.render('todo', {
    title: "To-Do",
    show: "SHOW THIS",
    name: "Sameen",
    hello: "DOES IT REALLY WORK?"
  });
}

exports.show = show;
