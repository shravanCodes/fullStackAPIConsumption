const getUserDataByIdComponent = (req, res) => {
    return new Promise((resolve, reject) => {
        const userId = req.params.userId;
        const trialAPIData = `https://gorest.co.in/public/v2/users/${userId}`;
        fetch(trialAPIData)
            .then(response => {
                if (!response.ok) {
                    return reject(new Error('Network response error'));
                }
                return response.json();
            })
            .then(trialAPIConsumptionData => {
                console.log('trialAPIConsumptionData', trialAPIConsumptionData);
                resolve(trialAPIConsumptionData);
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error); // Pass the error object for handling
            });
    });
};

module.exports = getUserDataByIdComponent;