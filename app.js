//EX1
//A
// function power(){
//     const array = [1,2,3];
//     const integers=[];
//     for(let i = 0; i < array.length; i++){
//         array[i] = 2**array[i];
//         integers.push(array[i]);
//     }

//     return integers;
// }
// console.log(power());

//B
// function power(){
//     const integers=[];
//     const array = [1,2,3];
//     array.forEach(i => {
//         i = 2**i;
//         integers.push(i);
//     });
//     return integers;
// }
// console.log(power());

//C
// const array = [1,2,3];
// const integers = array.map(power);
// console.log(integers);
// function power(num){
// return 2**num;
// }




//EX2
// const array = [1,2,"Rawan",3,"Mustafa"];
// const integers = array.map(power);
// console.log(integers);
// function power(num){
// if(num%2==0){
//     num = "even";
// }else if (isNaN(num)){
//     num = "N/A";
// }else if(num%2!==0){
//     num = "odd";
// }
// return num;
// }




//EX3
// const array = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// array.forEach(i => {
//    console.log(i);
// });




//EX4
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];

function fizzbuzz(nums) {
    const result = [];
    nums.forEach(i => {
        if (i%3=== 0 && i%5=== 0) {
            result.push("Fizz Buzz");
        } else if (i%3=== 0) {
            result.push("Fizz");
        } else if (i%5=== 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    });
    return result;
}
console.log(fizzbuzz(numbers));
