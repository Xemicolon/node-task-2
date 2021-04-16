const https = require("https");
const { Folder, File } = require("./services/index");

https
  .get("https://jsonplaceholder.typicode.com/posts", (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk.toString("utf8");
    });

    response.on("end", () => {
      //   check for existence of result directory else create a directory result
      const folder = new Folder("result");
      folder.createFolder();
      const file = new File();
      // creates posts.txt file
      file.createTextFile("posts.txt", data);
      // creates posts.json file
      file.createJsonFile("posts.json", data);
      return data;
    });
  })
  .on("error", (err) => {
    console.log(err.message);
  })
  .end();
