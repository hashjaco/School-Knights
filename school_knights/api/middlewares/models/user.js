module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INT,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.String,
            allowNull: false
        },
        lastName: {
            type: DataTypes.String,
            allowNull: false

        },
        address: {
            type: DataTypes.String,
            allowNull: false

        },
        phoneNumber: {
            type: DataTypes.INT,
            allowNull: false

        },
        emailAddress: {
            type: DataTypes.String,
            allowNull: false
        },
        school: {
            type: DataTypes.INT,
            allowNull: true
        },
        createdAt: sequelize.Date,
        updatedAt: sequelize.Date,
        userType: {
            type: DataTypes.INT
        }
    })

    User.associate = models => {
        User.hasMany(models.trips)
    }
}