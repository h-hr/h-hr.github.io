char=[];
listint=[];
for (var count = 0; count < 28; count++) {
char.push('ابتثجحخدذرزسشصضطظعغفقكلمنهوي'[count])};
for (var count = 0; count < 11; count++) {listint.push('')};

function check(repeat){if (listint[repeat]>28){

if(listint[repeat]%28==0){lett=28;}else if(listint[repeat]%28==28){lett=(parseInt(listint[repeat]/28)-1)}else {lett=parseInt(listint[repeat]/28)}listint[repeat+1]=lett;


 if(listint[repeat]%28==0){lett2=28}else {lett2=listint[repeat]%28}
listint[repeat]=lett2;

}}









function clearr(){
for (var count = 0; count < listint.length; count++)
listint[count]='';
}



function write_num(num){
clearr();
listint[1]=num;
    repeater=0;
for (var count = 0; count < 11; count++){
repeater++;
check(repeater);
}

myvar=-1;
for (var count = 0; count < listint.length; count++){
myvar++;
listint[myvar]=char[listint[myvar]];
}

}


function write_word(word){
clearr();
for (var count = 0; count < listint.length; count++){
listint[count]=char.indexOf(word[count])+1}
worde=word;
myvar=-1;
for (var count = 0; count < word.length; count++){myvar++;

if (myvar=0){lett=listint[myvar];
}else{lett=(listint[myvar])*(28**(myvar));
}

listint[myvar]=lett;
}

myvar=-1;
num=0;
for (var count = 0; count < listint.length; count++){
myvar++;
num=num+listint[myvar];   
}

}

function getcode(code) {eval(code)}
    
