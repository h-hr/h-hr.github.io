

function update_cell(id,range,value){
fetch('https://script.google.com/macros/s/AKfycbw3PiDMlw5jNwFy9g5_SWKxDZ72iD28x4aa5P4hb56h9B0jgGjyNUOHIBbLvVoh8voR7g/exec?'+'id='+id+'&range='+range+'&value='+value, { mode: 'no-cors'})
}



function get_range(range){


keys=[];

keys.push('AIzaSyBexfyuvjQmYr0FJ8fp8ewZiwnPxd1anMk');
keys.push('AIzaSyBiTCOON4nBshU4hpLCyxHeOMoWYDZhPRk');
keys.push('AIzaSyDg3IEpiE_ZqgzsH_GTpABzcI1lXsyY7oc');
keys.push('AIzaSyCjlE2pYeULb_PXUNG4KGHiwmze_mDEN-c');
keys.push('AIzaSyA_RPERShFBltHPnSubdugTWUVI4ujY-WI');
keys.push('AIzaSyCeheZwZox_Ji7o5v7yPi2x-T3qR-nTDiE');
keys.push('AIzaSyDhEEYKoXeIGyqGHFqR_D3OCX1mGz6YkgU');
keys.push('AIzaSyC4m2Tr6kQRYkUEXodCe8I-EZr-gcVVeoQ');
keys.push('AIzaSyDvyMCqPiHA-lnQeNcuVo3-1WIMRqoMOi0');
keys.push('AIzaSyBNHqDJ2K88tVT4Coa-36MKz1ikXe_6P5s');
keys.push('AIzaSyDE2IxTmCMFDDglR_aL1TDLu_oUfjIU5Bw');
keys.push('AIzaSyCAiT4vf3uRYKMdCIY0WjooZJ0iraPLHSY');
keys.push('AIzaSyCTziALRXtHSash0iIkgv8wkYiNgjEcmbg');
keys.push('AIzaSyBZXcTkUgd-fjNTJvKarl6rXFEneukBEPA');
keys.push('AIzaSyB3DSjoWeLzAB0X20a30lt-c7ukNNDHmAQ');
keys.push('AIzaSyB-saMGbj5Nok1h6fR7h4OikOxggB0U4pk');
keys.push('AIzaSyCndZEo3hh5NuLoGsfkrDZ3KiHak_m40lw');




id5='https://sheets.googleapis.com/v4/spreadsheets/18SyF4V4eZm15b4BuTDe7RTy-6q3V7GiQoIBY1EYCbbo/values/Sheet1!'+range+'?key='+keys[Math.floor(Math.random() *17)];


var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", id5, false );
    xmlHttp.send( null );
    result=xmlHttp.responseText;
	
 if(range.includes(':')){
 
 list=[];

    for (var count = 0; count < JSON.parse(result).values.length
; count++) {list.push(JSON.parse(result).values[count][0]);
};
 
 
 
 return list;} else{

if (typeof JSON.parse(result).values=='undefined'){return '' } else{return JSON.parse(result).values[0][0]}

}


}




function cloudvarible(name,valuee){
if (typeof list=='undefined'){list=[]}

if(!list.includes(name)){get_range(`A:A`)

if(!list.includes(name)){update_cell('18SyF4V4eZm15b4BuTDe7RTy-6q3V7GiQoIBY1EYCbbo','A'+(list.length+1),name);cloudvarible(name,valuee)}


}




if(typeof valuee!='undefined'){update_cell('18SyF4V4eZm15b4BuTDe7RTy-6q3V7GiQoIBY1EYCbbo','B'+(list.indexOf(name)+1),valuee)}
else{


keys=[];

keys.push('AIzaSyBexfyuvjQmYr0FJ8fp8ewZiwnPxd1anMk');
keys.push('AIzaSyBiTCOON4nBshU4hpLCyxHeOMoWYDZhPRk');
keys.push('AIzaSyDg3IEpiE_ZqgzsH_GTpABzcI1lXsyY7oc');
keys.push('AIzaSyCjlE2pYeULb_PXUNG4KGHiwmze_mDEN-c');
keys.push('AIzaSyA_RPERShFBltHPnSubdugTWUVI4ujY-WI');
keys.push('AIzaSyCeheZwZox_Ji7o5v7yPi2x-T3qR-nTDiE');
keys.push('AIzaSyDhEEYKoXeIGyqGHFqR_D3OCX1mGz6YkgU');
keys.push('AIzaSyC4m2Tr6kQRYkUEXodCe8I-EZr-gcVVeoQ');
keys.push('AIzaSyDvyMCqPiHA-lnQeNcuVo3-1WIMRqoMOi0');
keys.push('AIzaSyBNHqDJ2K88tVT4Coa-36MKz1ikXe_6P5s');
keys.push('AIzaSyDE2IxTmCMFDDglR_aL1TDLu_oUfjIU5Bw');
keys.push('AIzaSyCAiT4vf3uRYKMdCIY0WjooZJ0iraPLHSY');
keys.push('AIzaSyCTziALRXtHSash0iIkgv8wkYiNgjEcmbg');
keys.push('AIzaSyBZXcTkUgd-fjNTJvKarl6rXFEneukBEPA');
keys.push('AIzaSyB3DSjoWeLzAB0X20a30lt-c7ukNNDHmAQ');
keys.push('AIzaSyB-saMGbj5Nok1h6fR7h4OikOxggB0U4pk');
keys.push('AIzaSyCndZEo3hh5NuLoGsfkrDZ3KiHak_m40lw');




id5='https://sheets.googleapis.com/v4/spreadsheets/18SyF4V4eZm15b4BuTDe7RTy-6q3V7GiQoIBY1EYCbbo/values/Sheet1!'+'B'+(list.indexOf(name)+1)+'?key='+keys[Math.floor(Math.random() *17)];


var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", id5, false );
    xmlHttp.send( null );
    result=xmlHttp.responseText;

if (typeof JSON.parse(result).values=='undefined'){return '' } else{return JSON.parse(result).values[0][0]}


}


}


