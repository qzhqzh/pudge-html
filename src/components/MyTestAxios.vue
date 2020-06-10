<template>
  <div class="hello">
    <h1>我是 Axios</h1>
    <h1>{{ msg }}</h1>

    <ul id="example-1">
      <li v-for="item in lst">
        {{ item.created_at }}
      </li>
    </ul>

  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'Axios',
  // props: {
  //   msg: String
  // }
    data () {
        return {
            msg: '我是 src/components裏的axios.vue',
            lst: []
        }
    },
    mounted: function () {
        axios.get('http://106.53.58.248:8080/api/demo/basic-demo')
            .then((response) => {
                this.lst = response.data.results;
                alert(this.$baseUrl);
            })
            .catch(function (error) {
                console.log(error)
            })
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
