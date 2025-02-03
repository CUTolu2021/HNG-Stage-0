const express = require('express')
const cors = require('cors')

const app = express()
let PORT = 3000

app.use(cors())

app.get('/', (req, res) => {
    const response = {
        email: "omoniyitolulope05@gmail.com", // Replace with your registered email
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/CUTolu2021/HNG-Stage-0" // Replace with your GitHub repo URL
    };
    res.status(200).send(response);
})

app.listen(PORT, () => {
    console.log(`HNG Stage one app listening on port ${PORT}`)
})