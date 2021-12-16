const PORT = 8080;
const app = require("./app");
const { db } = require("./db");

const init = async () => {
  try {
    await db.sync({ force: true });

    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
