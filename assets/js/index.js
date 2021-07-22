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