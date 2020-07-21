<template>
    <div id="app">

        <Navbar></Navbar>
        <!--<b-alert variant="danger" show="dismissCountDown" dismissible>-->
            <!--Dismissible Alert! Click the close button over there <b>&rArr;</b>-->
        <!--</b-alert>-->
        <!--<router-link to="/axios">Axios测试</router-link>-->
        <!--<router-link to="/book">书</router-link>-->
        <!--<router-link to="/author">作者</router-link>-->
        <!--<router-link to="/note">笔记</router-link>-->
        <!--<router-link to="/testtb">测试</router-link>-->
        <!--<router-link to="/vditor">编辑器</router-link>-->
        <b-container>
            <router-view :key="key">
            </router-view>
        </b-container>


        <!--<MyTest></MyTest>-->
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';

    //import HelloWorld from './components/HelloWorld.vue'
    import MyTest from './components/MyTest.vue'
    import Book from './components/Book.vue'
    import Auther from './components/Author.vue'
    import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            Book,
            Auther,
            // HelloWorld,
            MyTest,
            BIcon,
            BIconArrowUp,
            BIconArrowDown
        },
        computed: {
            key(){
                return this.$route.name?this.$route.name+ +new Date():this.$route+ +new Date()
            }
        }
    }
</script>
