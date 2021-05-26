const fetch = require("node-fetch")

let url = "http://localhost:5000/foods"

function getData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(result => callback(result));
}

getData(url, (data) => console.log({ data }))