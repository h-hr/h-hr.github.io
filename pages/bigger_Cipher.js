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

var dddd = 'hello hi how are you?';

// Example usage:
var uniqueChars = [...new Set(dddd)].join('');
var numberResult = getnumber(dddd, uniqueChars);
console.log('Number Result:', numberResult);

var textResult = getword(numberResult, uniqueChars);
console.log('Text Result:', textResult);
