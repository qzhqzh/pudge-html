<template>
  <div class="hello">
    <h1>我是 notFind</h1>
    <h1>{{ msg }}</h1>
    <p>
    </p>
  </div>
</template>

<script>
export default {
  name: 'notFind',
  // props: {
  //   msg: String
  // }
    data () {
        return {
            msg: '对不起，匹配不到对应资源,我是notFind.vue'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
