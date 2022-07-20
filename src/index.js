import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import  indexRouters  from './routes/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(indexRouters)
app.use(express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || 3000)
console.log('app on port', process.env.PORT || 3000)
