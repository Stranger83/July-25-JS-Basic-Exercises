function solve(input) {
    let len = Number(input[0]);
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr[i] = 0;
    }
    for (let j = 1; j < input.length; j++) {
        let elementArr = input[j].split(" - ");
        arr[elementArr[0]] = elementArr[1];
    }
    for (let k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }
}
solve(['5',
    '0 - 3',
    '3 - -1',
    '4 - 2']);