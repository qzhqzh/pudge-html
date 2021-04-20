import Vue from 'vue'
import Router from 'vue-router'

// 笔记模块
import Note from '@/components/note/ListNote'
import AddNote from '@/components/note/AddNote'
import DetailNote from '@/components/note/DetailNote'
import EditNote from '@/components/note/EditNote'


import Author from '@/components/Author'
import TestTb from '@/components/TestTb'
import Vditor from '@/components/Vditor'

import Hello from '@/components/Hello'
import MyTest from '@/components/MyTest'
import Axios from '@/components/MyTestAxios'
import notFind from '@/components/notFind'

Vue.use(Router)
export default new Router({
    mode:'history',
    routes: [
        {
            path: '/author',
            component: Author
        },
        // {
        //     path: '/author',
        //     component: Author
        // },
        // {
        //     path: '/note/add',
        //     component: AddNote
        // },
        // {
        //     path: '/note/:id',
        //     component: DetailNote
        // },
        // {
        //     path: '/note/:id/edit',
        //     component: EditNote
        // },
        // {
        //     path: '/note',
        //     component: Note
        // },
        // {
        //     path: '/testtb',
        //     component: TestTb
        // },
        // {
        //     path: '/vditor',
        //     component: Vditor
        // },
        // {
        //     path: '/',
        //     name: 'index',
        //     component: Hello
        // },
        // {
        //     path: '/hello',
        //     component: Hello
        // },
        // {
        //     path: '/test',
        //     name: 'MyTest',
        //     component: MyTest
        // },
        // {
        //     path: '/axios',
        //     name: 'Axios',
        //     component: Axios
        // },

        // 匹配错误的页面
        {
            path: '*',
            name: 'notFind',
            component: notFind
        }
    ]
})
