<template>
    <div id="app">
        <!--<Navbar />-->
        <!--<HelloWorld/>-->
        <!--<router-link to="/test">demo_test</router-link>-->
        <router-link to="/axios">demo_test</router-link>
        <router-view></router-view>
        <!--<MyTest></MyTest>-->
    </div>
</template>
<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import MyTest from './components/MyTest.vue'
    //import Navbar from './components/Navbar.vue';
    export default {
        name: 'app',
        components: {
            // Navbar,
            // HelloWorld,
            MyTest
        }
    }
</script>
