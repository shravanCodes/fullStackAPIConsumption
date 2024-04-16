const getUsersData = require('../../components/getUsersData')

module.exports = async (req, res) => {
    try {
        const usersData = await getUsersData(req, res);
        res.end(JSON.stringify(usersData));
    } catch (error) {
        res.end(JSON.stringify(error));
    }
};