
import config from './index'

describe('config', () => {
  it('should provide a configuration object', () => {
    expect(config).toBeDefined()
    expect(config).toHaveProperty('port')
    expect(config).toHaveProperty('env')
  })
})
