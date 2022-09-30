const {default: axios} = require ("axios");
const {Staffs, Process} = require("../db");

async function createStaffDb(req, res){
    try{
        const infoApi = await axios.get("https://app-balance-9e080-default-rtdb.firebaseio.com/personal.json");
        // console.log(infoApi)
        const infApiMap= infoApi.data.map((e)=>{
            return {
                id:e.id,
                name:e.name,
                address:e.adress,
                avatar:e.avatar,
                document:e.document,
                phone:e.phone
            };
        });
    console.log("soy infApi",infApiMap)
    infApiMap.forEach(e=>{
        Staffs.findOrCreate({
            where:{
                id:e.id,
                name:e.name,
                addres:e.address,
                avatar:e.avatar,
                document:e.document,
                phone:e.phone

            }
        });
    })
    console.log("Se ha cargado los datos correctamente")
    }catch(error){
        console.log(error)
    }
}

const getAllStaff= async(req,res)=>{
    try {
       let allStaffs =  await Staffs.findAll({
            include:[{
                    model:Process,
                    attribute:["description"]
                }]
        });
        res.status(200).send(allStaffs)
        
    } catch (error) {
        console.log(error)
    } 
}

module.exports = {createStaffDb, getAllStaff}