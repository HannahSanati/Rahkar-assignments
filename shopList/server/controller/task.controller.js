let item = [];
let count = 1;
exports.createTask = (req, res) => {
  console.log(req.body);
  const { itemName } = req.body;
  item.push({ title: itemName.title , id : count++ , isDone : false});
  res.json({ sucess: true, data: item });
};
