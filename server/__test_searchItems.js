const fetch = require("node-fetch")

let url = "http://localhost:5000/search"
let url = "http://localhost:5000/search?foodName=à&foodType=Main"
let food = "20201"

function getFoodsByName(url, callback) {
    fetch(url + "/" + foodID)
        .then(response => response.json())
        .then(result => callback(result));
}

getFoodsByName(url, (data) => console.log({ data }))