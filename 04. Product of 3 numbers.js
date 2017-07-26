function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    if (a === 0 || b === 0 || c === 0){
        console.log("Positive");
        return;
    }
    let negativeCount = 0;
    if (a < 0){
        negativeCount++;
    }
    if (b < 0){
        negativeCount++;
    }
    if (c < 0){
        negativeCount++;
    }
    let isNegative = true;
    if (negativeCount % 2 === 0) {
        isNegative = false;
    }
    if (isNegative){
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}
solve(['5', '-4', '-3']);