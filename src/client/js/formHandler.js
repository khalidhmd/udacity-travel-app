const axios = require('axios')
async function callAPI(url) {
    const baseUrl = 'http://localhost:8080/test?url='
    try {
        const response = await axios.get(`${baseUrl}${url}`);
        return response.data;
    } catch (err) {
        console.log(err)
        return err;
    }
}


export { callAPI }