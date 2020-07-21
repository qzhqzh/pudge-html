<template>
    <div>
        <b-form-input v-model="title" placeholder="请输入标题"></b-form-input>
        <div id="vditor" class="vditor"/>
        <br>
        <b-form-input v-model="category" placeholder="请输入类别"></b-form-input>

        <!--<div v-for="(orderItem, index) in tags" :key="key">-->
        <div v-for="(orderItem, index) in tags" :key="index">
            <b-row>
                <b-col sm="10">
                    <!--<b-form-input :value="orderItem" placeholder="请输入标签"></b-form-input>-->
                    <b-form-input v-model="tags[index]" placeholder="请输入标签"></b-form-input>
                </b-col>
                <b-col sm="2">
                    <button v-if='index===0' style="color:#DFADAE"@click='addTag()'>+</button>
                    <button v-if='index!==0' style="color:#DFADAE"@click='delTag(orderItem, index)'>-</button>
                </b-col>
            </b-row>
        </div>

        <b-button @click="addNote()" :disabled=false variant="primary">
            提交
        </b-button>
    </div>
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
                category: '',
                tags: ['']
            }
        },
        mounted() {
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
                placeholder: '请输入内容',
                after: () => {
                    this.contentEditor.setValue('')
                },
            })
        },
        methods: {
            addNote() {
                let content = this.contentEditor.getValue();
                axios.post(
                    this.$baseUrl + '/article/note', {
                        title: this.title,
                        content: content,
                        category: this.category,
                        tags: this.tags
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
            },
            addTag() {
                this.tags.push('')
            },
            delTag(orderItem, index) {
                alert(index)
                console.log(this.tags)
                this.tags.splice(index, 1)
                console.log(this.tags)
            }
        }
    }
</script>


<style lang="css" scoped>
    @import "https://cdn.jsdelivr.net/npm/vditor@latest/dist/index.css";
</style>

<!--import "~vditor/src/assets/scss/index"-->
