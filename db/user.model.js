const { Model, DataType, Sequelize, INTEGER } = require("sequelize");

const USER_TABLE = "users";

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    },
    email: {
        allowNull: false,
        type: DataType.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataType.STRING
    },
    createAt: {
        allowNull: false,
        type: DataType.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW
    }
};

class User extends Model {
    static associate() {

    };
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: "User",
            timestamps: false

        }
    };
};

module.exports = {
    USER_TABLE,
    UserSchema,
    User
}