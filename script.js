function mincost(arr)
{ 

	let cost=0;
	if(arr.length==1)
	{
		return arr[0];
	}
	for(let i=1;i<arr.length;i++)
		{
			arr.sort();
			cost=cost+arr[0]+arr[1];
			arr.shift();
			arr.shift();
			arr.push(arr[0]+arr[1]);
		}
  return cost;
}

module.exports=mincost;
