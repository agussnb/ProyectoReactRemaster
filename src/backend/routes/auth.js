import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import {jwtSecret, jwtExpiresIn} from '../config/config.js'

const router = express.Router()
const users = []

router.post('/register',async(req,res)=>{
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    users.push({username, password: hashedPassword});
    res.sendStatus(201)
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username: user.username }, jwtSecret, { expiresIn: jwtExpiresIn });
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  });

  const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (token) {
      jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };

  export default router