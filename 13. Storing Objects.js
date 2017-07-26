function solve(input) {
    let allObj = [];
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" -> ");
        let obj = {
            Name: tokens[0],
            Age: tokens[1],
            Grade: tokens[2]
        };
        allObj.push(obj);
    }
allObj.forEach(e => {
   console.log(`Name: ${e.Name}`);
    console.log(`Age: ${e.Age}`);
    console.log(`Grade: ${e.Grade}`);
});
}
solve(['Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
'Toni -> 13 -> 4.90']);