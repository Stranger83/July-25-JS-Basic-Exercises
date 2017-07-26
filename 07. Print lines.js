function solve(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Stop"){
            return;
        }
        console.log(input[i]);
    }
}
solve(['3',
    '6',
    '5',
    '4',
    'Stop',
    '10',
    '12']);