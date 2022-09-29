const {DataTypes} = require("sequelize")


module.exports=(sequelize)=>{
    sequelize.define('staff',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        avatar:{
            type:DataTypes.STRING,
            allowNull:Null
        }, 
        document:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        addres:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone:{
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