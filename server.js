const express = require("express");
const l = require("simple-logging");
const db = require("./data/access/access");

const MONGO_PATH = "mongodb+srv://<username>:<password>@stage-f869x.mongodb.net/notepad_db?retryWrites=true&w=majority";
const PORT = 3000;

const app = express();
db.connect(MONGO_PATH);

app.use(express.urlencoded({ encoded: false }));
app.use(express.json());

require("./routes/api")(app);

app.listen(PORT, () => l.info(`Server listening on port ${PORT}!`));
