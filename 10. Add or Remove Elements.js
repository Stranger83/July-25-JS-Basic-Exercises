function solve(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let num = Number(tokens[1]);
        switch (command){
            case "add":
                arr.push(num);
                break;
            case "remove":
                arr.splice(num, 1);
                break;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    }
}
solve(['add 3',
    'add 5',
    'remove 2',
    'remove 0',
    'add 7']);