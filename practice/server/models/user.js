const db = require("../utils/database");
const bcrypt = require("bcrypt")

const saltRounds = 10;

class UserModel {
  async getUser() {
    const query = "select *from users";
    let [rows] = await db.connection.execute(query);
    return rows;
  }
  async login(data) {
    const { username, password } = data;
    const query = "select * from users where (username, password) value (? , ?)";
    let [rows] = await db.connection.execute(query);
    return rows;
  }
  async Register(user) {
    const query = "insert into user (username, password) values (?, ?)";
    const { username, password } = user;
     db.connection.execute(query, [username, password])
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password, "cdcdcd");
  }
}
module.exports = UserModel;
