require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');


let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();
// sequelize.sync({force: true});
app.use(require('./middleware/headers'));

app.use(express.json());

/***************
 * Exposed route*
 */
app.use('/user', user);

/************
 * Protected route*
 */

app.use('/journal', journal);

app.listen(3000, function () {
    console.log("App is listening on port 3000");
});


// app.use("/test", function (req, res) {
//     res.send("This is a message from the test endpoint on the server!");
// });

// app.use("/adzia", function (req,res) {
//     res.send("My name is Adzia and I'm 10 years old.");
// });

// Have endpoint of journal/ practice
// send a response from that endpoint (This is a practice route)