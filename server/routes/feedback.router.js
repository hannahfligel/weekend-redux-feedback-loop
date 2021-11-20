const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error)
        res.sendStatus(500);
    });
})

// POST Route
router.post('/', ( req, res ) => {
    console.log("req.body", req.body);
    //create a const called queryString and give it the value of the commend being sent to the db 
    const queryString = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES($1, $2, $3, $4);`;    
    let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( error )=>{
            res.sendStatus( 500) ;
       })
}) // END POST Route

module.exports = router;