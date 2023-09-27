class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample', // change this if you make an actual extension!
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    char=[];
listint=[];
for (var count = 0; count < 28; count++) {
char.push(String.fromCharCode(1575, 1576, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1610)[count])};
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



function getword(num){
clearr();
	
	char=[];
listint=[];
for (var count = 0; count < 28; count++) {
char.push(String.fromCharCode(1575, 1576, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1610)[count])};
for (var count = 0; count < 11; count++) {listint.push('')};
	
listint[0]=num;

for (var count = 0; count < listint.length; count++) {check(count)};


for (var count2 = 0; count2 < listint.length; count2++){
if(listint[count2]==0){listint[count2]=''}else{listint[count2]=char[listint[count2]-1]};


};
worde=listint.join('');
return worde;

};

function getnumber(word){
clearr();
for (var count = 0; count < listint.length; count++){
listint[count]=char.indexOf(word[count])+1};
worde=word;
myvar=-1;
for (var count = 0; count < word.length; count++){myvar++;
listint[count]=(listint[count])*(28**(count));


};




myvar=-1;
num=0;
for (var count = 0; count < listint.length; count++){
myvar++;
num=num+listint[myvar];   
};

return num;
};

    
	// Note strict equality: Inputs must match exactly: in type, case, etc.args.ONE === args.TWO;
    return getword(args.ONE)
	
	
	
	
	
	
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
