let arr=[1, 2, 3, 4, 5];  
function areAllElementsPositive(arr)
 {
    for (let i = 0; i < arr.length; i++) 
	{
        if (arr[i] <= 0) {
            return false;  
        }
    }
    return true;  
}

console.log(areAllElementsPositive(arr)); 
