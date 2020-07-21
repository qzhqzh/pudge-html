<template>
    <b-container>
        <b-form-input v-model="title" placeholder="请输入标题"></b-form-input>
        <div id="vditor" class="vditor"/>
        <b-form-input v-model="category" placeholder="请输入类别"></b-form-input>
        <!--<b-form-input v-model="tags" placeholder="请输入标签"></b-form-input>-->

        <li v-for="tag in tags">
            <b-badge>{{ tag.name }}</b-badge>
        </li>

        <b-button @click="editNote()" :disabled=false variant="primary">
            提交修改
        </b-button>
    </b-container>
</template>

<script>
    import Vditor from 'vditor'
    import axios from "axios"

    export default {
        name: "AddNote.vue",
        data() {
            return {
                contentEditor: '',
                title: '',
                id: '',
                category: '',
                tags: []
            }
        },
        mounted() {
            this.id = this.$route.params.id
            this.contentEditor = new Vditor('vditor', {
                width: '100%',
                height: '0',
                tab: '\t',
                counter: '999999',
                typewriterMode: true,
                mode: 'sv',
                preview: {
                    delay: 100,
                    show: true
                },
                toolbarConfig: {
                    pin: true,
                },
                cache: {
                    enable: false,
                },
                after: () => {
                    this.contentEditor.setValue('请输入内容')
                },
            });
            this.getData();
        },
        methods: {
            getData() {
                axios.get(
                    this.$baseUrl + '/article/note/' + this.id
                ).then((response) => {
                        let data = response.data;
                        this.title = data.title;
                        this.contentEditor.setValue(data.content);
                        this.category = data.category.name;
                        this.tags = data.tags;
                        console.log(data)
                        console.log(this.tags)
                    }
                ).catch(function (error) {
                    console.log(error);
                });
            },
            editNote() {
                let content = this.contentEditor.getValue();
                axios.patch(
                    this.$baseUrl + '/article/note/' + this.id, {
                        title: this.title,
                        content: content,
                        category: this.category,
                        // tags: this.tags
                    }, {
                        auth: {
                            username: 'zhuqin',
                            password: 'zhuqin2863'
                        }
                    }
                ).then((response) => {
                    this.$router.push({ path: '/note' });
                    }
                ).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>


<style lang="css" scoped>
    @import "https://cdn.jsdelivr.net/npm/vditor@latest/dist/index.css";
</style>

<!--import "~vditor/src/assets/scss/index"-->
