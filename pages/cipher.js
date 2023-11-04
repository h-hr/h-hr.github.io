
function new_base(input, index, z) {
    function factorial(n) {
        return n <= 1n ? 1n : n * factorial(n - 1n);
    }

    function new_base_retrieve_index(input, value) {
        const inputLength = BigInt(input.length);
        const maxIndex = factorial(inputLength);

        let index = 0n;
        let remainingChars = input.split('');

        for (let i = inputLength - 1n; i >= 0n; i--) {
            const char = value[inputLength - 1n - i];
            const charIndex = remainingChars.indexOf(char);

            if (charIndex === -1) {
                throw new Error('Invalid value');
            }

            index += BigInt(charIndex) * factorial(i);
            remainingChars.splice(charIndex, 1);
        }

        index += 1n; // Adjust index to start from 1 externally

        if (index > maxIndex) {
            throw new Error('Value out of range');
        }

        return index;
    }

    const inputLength = BigInt(input.length);
    const maxIndex = factorial(inputLength);

    if (index === 'i') {
        return new_base_retrieve_index(input, z);
    } else if (index === 'l') {
        return maxIndex;
    } else {
        if (isNaN(index)) {
            throw new Error('Invalid index');
        }

        index = BigInt(index);

        if (index < 1n || index > maxIndex) {
            throw new Error('Index out of range');
        }

        index -= 1n; // Adjust index to start from 0 internally

        let remainingChars = input.split('');
        let combination = '';

        for (let i = inputLength - 1n; i > 0n; i--) {
            const charIndex = Number(index / factorial(i));
            combination += remainingChars[charIndex];
            remainingChars.splice(charIndex, 1);
            index %= factorial(i);
        }

        combination += remainingChars[0];
        return combination;
    }
}
function getnumber(text, letters) {
  var char = letters.split('');
  var baseValue = BigInt(char.length);
  var num = BigInt(0);

  for (var i = 0; i < text.length; i++) {
    var charIndex = char.indexOf(text[i]);
    if (charIndex !== -1) {
      num = num * baseValue + BigInt(charIndex + 1);
    }
  }

  return num;
}

function getword(num, letters) {num=BigInt(num);
  var char = letters.split('');
  var baseValue = BigInt(char.length);

  var result = '';
  while (num > 0n) {
    var remainder = (num - 1n) % baseValue;
    var charIndex = Number(remainder);
    result = char[charIndex] + result;
    num = (num - 1n) / baseValue;
  }

  return result;
}

cipher={};



cipher.decode=function decode(text_data,Numkey){Numkey=Numkey||2020;
text_data=JSON.parse(text_data);
try {
    key=new_base(text_data[1],String(Numkey))
} catch (error) {
    key=new_base(text_data[1],String(new_base(text_data[1],'l')))
}
return getword(text_data[0],key)};

cipher.encode=function encode(text_data,Numkey){Numkey=Numkey||2020;
text_data=text_data||"hello world";

text_set=[... new Set(text_data.split(''))].join('');

dd=new_base(text_set,'l');
//new_base(1,'i',1)
d=text_set;
try {
    key=new_base(d,Numkey)
} catch (error) {
    key=new_base(d,String(dd))

}

return JSON.stringify([String(getnumber(text_data,key)),text_set])
};


//ds=cipher.encode('hello world',1200);

//cipher.decode(ds,'1000');

