module.exports = {
  content: [
    [ 'articles', {
      page: '/_content',
      isPost: false,
      permalink: '/articles/:slug',
      generate: [ // for static build
        'get', 'getAll'
      ],
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://aramino.com'
      : 'http://localhost:3000'
  }
}
