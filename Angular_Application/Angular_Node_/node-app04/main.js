import { error } from 'console';
import fs from 'fs';

fs.writeFile("xyz.txt","Writing to a file in Asynchronous manner", err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file saved");
        fs.readFile("xyz.txt",(err, data) =>{
            if(err){
                console.log(err)
            }
            else{
                console.log("The file content: \n" + String(data));
            }
        });
    }
});