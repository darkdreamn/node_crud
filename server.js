import APP from './src/app.js'

const PORT = 3000

APP.listen(PORT, () => {
    console.log(`servidor rodando no endereço http://localhost:${PORT}`)
})