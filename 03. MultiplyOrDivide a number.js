function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    if (num1 <= num2){
        console.log(num1 * num2);
    }
    else {
        console.log(num1 / num2);
    }
}
solve(['3', '2']);