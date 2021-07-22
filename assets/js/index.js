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
