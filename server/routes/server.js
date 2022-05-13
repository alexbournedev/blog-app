const express = require('express')

// const db = require('./Config/db')

const router = express();

const port = 3003; 

const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_new_password',
    database: 'BlogAppDB'

})

db.connect(function(err){
    if(err) throw err;
    console.log("Connected")
})


router.get('/', (req, res) => {
    db.query(
        "INSERT INTO blogPosts (title, postText, userName) VALUES ('How To Add To A Database', 'There are a lot of steps to a database but I will not be able to go through all of them right now', 'wreed3rd')", 
        (err, result) => {
            console.log("error", err);
            console.log("result", result);
            res.json(err || result);
        }
    );
});

router.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

module.exports = router;