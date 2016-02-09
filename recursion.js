function recursion(number){
	if(number == 1)
		return number;
	else
		return recursion(number-1)*number;
}
print(recursion(5));