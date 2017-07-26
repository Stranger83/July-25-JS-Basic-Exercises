function solve(input) {
    let num = Number(input);
    let res = '';
    for (let i = 1; i <= num; i++) {
        res += `${i}\r\n`;
    }
    console.log(res);
}
solve(['10']);