import { con } from "../connection.js";

// constructor

const Cat = function (cat) {
  this.id = cat.id;
  this.name = cat.name;
  this.image = cat.image;
};

Cat.getAll = (result) => {
  con.query("SELECT * FROM cats_adopted", (err, res) => {
    if (err) {
      console.error("An error occurred while executing the query");
      throw error;
    }
    console.log(res);
    result(null, res);
  });
};

Cat.create = (newCat, result) => {
  con.query("INSERT INTO cats_adopted SET ?", newCat, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.id, ...newCat });
  });
};

export default Cat;
