//reverse,sort, sort with function, forEach(not return new), every(bool),some(bool),reduce, reduceRight,map

var nums = [1,2,4,5,3,100];
nums.reverse();
print(nums);
nums.sort();
print(nums);
function compare(num1,num2){
	return num1 - num2;
}
nums.sort(compare);
print(nums);
//iterator
function square(num){
	print(num,num*num);
}

newplay = nums.forEach(square);
print(newplay);

function isEven(num){
	return num%2 == 0;
}

var nums = [2,4,5,8,10];
print(nums.every(isEven));
print(nums.some(isEven));

function add(runningTotal, a){
	return runningTotal + a;
}
nums = [1,2,3,4,5,6,7,8,9,10,11,12];
var sum = nums.reduce(add);
print(sum);

nums = ["the ","quick ","brown ","bitch ", "run "];
var sum = nums.reduceRight(add);
print(sum);
nums = [1,2,3,4,5,6,7,8,9,10,11,12];

var words = nums.map(square);

function first(word){
	return word[0];
}

var words = ["for","your","information"];
var acronym = words.map(first);
print(acronym.join(""));
//print(words);