
//class 1
function Checking(amount){
	this.balance = amount;
	this.deposit = deposit;
	this.withdraw = withdraw;
	this.toString = toString;
	this.shujie = shujie;
}

function deposit(amount){
	this.balance +=amount;
}

function withdraw(amount){
	if(amount<=this.balance)
		this.balance -= amount;
	else
		print("Insufficient funds");
}

function toString(){
	return "Balance:" + this.balance;
}

function shujie(){
	this.shujie = "Shujie";
	print(this.shujie);
}

//class 2
function newCheck(number){
	this.number = number;
	this.yunye = yunye;
	this.newYunye = newYunye;
}

function yunye(){
	var t = "Yunye";
	return t;
}

function newYunye(){
	this.shuyunye = "hello";
	print(this.shuyunye);
}


var account = new Checking(500);
account.deposit(100);
print(account.toString());
account.shujie();

var newAccount = new newCheck(100);
print(newAccount.number);
print(newAccount.yunye());
