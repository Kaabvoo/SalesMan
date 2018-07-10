const fs = require('fs');

const control ={
    inicio(req, res){
        fs.readFile('./pages/arrive.html', (err, data)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send(data.toString('utf-8'));
            }
        })
    },
    check(req, res){
        console.log(req);
    }
}
module.exports = control;