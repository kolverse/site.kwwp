import * as params from '@params';

window.disqus_config = function () {
  this.page.identifier = params.disqus_identifier_fm || params.disqus_identifier_auto;
  this.page.title = params.disqus_title_fm || params.disqus_title_auto;
  this.page.url = params.disqus_url_fm || params.disqus_url_auto;
};
(function() {
  var d = document, s = d.createElement('script');
  s.async = true;
  s.src = 'https://' + params.DisqusShortName + '.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
