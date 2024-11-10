const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(
	cors({
		origin: 'https://cadex-kappa.vercel.app',
		methods: ['POST'],
		allowedHeaders: ['Content-Type'],
	})
)
app.options('/submit', cors());

app.post('/submit', (req, res) => {
	const { name } = req.body
	console.log('Received data:', req.body)
	res.send(`Thank you for your interest, ${name}`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server is running on :${port}`)
})
