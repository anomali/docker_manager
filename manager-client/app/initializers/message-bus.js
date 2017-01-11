/* global MessageBus, Discourse, $:true */

export default {
  name: "message-bus",

  initialize() {
console.log('message-bus init');
    MessageBus.baseUrl = Discourse.longPollingBaseUrl;
console.log(MessageBus.baseUrl);

    if (MessageBus.baseUrl !== '/') {
      MessageBus.ajax = function(opts) {
        opts.headers = opts.headers || {};
        opts.headers['X-Shared-Session-Key'] = $('meta[name=shared_session_key]').attr('content');
        return $.ajax(opts);
      };
    } else {
      MessageBus.baseUrl = Discourse.getURL('/');
console.log(MessageBus.baseUrl);
    }
  }
};
