
if (!process.env.NODE_ENV) {
  throw new Error('You must define a NODE_ENV')
}

const env = process.env.NODE_ENV || 'development'

const allConfig: any = {
  development: {
    port: process.env.PORT || 8000
  },
  test: {
    port: process.env.PORT || 8000
  },
  qa: {
    port: process.env.PORT || 8000
  },
  production: {
    port: process.env.PORT || 8000
  }
}

export default {
  env,
  ...allConfig[env]
}
