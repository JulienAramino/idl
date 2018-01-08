module.exports = {
  content: [
    ['pages', {
      permalink: ':slug',
      isPost: false,
      page: '/content/_content',
      generate: ['get', 'getAll']
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://aramino.com'
      : 'http://localhost:3000'
  }
}
