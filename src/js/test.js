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


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

Vue.component('wei', {
  props: ['todo2'],
  template: 'we! {{ todo2.we }}'
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables'},
      { id: 1, text: 'Cheese'},
      { id: 2, text: 'Whatever else humans are supposed to eat'}
    ],
    b: null,
    iii: [
      {id : 0, we: 111},
      {id : 1, we: 222}
    ]
  },
  created: function() {
    console.log('created-----', this.b);
  },
  mounted: function() {
    console.log('mounted---');
  },
  updated: function() {
    console.log('updated---');
  },
  destroyed: function() {
    console.log('destroyed---');
  }
});
// 初期化時にdataに指定されたパラメータの変更はリアクティブ
app7.b = 'hi';
// new Vueで渡したデータのみリアクティブになるので、下記はビューの更新を引き起こさない
app7.d = 'hihi';

const app8 = new Vue({
  el: '#app-8',
  data: {
    msg: 'hellowwww',
    seen: true
  },
  computed: {
    test: function() {
      // computedプロパティは依存関係に基づきキャッシュされる
      // 依存するものが更新されたときにだけ再評価される
      return Date.now() + '$'
    }
  },
  methods: {
    test2: function() {
      // 再描画が起きるたびに関数を実行する 結果が毎回変わる コストがかかるので注意
      return Date.now() + '$';
    }
  }
})

const watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question: function(newQ, oldQ) {
      this.answer = 'Waiting for you to stop typing';
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return;
      }

      this.answer = 'Thinking...'
      var vm = this;
      axios.get('https://yesno.wtf/api')
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function(err) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})

const classTest = new Vue({
  el: '#class-test',
  data: {
    classObj: {
      isActive: true,
      hasError: false
    },
    style: {
      color: 'red',
      fontSize: 100
    }

  }
});