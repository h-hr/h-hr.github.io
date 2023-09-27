

function getnumber(word,letters){

 var char=letters.split('');

listint=Array(word.length).fill('');

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


function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}


tafila=[]
for (let index = 0; index < 21435887n; index++) {
    wo=getword(index,'فعلتيكهانوم')
 co=count(wo)
 
 cwl=[]
for (let index = 0; index < wo.length; index++) {
    if(wo[index]=='ف'||wo[index]=='ع'||wo[index]=='ل'){cwl.push(wo[index])}
}

if(wo.includes('ف')&&wo.includes('ع')&&wo.includes('ل')&&co['ف']==1&&co['ع']==1&&co['ل']==1&&cwl.join('')=='فعل'){tafila.push(wo)}
}
