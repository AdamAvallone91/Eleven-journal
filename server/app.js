require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");

app.use(require('./middleware/headers'));
const controllers = require("./controllers");

app.use(Express.json());

app.use("/user", controllers.userController);

// app.use(require("./middleware/validate-jwt"));
app.use("/journal", controllers.journalController);


dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
app.listen(3000, () => {
    console.log(`[server]: App is listening on 3000.`);
});
    })
    .catch(() => {
        console.log(`[server]: Server crashed. Error = ${err}`);
    });