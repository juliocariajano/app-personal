const {DataTypes} = require("sequelize")


module.exports=(sequelize)=>{
    sequelize.define('account',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        id_account:{
            type:DataTypes.STRING,
            allowNull:false
        },
        name_account:{
            type:DataTypes.STRING,
            allowNull:Null
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