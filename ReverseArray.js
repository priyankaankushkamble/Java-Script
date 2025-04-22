<html>
<head>
<title>ReverseArray</title>
<script type="text/javascript">
	<body>
	let a=prompt("Enter Number");
	let no=parseInt(a);
	let rem;
	let rev=0;
	while(no!=0)
	{
		rem=no%10;
		no=no/10;
		rev=rev*10+rem;
	}
	console.log("Reverse No is "+reverse);
	
	</body>
</script>
</head>
</html>