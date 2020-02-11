// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(el => -el)
}
function mapToNoChange(sourceArray){
  return sourceArray.map(function(el){
    return el
  })
}
function mapToDouble(sourceArray){
  return sourceArray.map(el => el*2)
}
function mapToSquare(sourceArray){ 
  return sourceArray.map(el => el*el )
}

function reduceToTotal(sourceArray, startingPoint){
  return sourceArray.reduce(((a,b)=> a+b),startingPoint)
  
}


function reduceToAllTrue(sourceArray){
  return sourceArray.reduce((el,al) => el==true&&al==true ? true:false)
}

function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce((el,al) => el==true||al==true ? true:false)
}