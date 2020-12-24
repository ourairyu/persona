function sendCorsRequest(url, opts, success, error) {
  var normalizedUrl = url.indexOf('http') === 0 ? url : ['https://api.ourai.ws', url].join('');

  return $.ajax(normalizedUrl, $.extend(true, {
    xhrFields: {
      withCredentials: true
    },
    success,
    error
  }, opts));
}

function ensureLoggedIn(handleLoggedIn, handleNotLoggedIn) {
  sendCorsRequest('/user', { type: 'get' }, handleLoggedIn, handleNotLoggedIn || function() {
    location.href = '/';
  });
}
