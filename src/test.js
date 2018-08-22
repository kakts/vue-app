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

setInterval(() => {
  app3.seen = !app3.seen
}, 1000);


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
})
setInterval(() => {
  app4.todos.push({
    text: Date.now()
  })
}, 3000)