module.exports = (sequelize, DataTypes) => {
    const testleave = sequelize.define('testleave', {
      formID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      employeeName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      joinDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      leaveDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      leaveReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      file: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      }
    }, {
      freezeTableName: true,
    });

  
    return testleave;
  };
  