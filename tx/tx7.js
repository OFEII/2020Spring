//有3个-10--10之间的整数，写一个方法这三个数一共有多少可能想加等于10，如（8，2，0）算一个
function add3s(){
	var sum=0;
	var count=0;
	for(var i=-11;i<=10;i++){
		for(var j=-11;j<=10;j++){
			for(var k=-11;k<=10;k++){
				sum=i+j+k;
				if(sum==10){
					count+=1;

				
				}



			}
		}
	}
	console.log(count);
}

add3s(); 