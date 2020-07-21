<template>
    <div class="hello">
        <p>系统中存在作者 {{ authors.count }}个</p>
        <ul id="auther-list">
            <li v-for="item in lst">
                {{ item.name }}
                <!--{{ item.desc }}-->
                {{ item.created_at }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        // name: 'Axios',
        // props: {
        //     lst: res
        // },
        // data() {
        //     return {
        //         msg: '我是 src/components裏的axios.vue1',
        //         authors: null
        //     }
        // },
        name: 'Author',
        data() {
            return {
                authors: {},
                lst: []
            }
        },
        mounted() {
            var self = this;
            console.log(1);
            console.log(this);
            axios.get(
                this.$baseUrl + '/demo/author'
            ).then(function (response) {
                console.log(2);
                console.log(this);
                self.lst = response.data.results;
                self.authors = response.data;
                console.log(self.lst)
            }).catch(function (error) {
                console.log(error);
            });
            // 没有用箭头函数的时候，需要注意this的赋值


            // axios.get(
            //     this.$baseUrl + '/demo/author'
            // ).then(
            //     response => (
            //         console.log(this)
            //         )

                // function (response) {
                // console.log(2);
                // console.log(this);
                // self.lst = response.data.results;
                // console.log(self.lst)
            // ).catch(function (error) {
            //     console.log(error);
            // });

            // axios.post('http://106.53.58.248:8080/api/demo/book')
            //     .then((response) => {
            //         this.lst = response.data.results;
            //     })
            //     .catch(function (error) {
            //         alert(this.$baseUrl);
            //     })
            // axios.post( {
            //         title: '123',
            //         desc: '123'
            //     },
            //     {
            //         auth: {
            //             username: 'zhuqin',
            //             password: 'zhuqin2863'
            //         }
            //     })
            //     .then(function (response) {
            //         var res = response.data;
            //         alert(res);
            //
            //     })
            //     .catch(function (error) {
            //         alert(error);
            //     });
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
