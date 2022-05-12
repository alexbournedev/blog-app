const express = require('express')

const router = express();

const port = 3003; 

router.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

router.get('/',(req, res, next) => {
    res.send('This is working properly');
});



module.exports = router;