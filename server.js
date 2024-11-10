const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors());
app.options('*', cors());

app.post('/submit', (req, res) => {
	const { name } = req.body
	console.log('Received data:', req.body)
	res.send(`Thank you for your interest, ${name}`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server is running on :${port}`)
})
