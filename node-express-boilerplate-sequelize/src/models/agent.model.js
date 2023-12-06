module.exports = (sequelize, dataType) => {
  const agent = sequelize.define('agent', {
    // userId: {
    //   type: dataType.INTEGER,
    //   allowNull: false,
    //   trim: true,
    // },
    // companyId: {
    //   type: dataType.STRING,
    //   allowNull: false,
    //   trim: true,
    // },
    hasChangedPassword: {
      type: dataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      trim: true,
    },
    firstName: {
      type: dataType.STRING,
      allowNull: true,
      trim: true,
    },
    lastName: {
      type: dataType.STRING,
      allowNull: true,
      trim: true,
    },
    middleName: {
      type: dataType.STRING,
      allowNull: true,
      trim: true,
    },
    gender: {
      type: dataType.ENUM('male', 'female'),
      allowNull: true,
      trim: true,
    },
  });

  return agent;
};
