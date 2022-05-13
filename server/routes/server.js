const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

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

router.use(bodyParser.urlencoded({extended: true}))
router.use(express.json())
router.use(cors());

router.get('/Posts', (req,res) =>{

    const sqlSelectAll = "SELECT * FROM blogPosts"

    db.query(sqlSelectAll, (err,result) => {

        res.json(result);
    });
})


router.post('/Post', (req, res) => {
    const title = req.body.title;
    const postText = req.body.postText;
    const userName = 'default User';

    const sqlInsert = "INSERT INTO blogPosts (title, postText, userName) VALUES (?,?,?)"
    db.query(sqlInsert, [title, postText, userName], (err, result) =>{
        
        res.send(result)
    });
});

router.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

module.exports = router;