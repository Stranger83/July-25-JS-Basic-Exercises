function solve(input) {
    function parseKVP(str) {
        let tokens = str.split(" ");
        let result = {
            key: tokens[0],
            value: tokens[1]
        };
        return result;
    }
    let allKVP = input.slice(0,-1).map(parseKVP);

    let dict = {};
    allKVP.forEach(element => {
        if (!dict[element.key]) {
            dict[element.key] = [];
        }
        dict[element.key].push(element.value);
    });

    let searchKey = input[input.length - 1];
    if (dict[searchKey]) {
        console.log(dict[searchKey].join('\n'));
    } else {
        console.log("None");
    }
}
solve(['3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4']);