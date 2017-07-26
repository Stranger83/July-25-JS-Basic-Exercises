function solve(input) {
    let allObj = [];
    for (let i = 0; i < input.length; i++) {
        let obj = JSON.parse(input[i]);
        allObj.push(obj);
    }
    allObj.forEach(e => {
        console.log(`Name: ${e.name}`);
        console.log(`Age: ${e.age}`);
        console.log(`Date: ${e.date}`);
    });
}
solve(['{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}']);