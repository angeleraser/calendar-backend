const moment = require("moment"),
  isValidDate = (date) => {
    if (!date) {
      return false;
    }
    return moment(date).isValid();
  };
module.exports = {
  isValidDate,
};
