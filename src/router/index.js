import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyTest from '@/components/MyTest'
import Axios from '@/components/MyTestAxios'
import notFind from '@/components/notFind'

Vue.use(Router)
export default new Router({
    mode:'history',
    routes: [
        // {
        //     path: '/',
        //     name: 'index',
        //     component: Hello
        // },
        {
            path: '/hello',
            component: Hello
        },
        {
            path: '/test',
            name: 'MyTest',
            component: MyTest
        },
        {
            path: '/axios',
            name: 'Axios',
            component: Axios
        },
        {
            path: '*',
            name: 'notFind',
            component: notFind
        }
    ]
})
