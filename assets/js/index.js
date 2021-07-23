// first task

const myArray = [4, -2, 5, 19, -130, 0, 10];

const returnMinMaxValues = function (myarray){
  let maxValue = -Infinity;
  let minValue = Infinity;
  for(let i=0; i < myarray.length; i++){
    if(myarray[i]>maxValue){
      maxValue = myarray[i];
   } else {
     continue;
   }
  }
  for(let i=0; i < myarray.length; i++){
    if(myarray[i] < minValue){
      minValue = myarray[i];
   } else {
     continue;
   }
  }
  return [maxValue, minValue];
}

// second task

const arr = [12, 15, 20, 25, 59, 79];

const returnAverageValue = function(array){
  let result=0;
  for(let i=0; i < array.length; i++){
    result+= array[i];
  }
  return (result/array.length);
}

// third task 

const getRandomNumberFrom = function(){
  return Math.floor(Math.random()*(101));
}

// fourth task

let myRandomArray = []; 
for(let i=0; i < 10; i++){
  myRandomArray[i] = getRandomNumberFrom();
}

// first task from document 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

// second task from document

const arr1Reversed = arr1.reverse();

// third task from document

const array1 = [1, 2, 3];
array1.push(4, 5, 6);



const array2 = [1, 2, 3];
array2.unshift(4, 5, 6);


