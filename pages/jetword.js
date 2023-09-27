var char=[];
var listint=[];
for (var count = 0; count < 28; count++) {
char.push('ابتثجحخدذرزسشصضطظعغفقكلمنهوي'[count])};
for (var count = 0; count < 11; count++) {listint.push('')};

function check(repeat){

if(listint[repeat]>28){

if(listint[repeat]%28==0){listint[repeat+1]=parseInt(listint[repeat]/28)-1}else{listint[repeat+1]=parseInt(listint[repeat]/28)};
if(listint[repeat]%28==0){listint[repeat]=28}else{listint[repeat]=listint[repeat]%28};

};

};









function clearr(){
for (var count = 0; count < listint.length; count++);
listint[count]='';
};



function getword(num2){
clearr();
listint[0]=num2;

for (var count = 0; count < listint.length; count++) {check(count)};


for (var count2 = 0; count2 < listint.length; count2++){
if(listint[count2]==0){listint[count2]=''}else{listint[count2]=char[listint[count2]-1]};


};
var worde=listint.join('');
return worde;

};

function getnumber(word){
clearr();
for (var count = 0; count < listint.length; count++){
listint[count]=char.indexOf(word[count])+1};
var worde=word;
var myvar=-1;
for (var count = 0; count < word.length; count++){myvar++;
listint[count]=(listint[count])*(28**(count));


};




var myvar=-1;
var num=0;
for (var count = 0; count < listint.length; count++){
myvar++;
num=num+listint[myvar];   
};

return num;
};

    
