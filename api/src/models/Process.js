const {DataTypes} = require("sequelize")


module.exports=(sequelize)=>{
    sequelize.define('process',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        date_process:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        amount:{
            type:DataTypes.STRING,
            allowNull:false
        }, 
        
    },{
        createdAt:false,
        updateAt:false,
        deletedAt:"deletedAt",
        paranoid:true,
        timestamps:true,
    }
    )
}