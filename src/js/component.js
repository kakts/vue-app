// Vue.componentは コンポーネントをグローバルに登録する
// グローバルコンポーネントは その後に作成されたルートVueインスタンスのテンプレートで使用できる
// さらにすべてのサブコンポーネント内でも使用できる
Vue.component('button-counter', {
  data: function() { // componentの場合 dataは関数でなければいけない インスタンスごとに独立したデータを保持させるため
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{count}} times.</button>'
});

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
});

Vue.component('slot-test', {
  template: '<a v-bind:href="url" class="nav-link">' +
    '  <slot></slot> 1<br>' +
    ' <slot></slot> 2 <br>' +
    '</a>'
});

new Vue({el: '#components-demo'});

new Vue({
  el: '#demo',
  data: {
    show: true
  },
  methods: {
    fix: function() {
      this.show = !this.show;
    }
  }
});

new Vue({
  el: '#example-1',
  data: {
    show: true
  },
  methods: {
    fix: function() {
      this.show = !this.show;
    }
  }
});

new Vue({
  el: '#example-2',
  data: {
    show: true
  },
  methods: {
    fix: function() {
      this.show = !this.show;
    }
  }
});

new Vue({
  el: '#example-3',
  data: {
    show: true
  },
  methods: {
    fix: function() {
      this.show = !this.show;
    }
  }
});