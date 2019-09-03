
import request from 'supertest'

import app from './express'

describe('express', () => {
  it('should have an healthcheck route', async () => {
    await request(app).get('/healthcheck')
      .expect(200)
  })
})
