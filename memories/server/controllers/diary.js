const diaryModel = require("../models/diary");

const diaryModel = new diaryModel();

exports.getDate = async (req, res) => {
  let diaries = await diaryModel.getDate();
  res.json(diaries);
};
exports.twentyWords = async (req, res) => {
  const { id } = req.params;
  let user = await diaryModel.GetِDiaryById(id);
};
exports.description = async (req, res) => {
  let diary = diaryModel.Register(req.body);
  res.json(user);
};
