


//String(getnumber(num_to_formula(10),'01'))
//formula_to_num(getword(20n,'01'))



function formula_to_num(formula){
	formula=String(formula)
	nq=0n;
	for (let index = 0n; index < formula.length; index++) {
    if(formula[index]=='1'){nq=nq*2n+1n}else if(formula[index]=='0'){nq=nq*2n}
}

return String(nq)

}







function num_to_formula(the_num){

list_formula=[]

the_num=BigInt(the_num)

while (!(the_num==0)) {


	if(the_num!=(the_num/2n)*2n){

the_num=(the_num-1n)/2n
list_formula.push(0)
}else{

the_num=the_num/2n
list_formula.push(1)

	}


}
list_formula.reverse()
list_formula=list_formula.join('').replaceAll(0,2).replaceAll(1,0).replaceAll(2,1)
//return getnumber(list_formula,'01')
return list_formula

}





function getnumber(word,letters){

var chare=letters;
 var char=[];
var listint=[];
for (var count = 0; count < BigInt(chare.length); count++) {
char.push(chare[count])};
function refill(long){
for (var count = 0; count < long; count++) {listint.push('')};
}


for (var count = 0; count < listint.length; count++){
listint[count]=''
}
if(word.length>listint.length){refill(word.length)}



for (var count = 0; count < listint.length; count++){
listint[count]=BigInt(char.indexOf(word[count])+1)};
var worde=word;
myvar=-1;
for (var count = 0; count < word.length; count++){myvar++;
listint[count]=BigInt(listint[count])*(BigInt(char.length)**BigInt(count));


};




myvar=-1;
num=BigInt(0);
for (var count = 0; count < listint.length; count++){
myvar++;
num=num+listint[myvar];   
};

return num;
};

function getword(num2,letterss){
var chare=letterss;
 var char=[];
var listint=[];for (var count = 0; count < BigInt(chare.length); count++) {
char.push(chare[count])};
function refill(long){
for (var count = 0; count < long; count++) {listint.push('')};
}
function check(repeat){
const lint=BigInt(listint[repeat]);
const lint2=listint[repeat];
if(lint>BigInt(char.length)){
if(lint%BigInt(char.length)==0)
{
  listint[repeat+1]=BigInt(lint/BigInt(char.length))-BigInt(1)
  }
else{listint[repeat+1]=BigInt(lint/BigInt(char.length))};

if(lint%BigInt(char.length)==0)
{listint[repeat]=BigInt(char.length)}
else{listint[repeat]=lint%BigInt(char.length)};
};
}
for (var count = 0; count < listint.length; count++){
listint[count]=''
};
if(String(num2).length.length>listint.length){refill(String(num2).length)}
listint[0]=BigInt(num2);

for (var count = 0; count < listint.length; count++) {check(count)};


for (var count2 = 0; count2 < listint.length; count2++){
if(listint[count2]==0){listint[count2]=''}else{listint[count2]=char[listint[count2]-BigInt(1)]};
};
var worde=listint.join('');
return worde;
};