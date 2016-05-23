var array = [ 1,2,3,4,5];
var sum = 0


array.splice(2,0,6)
for( var i = 0; i < array.length; i++){
  sum += array[i];
  console.log(sum);
}



$("div h2 span").text("$6,500");
