

function shaped_button() {

const dc=document.querySelector('[select=true]'); 

if(dc.tagName=='BUTTON'&&dc.querySelector('text')!=null){ 


dc.querySelector('text').style.fontSize=dc.style.fontSize; dc.style.height=dc.querySelector('text').getBoundingClientRect().height+'px'; dc.style.width=dc.querySelector('text').getBoundingClientRect().width+'px'; 


dc.querySelector('text').setAttribute('y',((dc.querySelector('text').getBoundingClientRect().height
/2)/100)*127);


};
}

function morph(elem,un){
if(un==0){
elem.parentElement.previousElementSibling.style.display=''
elem.parentElement.outerHTML='<div></div>'
}else{
elem.parentElement.parentElement.style.display='none';
elem.parentElement.parentElement.nextElementSibling.outerHTML=document.getElementsByClassName(elem.id)[0].outerHTML.replace('>','><button onclick="morph(this,0)">🔙</button>');

elem.parentElement.parentElement.nextElementSibling.removeAttribute('style');


elem.parentElement.parentElement.nextElementSibling.removeAttribute('id')}

}


function out_button(elm){
tope=elm.style.top
lefte=elm.style.left
fontSizeo=elm.style.fontSize
selecte=elm.getAttribute('select')
onclicke=elm.getAttribute('onclick')
elementse=elm.getAttribute('elements')
elm.style.top=''
elm.style.left=''
elm.style.fontSize=''
elm.removeAttribute('id')
elm.removeAttribute('select')
elm.removeAttribute('onclick')
elm.removeAttribute('elements')
elm.outerHTML='<button id="mydivb">'+elm.outerHTML+'</button>'
elm=document.getElementById('mydivb')
elm.style.top=tope
elm.style.left=lefte
elm.style.fontSize=fontSizeo
elm.setAttribute('select',selecte)
elm.setAttribute('onclick',onclicke)
elm.setAttribute('elements',elementse)
elm.id='mydiv'
}
function nout_button(elm){
elm.childNodes[0].style.top=elm.style.top
elm.childNodes[0].style.left=elm.style.left
elm.childNodes[0].style.fontSize=elm.style.fontSize
elm.childNodes[0].id='mydiv'
elm.childNodes[0].setAttribute('select',elm.getAttribute('select'))
elm.childNodes[0].setAttribute('onclick',elm.getAttribute('onclick'))
elm.childNodes[0].setAttribute('elements',elm.getAttribute('elements'))
elm.outerHTML=elm.childNodes[0].outerHTML
}



function  copy_element(elem){
elements=JSON.parse(elem.getAttribute('elements'))
if(elem.getAttribute('elements')==null){elem.setAttribute('elements',JSON.stringify(elem.outerHTML.split()))}else{
elem.removeAttribute('elements')
elements.unshift(elem.outerHTML)
elem.setAttribute('elements',JSON.stringify(elements))
}
}


function next(elem){

if(elem.getAttribute('elements')!=null){
elements=JSON.parse(elem.getAttribute('elements'))
elem.removeAttribute('elements')
elements.push(elem.outerHTML)
elem.outerHTML=elements[0].replace('id="mydiv"','id="mydive"')
elements.shift()
document.getElementById('mydive').setAttribute('elements',JSON.stringify(elements))
document.getElementById('mydive').id='mydiv'
}

}



function previous(elem){

if(elem.getAttribute('elements')!=null){
elements=JSON.parse(elem.getAttribute('elements'))
elem.removeAttribute('elements')
elements.unshift(elem.outerHTML)
elem.outerHTML=elements[elements.length-1].replace('id="mydiv"','id="mydive"')
elements.splice(-1)
document.getElementById('mydive').setAttribute('elements',JSON.stringify(elements))
document.getElementById('mydive').id='mydiv'
}

}

function delete_element(elem){

if(elem.getAttribute('elements')!=null){
elements=JSON.parse(elem.getAttribute('elements'))
elem.outerHTML=elements[0].replace('id="mydiv"','id="mydive"')
elements.shift()
document.getElementById('mydive').setAttribute('elements',JSON.stringify(elements))
document.getElementById('mydive').id='mydiv'
}

}



function copy_all(){const elm=document.getElementsByClassName('elements')[0].querySelectorAll('#mydiv')
el=elm.length
for (let index = 0; index < el; index++) {
copy_element(elm[index])
}
nbn(1,0)
}

function next_all(){
elme=document.getElementsByClassName('page')[0].querySelectorAll('button')[2]
elml=elme.innerHTML.split('/')

const elm=document.getElementsByClassName('elements')[0].querySelectorAll('#mydiv')
el=elm.length
for (let index = 0; index < el; index++) {
next(elm[index])
}
if(elml[0]==elml[1]&&el!=0){
elml[1]='1'
elme.innerHTML=elml.join('/')
}
else{
nbn(1)
}
}

function previous_all(){
elme=document.getElementsByClassName('page')[0].querySelectorAll('button')[2]
elml=elme.innerHTML.split('/')

const elm=document.getElementsByClassName('elements')[0].querySelectorAll('#mydiv')
el=elm.length
for (let index = 0; index < el; index++) {
previous(elm[index])
}
if(elml[1]=='1'&&el!=0){
elml[1]=elml[0]
elme.innerHTML=elml.join('/')
}
else{
nbn(-1)}



}

function delete_page(){
if(elme.innerHTML!='1/1'){
const elme=document.getElementsByClassName('page')[0].querySelectorAll('button')[2]
elml=elme.innerHTML.split('/')

const elm=document.getElementsByClassName('elements')[0].querySelectorAll('[elements]')
el=elm.length
for (let index = 0; index < el; index++) {
delete_element(elm[index])
}
if(el!=0){

if(elml[1]!='1'&&elml[0]==elml[1]){elml[1]=parseInt(elml[1])-1}

elml[0]=parseInt(elml[0])-1

elme.innerHTML=elml.join('/')
}
const dle=document.querySelectorAll('[elements="[]"]')
dll=dle.length
for (let index = 0; index < dll; index++) {
dle[index].removeAttribute('elements')
}
}
}


function nbn(num,n){
if(n!=0){n=1}
const elm=document.getElementsByClassName('page')[0].querySelectorAll('button')[2]

elml=elm.innerHTML=elm.innerHTML.split('/')

elml[n]=parseInt(elml[n])+num

elm.innerHTML=elml.join('/')

}




function upload_html(value,key,html){
url='https://script.google.com/macros/s/AKfycby-wFGgsn6Jm6TrmiILWPKDkfWFEik_wrroh5XYnF7otvBD-7FJ3Pyr7ukTdoaEkh2Upw/exec'
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
var raw = html;
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch(url+"?key="+key+"&value="+value, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function c_html(value,key,nkey,f){
url='https://script.google.com/macros/s/AKfycby-wFGgsn6Jm6TrmiILWPKDkfWFEik_wrroh5XYnF7otvBD-7FJ3Pyr7ukTdoaEkh2Upw/exec'
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

if(typeof nkey=='undefined'){f=0}

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(url+"?key="+key+"&value="+value+"&nkey="+nkey+"&f="+f, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));}
  
//function delete_html(value,key){c_html(value,key,'',0)}
//function update_password(value,key,nkey){c_html(value,key,nkey,1)}
//function update_path(value,key,nkey){c_html(value,key,nkey,2)}
//function creat_edit_html(value,key,html){upload_html(value,key,html)}
  
  //upload_html(prompt('path'),prompt('password'),document.querySelector('html').outerHTML)
  //c_html(prompt('path'),prompt('password'))
  //update_password       c_html(prompt('path'),prompt('password'),prompt('new password'),1)
  //update_path       c_html(prompt('path'),prompt('password'),prompt('new path'),2)

function hide_show(){
for (let index = 0; index < 5; index++) {
    if(index!=2){const d=document.getElementsByClassName('ui-')[0];const de=d.querySelectorAll('button')[index].style;if(de.display!=''){de.display='';if(index==4){run_action_reversed(d,'m34.3125;→;m24;↓');}}else{de.display='none';if(index==4){run_action(d,'m34.3125;→;m24;↓');}}}
}
}

function duplicateElement(elm){
const clonedElement = elm.cloneNode(true);
elm.setAttribute('select','false')
elm.parentElement.appendChild(clonedElement);
}

function mergeColors(o,r){let t=convertColorNameToHex(o),e=convertColorNameToHex(r);if(!t||!e)throw Error("Invalid input color(s)");let n=hexToRgb(t),l=hexToRgb(e),d=Math.round((n.r+l.r)/2),i=Math.round((n.g+l.g)/2),a=Math.round((n.b+l.b)/2),u=rgbToHex(d,i,a);if(!u)throw Error("Error converting RGB to hex");return u}function hexToRgb(o){let r=o.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);if(!r)throw Error(`Invalid hex color string: ${o}`);let t=parseInt(r[1],16),e=parseInt(r[2],16),n=parseInt(r[3],16);return{r:t,g:e,b:n}}function rgbToHex(o,r,t){if(isNaN(o)||isNaN(r)||isNaN(t))throw Error("Invalid RGB value(s)");let e=o=>Math.min(255,Math.max(0,o)),n=e(Math.round(o)).toString(16).padStart(2,"0"),l=e(Math.round(r)).toString(16).padStart(2,"0"),d=e(Math.round(t)).toString(16).padStart(2,"0");return`#${n}${l}${d}`}function convertColorNameToHex(o){let r=document.createElement("div");r.style.color=o;let t=window.getComputedStyle(document.body.appendChild(r)).color;document.body.removeChild(r);let e=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return e?rgbToHex(e[1],e[2],e[3]):null}

function changeFont(element, font_family_index) {
	const font_families = ['Alexandria','Alfa Slab One','Alkalami','Almarai','Almendra Display','Amiri','Amiri Quran','Aref Ruqaa','Aref Ruqaa Ink','Asap Condensed','Baloo Bhaijaan 2','Blaka','Blaka Hollow','Blaka Ink','Cairo','Cairo Play','Changa','El Messiri','Fahkwang','Fira Sans Extra Condensed','Gulzar','Harmattan','Heebo','Hind Siliguri','IBM Plex Sans Arabic','Jomhuria','Katibeh','Kufam','Lalezar','Lateef','Lemonada','Mada','Marhey','Markazi Text','Mirza','Noto Kufi Arabic','Noto Naskh Arabic','Noto Nastaliq Urdu','Noto Sans Arabic','Qahiri','Rakkas','Readex Pro','Reem Kufi','Reem Kufi Fun','Reem Kufi Ink','Scheherazade New','Tajawal','Vazirmatn','Vibes','unknown0','unknown1','unknown2','unknown3','unknown4','unknown5','unknown6','unknown7','unknown8','unknown9','unknown10','unknown11','unknown12','unknown13','unknown14','unknown15','unknown16','unknown17','unknown18','unknown19','unknown20','unknown21','unknown22','unknown23','unknown24','unknown25','unknown26','unknown27','unknown28','unknown29','unknown30','unknown31','unknown32','unknown33','unknown34'];
if(typeof element=='undefined'){return font_families}
else if(typeof font_family_index=='undefined'){
return font_families[element-1]
}else{
element.style.fontFamily = font_families[font_family_index-1]
}
}

function run_link(code,ext){
ext=['move','turn','fsize'][ext]
link=document.querySelector('[select=true]').getAttribute('link')
if(link==null){
eval(code+"(document.querySelectorAll('[select=true]')[0],localStorage."+ext+")")
}else{
const elem=document.querySelectorAll('[link="'+link+'"]')
bound=elem.length
for (let index = 0; index < bound; index++) {
    eval(code+"(document.querySelectorAll('[id=mydiv]')["+g_index(elem[index])+"],localStorage."+ext+")")}}}

function add_link(){
if(document.querySelector(`[select='true']`).getAttribute('link')==null){
bound=1
for (let index = 0; index < bound; index++) {
if(document.querySelector('[link="'+index+'"]')==null){
document.querySelector(`[select='true']`).setAttribute('link',index)
}else{bound=bound+1}}}}

function remove_link(){
ds=document.querySelector(`[select='true']`).getAttribute('link');
if(ds!=null){

const sd=document.querySelectorAll('[link="'+ds+'"]');
bound=sd.length
for (let index = 0; index < bound; index++) {
	sd[index].removeAttribute('link')}}}


function gen_options(length_,plus,st){
st1='<option value="'
st2=''
st3='">'
st4='select'
st5='</option>'

if(typeof st!='undefined'){st2=st}

list=[]

colors=['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGrey','DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','DarkOrange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkSlateGrey','DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DimGrey','DodgerBlue','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Grey','Green','GreenYellow','HoneyDew','HotPink','IndianRed ','Indigo  ','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGray','LightGrey','LightGreen','LightPink','LightSalmon','LightSeaGreen','LightSkyBlue','LightSlateGray','LightSlateGrey','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta','Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise','MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','RebeccaPurple','Red','RosyBrown','RoyalBlue','SaddleBrown','Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','SlateGrey','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle','Tomato','Turquoise','Violet','Wheat','White','WhiteSmoke','Yellow','YellowGreen','transparent']
	font=changeFont()

if(typeof length_=='undefined'){length_=colors.length+1}
index_=-1
for (let index = 0; index < length_; index++) {
    if(typeof plus=='undefined'&&index_!=-1){
st3='" style="background-color:'+colors[index_]+'">'
st2=colors[index_]
st4=colors[index_]
}else if(plus=='f'){
st2=font[index_]
st3='"style="font-family:'
st4=font[index_]
st5='">أبجدabc</option>'
if(String(st2)=='undefined'){st2=''}
}
list.push((st1+st2+st3+st4+st5))
if(typeof plus!='undefined'){
st2=parseInt(st2+0)+plus
st4=st2
}
index_=index_+1	
}

if(plus=='f'){list[0]=list[0].replace('undefined','')}
return list.join('')
}

function change_shadow(ce){

const elm=document.querySelector(`[select='true']`)
if(elm.style.textShadow!=''){

pli=elm.style.textShadow.split('px')
e1=pli[0].split(' ').slice(0,-1).join('')
e2=pli[0].split(' ').slice(-1)[0]
e3=pli[1].slice(1)

if(typeof ce!='undefined'){
eval(ce)
elm.style.textShadow=e1+' '+e2+'px '+e3+'px'
}else{return [e1,e2,e3]}

}else{
if(typeof ce!='undefined'){
elm.style.textShadow='transparent 0px 0px';change_shadow(ce)
}else{return ['','','']}
}
}


function plist() {if(document.getElementsByClassName('ui0')[0]!=undefined){
  const si = document.getElementsByClassName('ui0')[0].querySelector('div').querySelectorAll('input');
  const se = document.querySelector('[select="true"]');
  px = ".split('px').join('')";
  sl = ['top'+ px,'left'+px,'fontSize'+ px,'fontFamily','transform.slice(7, -4)','color','backgroundColor','backgroundImage.slice(5, -2)','zIndex','shadow1','shadow2','shadow3','opacity*100','tsc','action'];

  for (let index = 0; index < si.length; index++) {
    if (sl[index] === 'action') {
      si[index].value = se.getAttribute(sl[index]);
    }else if (sl[index] === 'tsc') {
      si[index].value = document.querySelector(`[select='true']`).style.getPropertyValue('--tsc')
    }else if (sl[index] === 'shadow1') {
      si[index].value = change_shadow()[0];
    }else if (sl[index] === 'shadow2') {
      si[index].value = change_shadow()[1];
    }else if (sl[index] === 'shadow3') {
      si[index].value = change_shadow()[2];
    } else {
      eval('si[index].value=se.style.' + sl[index]);
 }
 }
 }
 }
  


function show_hide(s_h,time){
if(s_h=='s'){s_h='+'}else if(s_h=='h'){s_h='-'}
//time=300
for (let index = 0; index < 10; index++) {
    
const eo=document.querySelector('a').parentElement.style

//eo.opacity=(parseFloat(eo.opacity)-0.1)
var x = eval('(eoo)=>'+'eoo.opacity=(parseFloat(eoo.opacity)'+s_h+'0.1)');
//x(eo)
setTimeout(x, time*(index+1),eo); 
}
}

function run_action_reversed(element,action){
run_action(element,reversed_action(action))
}

function reversed_action(action){return reverse_action(replace_action(action))}

function reverse_action(action){
	if(action.slice(-1)==';'){str=action.slice(0,-1).split(';')}else{str=action.split(';')}
	
json={}
for (let index = 0; index < str.length; index++) {
  const si=str[index][0] 
if(si=='m'||si=='t'||si=='f'||si=='i'){

var x = eval('(stre,indexe)=>json.'+si+'=stre[indexe].slice(1)');
x(str,index)

str[index]=''
}else{if(si!='l'){str[index]=JSON.stringify(json)
+str[index]}}
}
function filter(array){var filtered = array.filter(function (el) {
  return el !=''
});return filtered}

str=filter(str).reverse()
json={}
json_old=[]
bound=str.length
str2=[]
for (let index = 0; index < bound; index++) {
    if(str[index][0]!='l'){
	json=JSON.parse(str[index].split('}')[0]+'}')
	
	if(json.m!=json_old.m){str2.push('m'+json.m)}
	if(json.t!=json_old.t){str2.push('t'+json.t)}
	if(json.f!=json_old.f){str2.push('f'+json.f)}
	if(json.i!=json_old.i){str2.push('i'+json.i)}
	
	str2.push(str[index].split('}')[1])
	
	json_old=json
	}else{str2.push(str[index])}
}
return str2.join(';')
}

function replace_action(str){
var mapObj = {
   "↑":"↓",
   "↗":"↙",
   "→":"←",
   "↘":"↖",
  "↓":"↑",
   "↙":"↗",
   "←":"→",
   "↖":"↘",
   "↺":"↻",
   "↻":"↺",
   "-":"+",
   "+":"-"
};
str = str.replace(/↑|↗|→|↘|↓|↙|←|↖|↺|↻|-|\+/gi, function(matched){
  return mapObj[matched];
});return str}

function run_action_all(action){
const bound=document.getElementsByClassName('elements')[0].querySelectorAll('#mydiv');for (let index = 0; index < bound.length; index++) {
    run_action(bound[index],action)
}
}

function circle_timing(the_ele){
const telem=document.getElementsByClassName('elements')[0].querySelectorAll('#mydiv')[g_index(the_ele.parentElement.parentElement)];;setTimeout(function(){
    telem.style.zIndex=1
},100)
}

function button_class(cname){
	const dqq=document.querySelectorAll('[select=true]')[0]
	if(dqq.querySelector('img')!=null){const dqc=dqq.querySelector('img');then_(dqc)}
	else if(dqq.querySelector('video')!=null){const dqc=dqq.querySelector('video');then_(dqc)}
	else if(dqq.tagName=='BUTTON'){then_(dqq)}

function then_(dqs){
if(dqs.tagName=='BUTTON'){
cl_=dqs.className.split(' ');
if(dqs.className.split(' ')[0].includes('tx')){cl_[1]=cname;document.querySelectorAll('[select=true]')[0].setAttribute('class',cl_.join(' '))}
else if(dqs.className.split(' ')[1].includes('tx')){cl_[0]=cname;document.querySelectorAll('[select=true]')[0].setAttribute('class',cl_.join(' '))}
}
	else if(cname=='sh48'||cname=='sh49'){
dqs.setAttribute('class',cname)
dqs.style.height=''
dqs.style.width=''
	}else{
document.querySelectorAll('[select=true]')[0].querySelector('div').setAttribute('class',cname)
}
}

}


window.onload=function onload(event) {
setstorage()
//document.body.style.overflowX='hidden';document.body.style.overflowY='hidden';
}

function test_turn(){

//((getComputedStyle($0).width.slice(0,-2)/4)*3)
	

//((getComputedStyle($0).width.slice(0,-2)/(360/45)))

//parseFloat($0.style.transform.slice(7,-4))


function get_move(el,tu){

mo=((getComputedStyle(el).width.slice(0,-2)/(360/tu)))

//mo='m'+mo+';t'+tu+';f0;i0;'

ct=parseFloat(el.style.transform.slice(7,-4))

if(ct<90){
tright(el,90);left(el,mo);left(el,mo);left(el,mo);
//run_action(el,mo+'↻←←←');
ct=362
}else 
if(ct<180){
tright(el,90);up(el,mo);up(el,mo);up(el,mo);
//run_action(el,mo+'↻↑↑↑');
ct=362
}else 
if(ct<270){
tright(el,90);right(el,mo);right(el,mo);right(el,mo);
//run_action(el,mo+'↻→→→');
ct=362
}else 
if(ct<360){
tright(el,90);down(el,mo);down(el,mo);down(el,mo);
//run_action(el,mo+'↻↓↓↓');
ct=362
}
}

get_move(document.querySelectorAll('[select=true]')[0],90)

}





function nps(np){
slen=48
sl=parseInt(document.getElementsByClassName('shape')[0].className.slice(8))
if(np=='n'){
if(sl==slen){sl=1}else{sl=sl+1}
}else 
if(np=='p'){
if(sl==1){sl=slen}else{sl=sl-1}
}
document.getElementsByClassName('shape')[0].className='shape sh'+sl
}


function add_img(i2){
i1='<div id="mydiv" style="top: 248px; left: 260px; font-size: 28px;" onclick="action(this)"><div style="font-size:3em"><img src="'
i3='" style="height: 1em; width: auto;"></div></div>'
batch(i1+i2+i3)
}
function add_vid(i2){
i1='<div id="mydiv" style="top: 248px; left: 260px; font-size: 28px;" onclick="action(this)"><div style="font-size:3em"><video src="'
i3='" style="height: 1em; width: auto;" loop="" autoplay="" muted=""></div></div>'
batch(i1+i2+i3)
}
function add_text(i2){
i1='<div id="mydiv" style="top: 266px; left: 198px; font-size: 28px;" onclick="action(this)">'
i3='</div>'
batch(i1+i2+i3)
}
function batch(elem){
document.getElementsByClassName('elements')[0].children[document.getElementsByClassName('elements')[0].children.length-1].outerHTML=elem+document.getElementsByClassName('elements')[0].children[document.getElementsByClassName('elements')[0].children.length-1].outerHTML
make_all_draggable()
}

function play_video(num){
    document.querySelectorAll('video')[num].play()
}

function layer_up(elmeme){
index=g_index(elmeme)
if(index!=document.querySelectorAll('#mydiv').length){
document.querySelectorAll('#mydiv')[index+1].outerHTML=document.querySelectorAll('#mydiv')[index+1].outerHTML+document.querySelectorAll('#mydiv')[index].outerHTML
document.querySelectorAll('#mydiv')[index].outerHTML=''
}
if(localStorage.draggable=='true'){make_all_draggable()}
}
function layer_down(elmeme){
	
index=g_index(elmeme)
if(index!=0){
document.querySelectorAll('#mydiv')[index-1].outerHTML=document.querySelectorAll('#mydiv')[index].outerHTML+document.querySelectorAll('#mydiv')[index-1].outerHTML
document.querySelectorAll('#mydiv')[index+1].outerHTML=''
}
if(localStorage.draggable=='true'){make_all_draggable()}
}
function g_index(ele){
if(ele=='0'){
const sele=document.querySelectorAll('[select=true]')[0]
return g_then(sele)
}else{
const sele=ele
return g_then(sele)
}
function g_then(selee){
var child = selee
var parent = selee.parentNode;
var index = Array.prototype.indexOf.call(parent.children, child);
return index}
}


function run_action(elment,action){
	
function do_run(el,elmen){
if(el=='↑'){setTimeout(up,itime+i,elmen,m)
}else if(el=='↗'){setTimeout(uright,itime+i,elmen,m)
}else if(el=='↖'){setTimeout(uleft,itime+i,elmen,m)
}else if(el=='↓'){setTimeout(down,itime+i,elmen,m)
}else if(el=='↘'){setTimeout(dright,itime+i,elmen,m)
}else if(el=='↙'){setTimeout(dleft,itime+i,elmen,m)
}else if(el=='→'){setTimeout(right,itime+i,elmen,m)
}else if(el=='←'){setTimeout(left,itime+i,elmen,m)
}else if(el=='↺'){setTimeout(tleft,itime+i,elmen,t)
}else if(el=='↻'){setTimeout(tright,itime+i,elmen,t)
}else if(el=='+'){setTimeout(psize,itime+i,elmen,f)
}else if(el=='-'){setTimeout(nsize,itime+i,elmen,f)
}

itime=itime+i
}
	
//↑↗→↘↓↙←↖ ↺↻-+

action_list=action.split(';')

itime=0
i=0
for (let index = 0; index < action_list.length; index++) {
    const ele=action_list[index]
if(ele[0]=='m'){
	m=parseFloat(ele.slice(1))
}else if(ele[0]=='t'){
	t=parseFloat(ele.slice(1))
}else if(ele[0]=='f'){
	f=parseFloat(ele.slice(1))
}else if(ele[0]=='i'){
	i=parseFloat(ele.slice(1))
}else if(ele[0]=='l'){
	eval(decodeURIComponent(ele.slice(1)))
}else if(ele.includes('r')){
	dele=ele.split('r')[1].repeat(eval(ele.split('r')[0]))
	for (let inde = 0; inde < dele.length; inde++) {do_run(dele[inde],elment)}
	itime=itime-i
}else{
	for (let inde = 0; inde < ele.length; inde++) {do_run(ele[inde],elment)}
	itime=itime-i
}

itime=itime+i
}

}



function up(element,move){
const elementt=element;
elementt.style.top=parseFloat(elementt.style.top)-parseFloat(move);
}
function down(element,move){
const elementt=element;
elementt.style.top=parseFloat(elementt.style.top)+parseFloat(move);
}
function right(element,move){
const elementt=element;
elementt.style.left=parseFloat(elementt.style.left)+parseFloat(move);
}
function left(element,move){
const elementt=element;
elementt.style.left=parseFloat(elementt.style.left)-parseFloat(move);
}
function uright(element,move){
up(element,move);
right(element,move);
}
function uleft(element,move){
up(element,move);
left(element,move);
}
function dright(element,move){
down(element,move);
right(element,move);
}
function dleft(element,move){
down(element,move);
left(element,move);
}
function tright(element,turn){
const elementt=element;
turn=parseFloat(turn);
if(elementt.style.transform==''){
elementt.style.transform='rotate(0deg)'};
angle=parseFloat(elementt.style.transform.slice(7,-4));
elementt.style.transform='rotate('+((angle+turn)%360)+'deg)' ;
}
function tleft(element,turn){
const elementt=element;
turn=parseFloat(turn);
if(elementt.style.transform==''){
elementt.style.transform='rotate(0deg)'};
angle=parseFloat(elementt.style.transform.slice(7,-4));
elementt.style.transform='rotate('+((angle-turn)%360)+'deg)' ;
}
function psize(element,fsize){
const elementt=element;
fsize=parseFloat(fsize);
if(elementt.style.fontSize==''){
elementt.style.fontSize=16};
size=elementt.style.fontSize;
if(size.includes('%')){
size=(parseFloat(size)/6.25);
sfsize=((size+fsize)*6.25)+'%';
}else
{size=parseFloat(size);
sfsize=(size+fsize);
}
elementt.style.fontSize=(sfsize);
}
function nsize(element,fsize){
const elementt=element;
fsize=parseFloat(fsize);
if(elementt.style.fontSize==''){
elementt.style.fontSize=16};
size=elementt.style.fontSize;
if(size.includes('%')){
size=(parseFloat(size)/6.25);
sfsize=((size+fsize)*6.25)+'%';
}else
{size=parseFloat(size);
sfsize=(size-fsize);
}
elementt.style.fontSize=(sfsize);
}
function react(){
	if (localStorage.record=='true'){
	const ls=localStorage
if(parseFloat(ls.move)!=parseFloat(ls.oldmove)){
act('m'+parseFloat(ls.move))
ls.oldmove=parseFloat(ls.move)
}
if(parseFloat(ls.turn)!=parseFloat(ls.oldturn)){
act('t'+parseFloat(ls.turn))
ls.oldturn=parseFloat(ls.turn)
}
if(parseFloat(ls.fsize)!=parseFloat(ls.oldfsize)){
act('f'+parseFloat(ls.fsize))
ls.oldfsize=parseFloat(ls.fsize)
}
if(parseFloat(ls.timeout)!=parseFloat(ls.oldtimeout)){
act('i'+parseFloat(ls.timeout))
ls.oldtimeout=parseFloat(ls.timeout)
}	
}
}
function act(actt){
     if (localStorage.record=='true'){
          
if(actt[0]=='m'||actt[0]=='t'||actt[0]=='f'||actt[0]=='i'||localStorage.join=='false'){actt=actt+';'}
          
//element,act
      
const elementt=document.querySelectorAll('[select=true]')[0]
if(elementt.getAttribute('action')==null){elementt.setAttribute('action','')}
elementt.setAttribute('action',elementt.getAttribute('action')+actt)
}
}

function action(element){

ac=localStorage.action

if(ac=='edit'){
smalltalk .prompt('', '', '') .then((value) => { element.innerText=value }) .catch(() => { console.log('cancel'); });
}else if(ac=='delete'){
element.remove()
}else if(ac=='fsize'){
smalltalk .prompt('', '', '') .then((value) => { element.style.fontSize=value }) .catch(() => { console.log('cancel'); });
}else if(ac=='link'){
add_link();
element.setAttribute('link',document.querySelector(`[select='true']`).getAttribute('link'));
}else if(ac=='elem'){

if(typeof document.querySelectorAll('[select=true]')[0]!='undefined'){
document.querySelectorAll('[select=true]')[0].setAttribute('select','false')
}
element.setAttribute('select','true')

}
plist()
}

function setstorage(){
if(typeof localStorage.move=='undefined'){localStorage.move=100}
document.getElementsByClassName('move')[0].innerText=localStorage.move;

if(typeof localStorage.turn=='undefined'){localStorage.turn=90}
document.getElementsByClassName('turn')[0].innerText=localStorage.turn;
      
if(typeof localStorage.fsize=='undefined'){localStorage.fsize=4.0}
	
document.getElementsByClassName('size')[0].innerText=localStorage.fsize;
if(typeof localStorage.timeout=='undefined'){localStorage.timeout=100}
document.getElementsByClassName('timeout')[0].innerText='⏲️'+localStorage.timeout;
	
localStorage.action='elem'
localStorage.oldmove=''
localStorage.oldturn=''
localStorage.oldfsize=''
localStorage.oldtimeout=''
localStorage.record='false'
localStorage.join='false'
document.getElementsByClassName('record')[0].innerText='⏺︎'
localStorage.draggable='false'
document.querySelectorAll('style')[0].remove()

}

      //Make the DIV element draggagle
      function make_all_draggable() {
        li = document.querySelectorAll('#mydiv').length;
        for (let index = 0; index < li; index++) {
          document.querySelectorAll('#mydiv')[index].id = "mydiv2";
          dragElement(document.getElementById("mydiv2"));
          document.querySelectorAll('#mydiv2')[0].id = "mydiv"
        }
      }
        function make_all_undraggable() {
        li = document.querySelectorAll('#mydiv').length;
        for (let index = 0; index < li; index++) {
          document.querySelectorAll('#mydiv')[index].onmousedown =''
        }
      }


      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }

var smalltalk;(()=>{"use strict";var n={370:(n,e,t)=>{const o=t(802),a=o(((n,e,t)=>n.setAttribute(t,e[t]))),r=o(((n,e,t)=>n[t]=e[t])),i=o(((n,e)=>!n(e))),s=n=>n!=n.toLowerCase();function l(n){var e;if(n)return e=n,document.querySelector(`[data-name="${e}"]`)}n.exports=(n,e={})=>{const{dataName:t,notAppend:o,parent:c=document.body,uniq:p=!0,...d}=e,A=l(t);if(p&&A)return A;const u=document.createElement(n);return t&&(u.dataset.name=t),Object.keys(d).filter(s).map(r(u,e)),Object.keys(d).filter(i(s)).map(a(u,e)),o||c.appendChild(u),u},n.exports.isElementPresent=l},147:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(537),a=t.n(o),r=t(645),i=t.n(r),s=t(667),l=t.n(s),c=new URL(t(374),t.b),p=new URL(t(362),t.b),d=i()(a()),A=l()(c),u=l()(p);d.push([n.id,".smalltalk{display:flex;align-items:center;flex-direction:column;justify-content:center;transition:.2s opacity;bottom:0;left:0;overflow:auto;padding:20px;position:fixed;right:0;top:0;z-index:100}.smalltalk+.smalltalk{transition:ease 1s}.smalltalk .page{border-radius:3px;background:#fff;box-shadow:0 4px 23px 5px rgb(0 0 0 / 20%),0 2px 6px rgb(0 0 0 / 15%);color:#333;min-width:400px;padding:0;position:relative;z-index:0}@media only screen and (max-width:500px){.smalltalk .page{min-width:0}}.smalltalk .page>.close-button{background-image:url("+A+");background-position:center;background-repeat:no-repeat;height:14px;position:absolute;right:7px;top:7px;width:14px;z-index:1}.smalltalk .page>.close-button:hover{background-image:url("+u+")}.smalltalk .progress{display:block;width:100%}.smalltalk .page header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:500px;user-select:none;color:#333;font-size:120%;font-weight:700;margin:0;padding:14px 17px;text-shadow:#fff 0 1px 2px}.smalltalk .page .content-area{overflow:hidden;text-overflow:ellipsis;padding:6px 17px;position:relative}.smalltalk .page .action-area{padding:14px 17px}button{font-family:Ubuntu,Arial,sans-serif}.smalltalk .smalltalk,.smalltalk button{min-height:2em;min-width:4em}.smalltalk button{appearance:none;user-select:none;background-image:linear-gradient(#ededed,#ededed 38%,#dedede);border:1px solid rgb(0 0 0 / 25%);border-radius:2px;box-shadow:0 1px 0 rgb(0 0 0 / 8%),inset 0 1px 2px rgb(255 255 255 / 75%);color:#444;font:inherit;margin:0 1px 0 0;text-shadow:0 1px 0 rgb(240 240 240)}.smalltalk button::-moz-focus-inner{border:0}.smalltalk button:enabled:active{background-image:linear-gradient(#e7e7e7,#e7e7e7 38%,#d7d7d7);box-shadow:none;text-shadow:none}.smalltalk .page .button-strip{display:flex;flex-direction:row;justify-content:flex-end}.smalltalk .page .button-strip>button{margin-left:10px}.smalltalk input{width:100%;border:1px solid #bfbfbf;border-radius:2px;box-sizing:border-box;color:#444;font:inherit;margin:0;min-height:2em;padding:3px;outline:0}.smalltalk button:enabled:focus,.smalltalk input:enabled:focus{transition:border-color .2s;border-color:rgb(77 144 254);outline:0}","",{version:3,sources:["webpack://./css/smalltalk.css"],names:[],mappings:"AAAA,WACI,YAAS,CAET,kBAAa,CACb,qBAAgB,CAChB,sBAAiB,CAEjB,sBAAkB,CAElB,QAAQ,CACR,MAAM,CACN,aAAU,CACV,YAAS,CACT,cAAU,CACV,OAAO,CACP,KAAK,CAEL,WAAS,CAGb,sBACI,kBAAiB,CAGrB,iBACI,iBAAe,CACf,eAAY,CACZ,qEAAuD,CACvD,UAAO,CACP,eAAW,CACX,SAAS,CACT,iBAAU,CACV,SAAS,CAGb,yCACI,iBACI,WAAW,CAAA,CAInB,+BACI,wDAAkB,CAClB,0BAAqB,CACrB,2BAAmB,CACnB,WAAQ,CACR,iBAAU,CACV,SAAO,CACP,OAAK,CACL,UAAO,CACP,SAAS,CAGb,qCACI,wDAAkB,CAGtB,qBACI,aAAS,CACT,UAAO,CAGX,wBACI,eAAU,CACV,sBAAe,CACf,kBAAa,CACb,eAAW,CAEX,gBAAa,CACb,UAAO,CACP,cAAW,CACX,eAAa,CACb,QAAQ,CACR,iBAAc,CACd,0BAAyB,CAG7B,+BACI,eAAU,CACV,sBAAe,CAEf,gBAAa,CACb,iBAAU,CAGd,8BACI,iBAAc,CAGlB,OACI,mCAAgC,CAGjB,wCACf,cAAY,CACZ,aAAW,CAGf,kBACI,eAAY,CACZ,gBAAa,CACb,6DAAkB,CAElB,iCAAkB,CAClB,iBAAe,CACf,yEAAqD,CACrD,UAAO,CACP,YAAM,CACN,gBAAgB,CAChB,oCAAqB,CAGzB,oCACI,QAAQ,CAGZ,iCACI,6DAAkB,CAClB,eAAY,CACZ,gBAAa,CAGjB,+BACI,YAAS,CAET,kBAAgB,CAChB,wBAAiB,CAGrB,sCACI,gBAAa,CAGjB,iBACI,UAAO,CACP,wBAAkB,CAClB,iBAAe,CACf,qBAAY,CACZ,UAAO,CACP,YAAM,CACN,QAAQ,CACR,cAAY,CACZ,WAAS,CACT,SAAS,CAGb,+DACI,2BAAyB,CACzB,4BAAc,CACd,SAAS",sourcesContent:[".smalltalk {\n    display: flex;\n    \n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    \n    transition: 200ms opacity;\n    \n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    padding: 20px;\n    position: fixed;\n    right: 0;\n    top: 0;\n    \n    z-index: 100;\n}\n\n.smalltalk + .smalltalk {\n    transition: ease 1s;\n}\n\n.smalltalk .page {\n    border-radius: 3px;\n    background: white;\n    box-shadow: 0 4px 23px 5px rgb(0 0 0 / 20%), 0 2px 6px rgb(0 0 0 / 15%);\n    color: #333;\n    min-width: 400px;\n    padding: 0;\n    position: relative;\n    z-index: 0;\n}\n\n@media only screen and (max-width: 500px) {\n    .smalltalk .page {\n        min-width: 0;\n    }\n}\n\n.smalltalk .page > .close-button {\n    background-image: url(../img/IDR_CLOSE_DIALOG.png);\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 14px;\n    position: absolute;\n    right: 7px;\n    top: 7px;\n    width: 14px;\n    z-index: 1;\n}\n\n.smalltalk .page > .close-button:hover {\n    background-image: url(../img/IDR_CLOSE_DIALOG_H.png);\n}\n\n.smalltalk .progress {\n    display: block;\n    width: 100%;\n}\n\n.smalltalk .page header {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 500px;\n    \n    user-select: none;\n    color: #333;\n    font-size: 120%;\n    font-weight: bold;\n    margin: 0;\n    padding: 14px 17px;\n    text-shadow: white 0 1px 2px;\n}\n\n.smalltalk .page .content-area {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    \n    padding: 6px 17px;\n    position: relative;\n}\n\n.smalltalk .page .action-area {\n    padding: 14px 17px;\n}\n\nbutton {\n    font-family: 'Ubuntu', 'Arial', sans-serif;\n}\n\n.smalltalk button, .smalltalk .smalltalk {\n    min-height: 2em;\n    min-width: 4em;\n}\n\n.smalltalk button {\n    appearance: none;\n    user-select: none;\n    background-image: linear-gradient(#ededed, #ededed 38%, #dedede);\n    \n    border: 1px solid rgb(0 0 0 / 25%);\n    border-radius: 2px;\n    box-shadow: 0 1px 0 rgb(0 0 0 / 8%), inset 0 1px 2px rgb(255 255 255 / 75%);\n    color: #444;\n    font: inherit;\n    margin: 0 1px 0 0;\n    text-shadow: 0 1px 0 rgb(240 240 240);\n}\n\n.smalltalk button::-moz-focus-inner {\n    border: 0;\n}\n\n.smalltalk button:enabled:active {\n    background-image: linear-gradient(#e7e7e7, #e7e7e7 38%, #d7d7d7);\n    box-shadow: none;\n    text-shadow: none;\n}\n\n.smalltalk .page .button-strip {\n    display: flex;\n    \n    flex-direction: row;\n    justify-content: flex-end;\n}\n\n.smalltalk .page .button-strip > button {\n    margin-left: 10px;\n}\n\n.smalltalk input {\n    width: 100%;\n    border: 1px solid #bfbfbf;\n    border-radius: 2px;\n    box-sizing: border-box;\n    color: #444;\n    font: inherit;\n    margin: 0;\n    min-height: 2em;\n    padding: 3px;\n    outline: none;\n}\n\n.smalltalk button:enabled:focus, .smalltalk input:enabled:focus {\n    transition: border-color 200ms;\n    border-color: rgb(77 144 254);\n    outline: none;\n}\n\n"],sourceRoot:""}]);const f=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);o&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}},802:n=>{const e=(n,...t)=>{if(function(n){if("function"!=typeof n)throw Error("fn should be function!")}(n),t.length>=n.length)return n(...t);const o=(...o)=>e(n,...t,...o),a=n.length-t.length-1,r=(n=>[function(e){return n(...arguments)},function(e,t){return n(...arguments)},function(e,t,o){return n(...arguments)},function(e,t,o,a){return n(...arguments)},function(e,t,o,a,r){return n(...arguments)}])(o)[a];return r||o};n.exports=e},43:n=>{n.exports=n=>{const e={value:n};return(...n)=>{const[t]=n;return n.length?(e.value=t,t):e.value}}},517:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var o=t(379),a=t.n(o),r=t(795),i=t.n(r),s=t(569),l=t.n(s),c=t(565),p=t.n(c),d=t(216),A=t.n(d),u=t(589),f=t.n(u),C=t(147),m={};m.styleTagTransform=f(),m.setAttributes=p(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=A();a()(C.Z,m);const g=C.Z&&C.Z.locals?C.Z.locals:void 0},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],p=r[c]||0,d="".concat(c," ").concat(p);r[c]=p+1;var A=t(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==A)e[A].references++,e[A].updater(u);else{var f=a(u,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var l=o(n,a),c=0;c<r.length;c++){var p=t(r[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},374:(n,e,t)=>{n.exports=t.p+"2b22a33a0a80bb926bbc.png"},362:(n,e,t)=>{n.exports=t.p+"8e9019bd86255ac9a618.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{var n=o;t(517);const e=t(802),a=t(43),r=t(370),i=e((function(n,e,t,o){const a={ENTER:13,ESC:27,TAB:9,LEFT:37,UP:38,RIGHT:39,DOWN:40},{keyCode:r}=o,i=o.target,s=g(n,["ok","cancel","input"]).map(u);switch(r){case a.ENTER:C(i,n,e,t),o.preventDefault();break;case a.ESC:b(n),t();break;case a.TAB:o.shiftKey&&f(n,s),f(n,s),o.preventDefault();break;default:["left","right","up","down"].filter((n=>r===a[n.toUpperCase()])).forEach((()=>{!function(n,e){const t=u(document.activeElement),o=/ok|cancel/.test(t),a=e.length-1;if("input"===t||!a||!o)return;const r=(n=>"cancel"===n?"ok":"cancel")(t);for(const e of g(n,[r]))e.focus()}(n,s)}))}o.stopPropagation()})),s={ok:"OK"},l={ok:"OK",cancel:"Cancel"},c=a(100);function p(n={}){const{buttons:e}=n;return e||null}function d(n,t,o,a){return`<div class="page">\n        <div data-name="js-close" class="close-button"></div>\n        <header>${n}</header>\n        <div class="content-area">${t.replace(/\n/g,"<br>")}${o}</div>\n        <div class="action-area">\n            <div class="button-strip">\n                ${function(n){const t=Object.keys(n),o=e(((n,e,t)=>`<button\n            tabindex=${t}\n            data-name="js-${e.toLowerCase()}">\n            ${n[e]}\n        </button>`));return t.map(o(n)).join("")}(a)}\n            </div>\n        </div>\n    </div>`}function A(n,e,t,o,s){const l=a(),p=a(),A=new Promise(((n,e)=>{const t=s&&"boolean"==typeof s.cancel&&!s.cancel;l(n),p(t?()=>{}:()=>e(Error()))})),u=d(n,e,t,o),f=r("div",{innerHTML:u,className:"smalltalk",style:`z-index: ${c(c()+1)}`});for(const n of g(f,["ok","input"]))n.focus();for(const n of g(f,["input"]))n.setSelectionRange(0,t.length);!function(n,e,t,o){for(const a of g(e,t))a.addEventListener(n,o)}("click",f,["cancel","close","ok"],(n=>{C(n.target,f,l(),p())}));for(const n of["click","contextmenu"])f.addEventListener(n,(n=>{n.stopPropagation();for(const n of g(f,["ok","input"]))n.focus()}));return f.addEventListener("keydown",i(f,l(),p())),Object.assign(A,{dialog:f,ok:l})}function u(n){return n.getAttribute("data-name").replace("js-","")}n.alert=(n,e,t)=>A(n,e,"",p(t)||s,t),n.prompt=(n,e,t="",o)=>{const a=function(n={}){const{type:e}=n;return"password"===e?"password":"text"}(o);return A(n,e,`<input type="${a}" value="${String(t).replace(/"/g,"&quot;")}" data-name="js-input">`,p(o)||l,o)},n.confirm=(n,e,t)=>A(n,e,"",p(t)||l,t),n.progress=(n,e,t)=>{const o=A(n,e,'\n        <progress value="0" data-name="js-progress" class="progress" max="100"></progress>\n        <span data-name="js-counter">0%</span>\n    ',{cancel:"Abort"},t),{ok:a,dialog:r}=o,i=a();for(const n of g(r,["cancel"]))n.focus();return Object.assign(o,{setProgress(n){const[e]=g(r,["progress"]),[t]=g(r,["counter"]);e.value=n,t.textContent=`${n}%`,100===n&&(b(r),i())},remove(){b(r)}}),o};function f(n,e){const t=u(document.activeElement),o=((n,e)=>e===n?0:e+1)(e.length-1,e.indexOf(t)),a=e[o];for(const e of g(n,[a]))e.focus()}function C(n,e,t,o){const a=n.getAttribute("data-name").replace("js-","");if(/close|cancel/.test(a))return o(),void b(e);let r=null;for(const n of g(e,["input"]))r=n.value;t(r),b(e)}const m=e(((n,e)=>n.querySelector(`[data-name="js-${e}"]`)));function g(n,e){return e.map(m(n)).filter(Boolean)}function b(n){const{parentElement:e}=n;e&&e.removeChild(n)}})(),smalltalk=o})();

!function(e){"use strict";var a={escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){e=t(e).toLowerCase();return function(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[e]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise(function(e){t.toBlob(e)}):function(i){return new Promise(function(e){for(var t=window.atob(i.toDataURL().split(",")[1]),n=t.length,r=new Uint8Array(n),o=0;o<n;o++)r[o]=t.charCodeAt(o);e(new Blob([r],{type:"image/png"}))})}(t)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(i){d.impl.options.cacheBust&&(i+=(/\?/.test(i)?"&":"?")+(new Date).getTime());return new Promise(function(n){var e,t,r=new XMLHttpRequest;function o(e){console.error(e),n("")}r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(e?n(e):o("cannot fetch resource: "+i+", status: "+r.status));var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(r.response)},r.ontimeout=function(){e?n(e):o("timeout of 30000ms occured while fetching resource: "+i)},r.responseType="blob",r.timeout=3e4,r.open("GET",i,!0),r.send(),!d.impl.options.imagePlaceholder||(t=d.impl.options.imagePlaceholder.split(/,/))&&t[1]&&(e=t[1])})},uid:function(){var e=0;return function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}}(),delay:function(n){return function(t){return new Promise(function(e){setTimeout(function(){e(t)},n)})}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(r){return new Promise(function(e,t){var n=new Image;n.onload=function(){e(n)},n.onerror=t,n.src=r})},width:function(e){var t=r(e,"border-left-width"),n=r(e,"border-right-width");return e.scrollWidth+t+n},height:function(e){var t=r(e,"border-top-width"),n=r(e,"border-bottom-width");return e.scrollHeight+t+n}};function t(e){e=/\.([^\.\/]*?)$/g.exec(e);return e?e[1]:""}function r(e,t){t=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(t.replace("px",""))}var o,i={inlineAll:function(t,r,o){return n(t)?Promise.resolve(t).then(u).then(function(e){var n=Promise.resolve(t);return e.forEach(function(t){n=n.then(function(e){return c(e,t,r,o)})}),n}):Promise.resolve(t)},shouldProcess:n,impl:{readUrls:u,inline:c}};function n(e){return-1!==e.search(o)}function u(e){for(var t,n=[];null!==(t=o.exec(e));)n.push(t[1]);return n.filter(function(e){return!a.isDataUrl(e)})}function c(n,r,t,e){return Promise.resolve(r).then(function(e){return t?a.resolveUrl(e,t):e}).then(e||a.getAndEncode).then(function(e){return a.dataAsUrl(e,a.mimeType(r))}).then(function(e){return n.replace((t=r,new RegExp("(url\\(['\"]?)("+a.escape(t)+")(['\"]?\\))","g")),"$1"+e+"$3");var t})}var l={resolveAll:function(){return s(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})},impl:{readAll:s}};function s(){return Promise.resolve(a.asArray(document.styleSheets)).then(function(e){var n=[];return e.forEach(function(t){try{a.asArray(t.cssRules||[]).forEach(n.push.bind(n))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),n}).then(function(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return i.shouldProcess(e.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return i.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}var f={inlineAll:function t(e){if(!(e instanceof Element))return Promise.resolve(e);return n(e).then(function(){return e instanceof HTMLImageElement?h(e).inline():Promise.all(a.asArray(e.childNodes).map(function(e){return t(e)}))});function n(t){var e=t.style.getPropertyValue("background");return e?i.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))}).then(function(){return t}):Promise.resolve(t)}},impl:{newImage:h}};function h(r){return{inline:function(e){return a.isDataUrl(r.src)?Promise.resolve():Promise.resolve(r.src).then(e||a.getAndEncode).then(function(e){return a.dataAsUrl(e,a.mimeType(r.src))}).then(function(n){return new Promise(function(e,t){r.onload=e,r.onerror=t,r.src=n})})}}}var m={imagePlaceholder:void 0,cacheBust:!(o=/url\(['"]?([^'"]+?)['"]?\)/g)},d={toSvg:g,toPng:function(e,t){return p(e,t||{}).then(function(e){return e.toDataURL()})},toJpeg:function(e,t){return p(e,t=t||{}).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})},toBlob:function(e,t){return p(e,t||{}).then(a.canvasToBlob)},toPixelData:function(t,e){return p(t,e||{}).then(function(e){return e.getContext("2d").getImageData(0,0,a.width(t),a.height(t)).data})},impl:{fontFaces:l,images:f,util:a,inliner:i,options:{}}};function g(r,o){var e;return void 0===(e=o=o||{}).imagePlaceholder?d.impl.options.imagePlaceholder=m.imagePlaceholder:d.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?d.impl.options.cacheBust=m.cacheBust:d.impl.options.cacheBust=e.cacheBust,Promise.resolve(r).then(function(e){return function o(t,n,e){if(!e&&n&&!n(t))return Promise.resolve();return Promise.resolve(t).then(r).then(function(e){return i(t,e,n)}).then(function(e){return u(t,e)});function r(e){return e instanceof HTMLCanvasElement?a.makeImage(e.toDataURL()):e.cloneNode(!1)}function i(e,t,n){var e=e.childNodes;return 0===e.length?Promise.resolve(t):r(t,a.asArray(e),n).then(function(){return t});function r(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return o(e,n)}).then(function(e){e&&t.appendChild(e)})}),r}}function u(i,u){return u instanceof Element?Promise.resolve().then(e).then(t).then(n).then(r).then(function(){return u}):u;function e(){function e(e,t){function n(t,n){a.asArray(t).forEach(function(e){n.setProperty(e,t.getPropertyValue(e),t.getPropertyPriority(e))})}e.cssText?t.cssText=e.cssText:n(e,t)}e(window.getComputedStyle(i),u.style)}function t(){function t(e){var t,n=window.getComputedStyle(i,e),r=n.getPropertyValue("content");function o(e,t,n){var t="."+e+":"+t,n=(n.cssText?r:o)(n);return document.createTextNode(t+"{"+n+"}");function r(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function o(t){return a.asArray(t).map(e).join("; ")+";";function e(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}}}""!==r&&"none"!==r&&(t=a.uid(),u.className=u.className+" "+t,(r=document.createElement("style")).appendChild(o(t,e,n)),u.appendChild(r))}[":before",":after"].forEach(function(e){t(e)})}function n(){i instanceof HTMLTextAreaElement&&(u.innerHTML=i.value),i instanceof HTMLInputElement&&u.setAttribute("value",i.value)}function r(){u instanceof SVGElement&&(u.setAttribute("xmlns","http://www.w3.org/2000/svg"),u instanceof SVGRectElement&&["width","height"].forEach(function(e){var t=u.getAttribute(e);t&&u.style.setProperty(e,t)}))}}}(e,o.filter,!0)}).then(v).then(y).then(function(t){o.bgcolor&&(t.style.backgroundColor=o.bgcolor);o.width&&(t.style.width=o.width+"px");o.height&&(t.style.height=o.height+"px");o.style&&Object.keys(o.style).forEach(function(e){t.style[e]=o.style[e]});return t}).then(function(e){return e=e,t=o.width||a.width(r),n=o.height||a.height(r),Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(a.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+n+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e});var t,n})}function p(n,r){return g(n,r).then(a.makeImage).then(a.delay(100)).then(function(e){var t=function(e){var t=document.createElement("canvas");t.width=r.width||a.width(e),t.height=r.height||a.height(e),r.bgcolor&&((e=t.getContext("2d")).fillStyle=r.bgcolor,e.fillRect(0,0,t.width,t.height));return t}(n);return t.getContext("2d").drawImage(e,0,0),t})}function v(n){return l.resolveAll().then(function(e){var t=document.createElement("style");return n.appendChild(t),t.appendChild(document.createTextNode(e)),n})}function y(e){return f.inlineAll(e).then(function(){return e})}"undefined"!=typeof module?module.exports=d:e.domtoimage=d}(this);
