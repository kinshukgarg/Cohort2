const express = require('express');
const app = express();

const user = [{
    name: 'rithik',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.get("/", function (req, resp) {
    const johnkidneys = user[0].kidneys;
    const numberofKidneys = johnkidneys.length;
    let numberofhealthykidneys = 0;

    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            numberofhealthykidneys = numberofhealthykidneys + 1;
        }
    }

    const numberofunhealthykidneys = numberofKidneys - numberofhealthykidneys;

    resp.json({
        johnkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    });
});

app.post("/", function (req, res) {
 const isHealthy=req.body.healthy;
 users[0].kidney.push({
    healthy:isHealthy
 })
 res.json({
    message:"Done"
 })
});

app.delete("/", function (req, res) {
    if(isThereAtleastOneUnhealthyKidney())
    {
        const newKidney=[]
        for(let i=0;i<users[0].kidneys.length;i++)
        {
            if(users[0].kidneys[i].healthy)
            {
                newKidney.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newKidneys;
        res.json({msg:"done"})
    }
    else{
        res.sendStatus(411,)
    }
});


app.put('/',(req,res)=>{
    for (let i=0;i<users[0].kidney.length;i++){
        users[0].kidneys[i].healthy=true
    }
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
