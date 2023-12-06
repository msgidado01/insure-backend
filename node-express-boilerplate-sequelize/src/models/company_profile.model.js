module.exports = (sequelize, dataType) => {
  const companyProfile = sequelize.define('companyProfile', {
    companyName: {
      type: dataType.STRING,
      allowNull: false,
    },
    companyAddress: {
      type: dataType.STRING,
      allowNull: false,
    },
    license: {
      type: dataType.STRING,
      allowNull: false,
    },
    teamCapacity: {
      type: dataType.INTEGER,
      allowNull: false,
    },
    // userName:{
    //   type: dataType.STRING,
    //   allowNull: false,
    //   unique:true
    // },
    // password: {
    //   type: dataType.STRING,
    //   allowNull: false,
    //   trim: true,
    //   minlength: 8,
    //   validate(value) {
    //     if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    //       throw new Error('Password must contain at least one letter and one number');
    //     }
    //   },
    // },
  });
  return companyProfile;
};
