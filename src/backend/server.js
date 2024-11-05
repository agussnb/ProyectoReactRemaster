import express from 'express'
import serveStaticFiles from './utils.js'
import authRoutes from './routes/auth.js'
import cors from 'cors';

const app = express()

app.use(cors());

serveStaticFiles(app)

const PORT = 3030

app.listen(PORT, ()=>{
    console.log('Server running on port ' +PORT);
})

app.use(express.json());

app.use('/api/auth', authRoutes);