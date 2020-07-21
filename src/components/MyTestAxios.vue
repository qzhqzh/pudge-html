<template>
    <div class="hello">
        <h1>我是 Axios</h1>
        <h1>{{ msg }}</h1>

        <ul id="example-1">
            <li v-for="item in lst">
                {{ item.title }}
                {{ item.desc }}
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
        data() {
            return {
                msg: '我是 src/components裏的axios.vue1',
                lst: []
            }
        },
        mounted: function () {
            // axios.post('http://106.53.58.248:8080/api/demo/book')
            //     .then((response) => {
            //         this.lst = response.data.results;
            //     })
            //     .catch(function (error) {
            //         alert(this.$baseUrl);
            //     })
            axios.post('http://106.53.58.248:8080/api/demo/book', {
                    title: '123',
                    desc: '123'
                },
                {
                    auth: {
                        username: 'zhuqin',
                        password: 'zhuqin2863'
                    }
                })
                .then(function (response) {
                    var res = response.data;
                    alert(res);

                })
                .catch(function (error) {
                    alert(error);
                });
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
