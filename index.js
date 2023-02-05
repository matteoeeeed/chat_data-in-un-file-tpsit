//index.js
const {readFile,writeFile} = require('fs')
const chat_data=require('./miochat')
//scrivo il file 

readFile('./miofile/test.txt','utf8',(error,result)=>{
if(error){
cosole.log(error)
return 
}  
console.log(result)
})

let s="";
s=chat_data=fullDataString()

writeFile('./miofile/test.txt',s,(error,result)=>{
if(error){
cosole.log(error)
return 
}  
console.log(result)
})

//miochat

let chat_data={
 ip:"127.0.0.1",
  nome:"marco",
nickname:"astroPippa",
message:"...",
color:"black",
font:"Arial",
fontsize:"10px",  
fullDataString: function () {
  let out="";
  out=this.ip+ " "+
    this.name+ " "+
    this.nickname+ " "+
    this.message+ " "+
    this.font+ " "+
    this.fontsize+ " "+
    this.color+ " ";
   
  return out;
   
}
}

module.exports=chat_data;
