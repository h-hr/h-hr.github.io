function grn(rn){return Math.floor(Math.random()*rn)}
ds=`${grn(100)}${'+-*/'[grn(4)]}${grn(100)}`;alert(`${prompt(ds)==eval(ds)}\n${eval(ds)}`)
