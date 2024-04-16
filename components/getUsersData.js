const getUsersData = (req, res) => {
    const trialAPIData = `https://gorest.co.in/public/v2/users`;
    return new Promise((resolve, reject) => {
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

module.exports = getUsersData;