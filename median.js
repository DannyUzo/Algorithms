// // const Median = () => {
//     let arr = [1, 10, 6, 4, 8, 3, 7, 5, 9, 2, 11, 12, 13];
//     let n = arr.length;

//     const sortedarr = arr.sort((num1, num2) => num1 - num2);
//     const reqnum = n / 2;
//     if((n % 2) == 1) {
//       var round =  Math.round(reqnum)
//         console.log(sortedarr[round])
//     }else{
//         console.log("even")
//     }
//     const req = sortedarr[reqnum];
//     console.log(req)
//     // return req
// // }

const Median = () => {
    let arr = [1, 10, 6, 4, 8, 3, 7, 5, 9, 2, 11, 12, 13];
    let n = arr.length;

    const sortedarr = arr.sort((num1, num2) => num1 - num2);
    const reqnum = n / 2;
    
    if (n % 2 === 1) {
        // If the array length is odd
        var medianIndex = Math.floor(reqnum);
        console.log("Median:", sortedarr[medianIndex]);
    } else {
        // If the array length is even
        var medianIndex1 = reqnum - 1;
        var medianIndex2 = reqnum;
        var median = (sortedarr[medianIndex1] + sortedarr[medianIndex2]) / 2;
        console.log("Median:", median);
    }
}

Median();
