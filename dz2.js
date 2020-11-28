function copy(obj) {
    let newObj = {};

    for (let key in obj) {
        let isObj = typeof obj[key];

        if (isObj == 'object') {
            newObj[key] = copy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

let user = {
    name: "Саша",
    params: {
        height: 185,
        weight: 80
    }
};

let user2 = copy(user);
user2.params.height = 190;
user2.name = "Василий";


console.log(user2);
console.log(user);
