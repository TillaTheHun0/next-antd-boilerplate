
import express from 'express'

const router = express.Router()

router.all('/', (_req, res) => res.json({ data: 'sweet api' }))

export default router
