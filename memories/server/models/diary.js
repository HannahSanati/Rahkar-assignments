const db = require("../utils/database");

class diaryModel {
  async getDate() {
    const query = "select *from diaries";
    let [rows] = await db.connection.execute(query);
    return rows;
  }
  async twentyWords(data) {
    const { twentyWords } = data;
    const query = "select * from diaries where (twentyWords) value (?)";
    let [rows] = await db.connection.execute(query);
    return rows;
  }
  async description( ) {
    const query = "insert into diaries ( id ) values (?)";
  }
}
module.exports = diaryModel;
