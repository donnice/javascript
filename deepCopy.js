//indexOf, splice, join, concat,push(end),unshift(start),pop(end),shift(start)

var nums = [];
for(var i = 0; i<100; i++)
	nums[i] = i+1;
var samenums = nums;//shallow
nums[0] = 400;
print(samenums[0]);

function copy(arr1, arr2){
	for(var i = 0; i<arr1.length; i++)
		arr2[i] = arr1[i];
}
samenums = [];//renew is necessary!
copy(nums,samenums);//deep
nums[0] = 1;
print(nums[0]);
print(samenums[0]);
//print(samenums);

var names = ["Don","Chen","Raymond","Clayton","USC"];
print(names.indexOf("Don"));
var namestr = names.join();
//print(namestr);
namestr = names.toString();
//print(namestr);

var cisDept = ["Mike","Clayton","Terrill","Danny","Jennifer"];
var cheDept = ["Raymond","Cynthia","Bryan"];
var umich = cisDept.concat(cheDept);
//print(umich);
var itDpt = umich.splice(3,1);
print(itDpt);

umich.push("Shujie CHEN");
print(umich);
umich.unshift("Don CHEN");
print(umich);

umich.pop();
umich.shift();
print(umich);

//add in the middle;
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
print(nums);