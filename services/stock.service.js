const axios = require('axios');

const urlApi = "https://financialmodelingprep.com/api/v3/quote-short";
const apikey = "c13a5d2ecf7cc6b8c50c06d7e1dfce22";
const stocks = ["AAPL", "GOOGL", "AMZN", "TSLA", "FB", "TWTR", "UBER", "LYFT", "SNAP", "SHOP"];

const calculateStocks = async () => {
    try {
        let total = 0;
        for(stock of stocks) {
            const res = (await (axios.get(`${urlApi}/${stock}?apikey=${apikey}`))).data;
            total = total + res[0].price;
        }
        console.log(total);
        return total;
    } catch (e) {
        console.log(e.message);
    }
    return 0;
}

module.exports = {calculateStocks}
