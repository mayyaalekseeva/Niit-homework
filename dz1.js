function sum(a) {

    let sum = a;

    function rec(b) {
        sum += b;
        return rec;
    }

    rec.toString = () => {
        return sum;
    };

    return rec;
}

console.log(sum(2)(3));
