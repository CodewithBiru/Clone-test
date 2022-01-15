const Input = [1,2,3,3,4,5,5,6,7];
// Find count of each element
//  All the numbers for which count is >1 add then in a new array and print
// create an empty object
// start to itterate over each element of array
// 

function findDuplicate (arrofnumbers) {
 const countobj = {};
 const countduplicate = [];
arrofnumbers.forEach((num)=> {
    if(num in countobj){
        countobj[num]  =  countobj[num] + 1;
        if(!countduplicate.includes(num)) {countduplicate.push(num)};
    } else {
        countobj[num] = 1;
    }
});
console.log(countobj,countduplicate);
}

findDuplicate (Input);

console.log(Input.includes(10));
console.log(Input.includes(5));
// Flatten an array

// input ---an array of arrays
// [1,2],[2,3],[3,4]  ---- [1,2,2,3,3,4]

