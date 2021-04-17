const fs = require('fs');
const http = require('http');


http.get('http://jsonplaceholder.typicode.com/posts', res => {
    let posts = "";
    res.setEncoding("utf-8");
    res.on("data", data =>{
        posts += data;
    });
    res.on("end", ()=>{
        fs.writeFile('./result/posts.json', 
            posts,
            (err)=>{
                err && console.log("something went wrong while writing to file");
            } 
        );
    });
});
