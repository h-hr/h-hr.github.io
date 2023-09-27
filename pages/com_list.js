function compine_list(lis1,lis2,sign){


lis3=[]

for (let index = 0; index < lis1.length; index++) {
    
if(sign==1){
lis3.push(String(BigInt(lis1[index])+BigInt(lis2[index])))
}else if(sign==0){
lis3.push(String(BigInt(lis1[index])-BigInt(lis2[index])))
}

}


return lis3


}
