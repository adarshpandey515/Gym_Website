

function avg(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

// module.exports = avg; //single function exported
module.exports = {  
    avg:avg, //multiple functions exported
    name: "adarsh",
    repo: "Github"
};

// module.exports.name="Adarsh"; //to export a single property of an object 