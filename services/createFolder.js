const fs = require("fs");

class Folder {
  constructor(folder) {
    this.folder = folder;
  }

  createFolder() {
    const folderExists = fs.existsSync("./" + this.folder);
    if (folderExists) {
      console.log("Result directory exists");
      return;
    }

    fs.mkdir("./result", (err) => {
      if (err) {
        console.log("An error occured while creating a new directory");
        console.log(err);
        return err;
      }

      console.log("A new directory has been created");
    });
  }
}

module.exports.Folder = Folder;
