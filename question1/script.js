arrayLength=+prompt("enter a number");
const array=[];
let inverted = true;
 
    for (let i = 0; i < arrayLength; i++) {

      let arrayValue=+prompt("enter a number ");
      array.push(arrayValue)

    }
    for(let i=0;i<array.length/2;i++){
        
      if(array.at(i) !== array.at((i+1)*-1)){

        inverted=false
        break;
      }
    }
   
    console.log(inverted ? "it's inverted" : "it's not inverted");
  
