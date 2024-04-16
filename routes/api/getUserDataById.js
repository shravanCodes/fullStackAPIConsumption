const getUserDataByIdComponent = require('../../components/getUserDataByIdComponent')

module.exports = async (req, res) => {
  try {
    const employeesDataById = await getUserDataByIdComponent(req, res);
    res.end(JSON.stringify(employeesDataById));
  } catch (error) {
    res.end(JSON.stringify(error));
  }
};