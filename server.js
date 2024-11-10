const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

const corsOptions = {
    credentials: true,
    origin: ['https://cadex-kappa.vercel.app', 'http://localhost:5173']
};

app.use(cors(corsOptions));

app.post('/submit', (req, res) => {
	const { name } = req.body
	console.log('Received data:', req.body)
	res.send(`Thank you for your interest, ${name}`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server is running on :${port}`)
})
