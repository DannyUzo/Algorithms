const Median = () => {
    let arr = [1, 10, 6, 4, 8, 3, 7, 5, 9, 2, 5];
    let n = arr.length;

    const sortedarr = arr.sort((num1, num2) => num1 - num2);
    const req = sortedarr[9];
    const reqnum = n % 2;
    return reqnum
}
console.log(Median())