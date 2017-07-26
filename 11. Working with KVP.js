function solve(input) {
    let allKVP = [];
    for (let i = 0; i < input.length - 1; i++) {
        let kvp = input[i].split(" ");
        allKVP[kvp[0]] = kvp[1];
    }
    let key = input[input.length-1];
    if (allKVP[key]){
        console.log(allKVP[key]);
    } else {
        console.log("None");
    }
}
solve(['3 bla',
    '3 alb',
    '2']);