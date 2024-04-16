const gettodosDataComponent = require('../../components/gettodosDataComponent')

module.exports = async (req, res) => {
  try {
    const employeesData = await gettodosDataComponent(req, res);
    res.end(JSON.stringify(employeesData));
  } catch (error) {
    res.end(JSON.stringify(error));
  }
};