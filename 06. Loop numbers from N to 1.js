function solve(input) {
    let num = Number(input);
    let res = "";
    for (let i = num; i > 0; i--) {
        res += `${i}\r\n`;
    }
    console.log(res);
}
solve(['5']);