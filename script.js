function mincost(arr)
{ 

	let cost=0;
	if(arr.length==1)
	{
		return arr[0];
	}
	let k=arr.length;
	for(let i=1;i<k;i++)
		{
			arr.sort((a,b)=> a-b);
			cost=cost+arr[0]+arr[1];
			arr.push(arr[0]+arr[1]);
			arr.shift();
			arr.shift();
		}
  return cost;
}

module.exports=mincost;
