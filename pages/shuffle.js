function shuffle(txt,times){

if(String(times.length/2).includes('.')){times=parseInt(String(times).slice(0,-1))}
st=String(times)

txt=txt.split('')

for (let index = 1; index < (times.length/2)+1;index=index+2) {

s1=txt[st[index-1]]
s2=txt[st[index]]

txt[st[index]]=s1
txt[st[index-1]]=s2

}

return txt.join('')
}
