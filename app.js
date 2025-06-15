const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const con = require('./db/connection');  // Database connection
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const router = express.Router();

// Home Route - Show the form
router.get('/', (req, res) => {
    res.render('index');
});



// POST Route - Insert data into the database
router.post('/', (req, res) => {
    const { name, email, phone, message } = req.body;

    const qry = `INSERT INTO contactwithankit (name, email, phone, message) VALUES (?,?,?,?)`;

    const values = [name, email, phone, message];

    con.query(qry, values, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log("Data submitted successfully");
            res.redirect('/');
            
        }
    });
});


app.use('/', router);

const PORT = process.env.PORT || 1010;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
