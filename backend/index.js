import routes from './src/routes/routes'

const express = require('express')
const cors = require('cors')

const app = express()


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use("/api", routes)

const port = 9001
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
