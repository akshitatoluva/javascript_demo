//fetching api
async function getData(){
    let response=await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    let data=await response.json();
    let arrayData=data.data;

    console.log(arrayData[0]);
    console.log("Nation: " + arrayData[0].Nation);
    console.log("Population: " + arrayData[0].Population);

}
getData();

//array destructuring
const nums=[12,34,67,89];
const [first,second,third]=nums;
console.log(first);
console.log(second);
console.log(third);

//filter
let arr=[1,2,3,4];
let even= arr.filter((val)=>{
    return val%2==0;
});

console.log(even);




