
var f = require('fs')
/*f.open('d://mydemo.txt','w',(err,data)=>{
     if(err) throw err
     console.log('file created successfully')
})
f.writeFile('d://mydemo.txt','welcome in node',(err)=>{
    if(err) throw err 
})*/
f.appendFile('d://mydemo.txt',' sadsadsa asdsadsad',(err)=>{
    if(err) throw err 
})
f.readFile('d://mydemo.txt',(err,data)=>{
    if(err) throw err 
    console.log(data.toString())
})
/*f.unlink('d://mydemo.txt',function(err){
  if(err) throw err  
})*/
f.rename('d://mydemo.txt',"d://mydemonew.txt",(err)=>{
   if(err)  throw err
})