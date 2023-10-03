//function get_elements(){



elem=get_elements_old();

for (let index = 0; index < elem.length; index++) {

const el=a(p(s(elem[index],'span'),2),'[role=radiogroup]');
if(el.length!=0){
el2=el[0].previousElementSibling.childNodes;
for (let inde = 0; inde < el2.length-1; inde++) {
    el2[inde+1].id='runall'
}
for (let ind = 0; ind < el.length; ind++) {
s(s(el[ind],'span'),'div').id='runall'
}
}else{ 

const eln=a(elem[index],'[role=group]');

if(eln.length!=0){    

eln2=eln[0].previousElementSibling.childNodes;

for (let inde = 0; inde < eln2.length-1; inde++) {
    eln2[inde+1].id='runall'
}

for (let ind = 0; ind < el.length; ind++) {
s(s(el[ind],'span'),'div').id='runall'
}

}else{

s(elem[index],'span').id='runall'

}
}
}

a(document,'#runall').forEach(function(element) {
  element.addEventListener('click', function() {
    E_E=this;
    run_all();
  });
});



//}