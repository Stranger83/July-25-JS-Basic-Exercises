function solve(input) {
let obj = {};
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" -> ");
        let key = tokens[0];
        let value = tokens[1];
        if (value == parseInt(value)){
            value = parseInt(value);
        }
        obj[key] = value;
    }
    console.log(JSON.stringify(obj));
}
solve(['name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia']);