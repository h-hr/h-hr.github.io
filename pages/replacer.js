
function replace_with(to_letters,element){

letters=[...new Set(document.querySelector('html').innerHTML.split(''))].join('');
if(typeof to_letters=='undefined'){return letters.length}else{

for (let index = 0; index < to_letters.length; index++) {
element=element.replaceAll(letters[index],to_letters[index])
}




return element

}

}
$0.innerHTML=replace_with('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',$0.innerHTML)
