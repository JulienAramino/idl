module.exports = {
  content: [
    [ 'articles', {
      page: '_content',
      isPost: false
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://aramino.com'
      : 'http://localhost:3000'
  }
}
