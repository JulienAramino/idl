module.exports = {
  content: [
    [ 'pages', {
      page: '/content/_content',
      permalink: '/:slug',
      isPost: false
    }],
    [ 'test', {
      page: '/content/_content',
      permalink: '/:slug',
      isPost: false
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://aramino.com'
      : 'http://localhost:3000'
  }
}
