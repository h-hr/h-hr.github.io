function get_x_y(num) {
num=BigInt(num);
x=0n;
y=0n;
while (num!=1n) {
    
if((num/2n)*2n==num){
old=num;
num=num/2n;
y=y+(old-num);
}else if((((num-1n)/2n)*2n)+1n==num){
old=num;
num=(num-1n)/2n;
x=x+(old-num);

}

}

return[x,y]
}
