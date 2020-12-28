import Echo from 'laravel-echo';

 window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'local-key-123',//process.env.MIX_PUSHER_APP_KEY,
//     wsHost: '127.0.0.1',
//     wsPort: 6001,
//     encrypted: false,
//     disableStats: true,
// });

const echo = new Echo({
    broadcaster: 'pusher',
    key: 'local-key-123',//process.env.MIX_PUSHER_APP_KEY,
    wsHost: '127.0.0.1',
    wsPort: 6001,
    encrypted: false,
    forceTLS: false,
    disableStats: true,
});


export default async ({ Vue }) => {
    Vue.prototype.$echo = echo
  }


// export {echo}
