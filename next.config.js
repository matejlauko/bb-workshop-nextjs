module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/list': { page: '/list' },
      '/article/1': { page: '/article', query: { id: 1 } },
    };
  },
};
