const no=[10,20,30,40];
let result=no.reduce(getSum);
function getSum(total,value,index,array)
{
	return total=total+value;
}
	console.log("Sum of Array is:"+result);