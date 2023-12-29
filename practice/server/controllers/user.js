const UserModel = require("../models/user");

const userModel = new UserModel();

exports.GetUser = async (req, res) => {

  let users = await userModel.GetUser();
  res.json(users);
};

exports.GetUserById = async (req, res)=> {
 const {id} = req.params;
 let user = await userModel.GetUserById(id);

}
exports.login = async (req, res)=> {
 const {username, password} = req.body;
 let user = await userModel.login({username: username, password: password});

}

exports.Register = async (req, res)=> {
   let user= userModel.Register(req.body);
    res.json(user)
   }

