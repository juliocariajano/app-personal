const {DataTypes, UUIDV4} = require("sequelize")


module.exports=(sequelize)=>{
    sequelize.define('staffs',{
        id:{
            type:DataTypes.STRING,
            defaultValue:UUIDV4,
            // autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        avatar:{
            type:DataTypes.STRING,
            allowNull:false
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