function check(value_,length_){
const lint=value_;
if(lint%length_==0){
value_=length_
next_element=lint/length_-1
}
else{
value_=lint%length_
next_element=lint/length_
}
next_element=parseInt(next_element)
return value_
}