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
  let newA= sourceArray.reduce(function(a,b){
    return a+=b;
  },startingPoint)
  return newA
}


function reduceToAllTrue(sourceArray){
  return sourceArray.reduce(function(){
    return true
  })
}

function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce(function(){
    return true
  })
}