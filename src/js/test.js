let demo = new Vue({
  el: '#app',
  data: {
    message: 'hello vue.js',
    message2: "2"
  }
})

let app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

let app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {
        text: 'learn javascript'
      },
      {
        text: 'learn vue'
      },
      {
        text: 'build something awesome'
      }
    ]
  }
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue'
  }
});