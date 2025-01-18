const express = require('express');
const app = express();
const port = 7000;

app.get('/user', (req,res)=> {
    user: [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Jane Doe'},
        {id: 3, name: 'Alice Johnson'}
    ]
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})