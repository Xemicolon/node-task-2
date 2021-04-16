const fs = require("fs");

class File {
  createTextFile(filename, data) {
    fs.writeFile("./result/" + filename, data, (err) => {
      if (err) {
        console.log("An error occured while creating a new file");
        console.log(err);
        return err;
      }
      console.log("A new txt file has been created");
    });
  }

  createJsonFile(filename, data) {
    fs.writeFile("./result/" + filename, data, (err) => {
      if (err) {
        console.log("An error occured while creating a new file");
        console.log(err);
        return err;
      }
      console.log("A new json file has been created");
    });
  }
}

module.exports.File = File;
