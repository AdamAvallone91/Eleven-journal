const Express = require("express");
const app = Express();

const controllers = require("./controllers");

app.use("/journal", controllers.journalController);
app.listen(3000, () => {
    console.log(`[server]: App is listening on 3000.`);
});