const sequelize=require("./db");
var express=require("express")
const app=express();
const user=require("./modal/user")
const { Op } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.get("/",(req,res)=>{
res.send("this is express js ")
})



app.post("/user",async(req,res)=>{
    const{firstName,lastName,userdata}=req.body;
    // console.log(req.body)
    const data=user.create({
        firstName:firstName,
        lastName:lastName,
        userdata:userdata,
        uid:uuidv4()
    })
    if(data){
        res.send({message:"add data successfully"})
    }else{
        res.send({message:"add invalid"})

    }

})

app.get("/getalluser",async(req,res)=>{
    const realdata=await user.findAll({attributes:["firstName","lastName"], order: [
        ['firstName', 'DESC'],
        ['lastName', 'ASC'],
    ],});
  
    
    // const realdata=await user.findAll({where:{[Op.or]:[{firstName:"manish"},{lastName:"malhotraty"}]}})
    // const realdata=await user.findAll({where:{
    //     // [Op.eq]:[{id:3}]
    //     id: {
    //         // Basics
    //         // [Op.lte]: 5,
    //         [Op.between]: [3,6],
    //     }
    // }
    // })


    res.send(realdata)
})

app.put("/update",async(req,res)=>{
    const{id,firstName}=req.body;
    const data=await user.findOne({where:{id:id}})
    data.firstName=firstName;
    res.send(data)
})


app.delete("/delete",async(req,res)=>{
    const data=await user.destroy({where:{id:req.body.id}})
})









// sequelize
//     .sync({
//         alter: true,
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });




app.listen(5000,()=>{
    console.log("port is Running")
})