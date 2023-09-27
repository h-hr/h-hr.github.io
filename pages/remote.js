load_state=0
bound=[]
function loadJS(file,code) {
const jsScript = document.createElement('script')
jsScript.src =file

document.body.appendChild(jsScript)

jsScript.addEventListener('load', () => {
  eval(code)
  
  
  if(load_state==bound.length){
alert(dos('ذهب')+getword(10,'abc'))
  }

  
})
}
bound.push("https://hussainalhabeb1000.github.io/pages/cipher.js")
bound.push("https://hussainalhabeb1000.github.io/pages/does3.js")

for (let index = 0; index < bound.length; index++) {
    loadJS(bound[index],'load_state++')
}
