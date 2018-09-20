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

new Vue({el: '#components-demo'});