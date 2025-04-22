let a=[10,20,100,40];
console.log("Before Find Maximum Number "+a);
{
let max=0;
for(let i=0;i<a.length;i++)
{
	if(a[i]>max)
	{
	max=a[i];
	}
}
	console.log("Maximum Number is:"+max);
}