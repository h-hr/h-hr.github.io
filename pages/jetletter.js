var chare='ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
 var char=[];
var listint=[];
for (var count = 0; count < BigInt(chare.length); count++) {
char.push(chare[count])};
function refill(long){
for (var count = 0; count < long; count++) {listint.push('')};
}


function decode(key,value){
char=key.split('');
return getword(value);
}


function getletters(data){

let chars = data.split("");

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

char=uniqueChars;
return 'decode('+"'"+char.join('')+"'"+','+"'"+getnumber(data)+"'"+')';

}


function check(repeat){

const lint=BigInt(listint[repeat]);
const lint2=listint[repeat];

if(lint>BigInt(char.length)){

if(lint%BigInt(char.length)==0)
{listint[repeat+1]=BigInt(lint/BigInt(char.length))-1n}
else{listint[repeat+1]=BigInt(lint/BigInt(char.length))};

if(lint%BigInt(char.length)==0)
{listint[repeat]=BigInt(char.length)}
else{listint[repeat]=lint%BigInt(char.length)};

};

};









function clearr(){
for (var count = 0; count < listint.length; count++){
listint[count]=''
}
};



function getword(num2){
clearr();
if(String(num2).length.length>listint.length){refill(String(num2).length)}
listint[0]=BigInt(num2);

for (var count = 0; count < listint.length; count++) {check(count)};


for (var count2 = 0; count2 < listint.length; count2++){
if(listint[count2]==0){listint[count2]=''}else{listint[count2]=char[listint[count2]-1n]};


};
var worde=listint.join('');
return worde;

};

function getnumber(word){
clearr();
if(word.length>listint.length){refill(word.length)}



for (var count = 0; count < listint.length; count++){
listint[count]=BigInt(char.indexOf(word[count])+1)};
var worde=word;
myvar=-1;
for (var count = 0; count < word.length; count++){myvar++;
listint[count]=BigInt(listint[count])*(BigInt(char.length)**BigInt(count));


};




myvar=-1;
num=0n;
for (var count = 0; count < listint.length; count++){
myvar++;
num=num+listint[myvar];   
};

return num;
};
