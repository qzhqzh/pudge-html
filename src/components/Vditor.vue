<template>
    <div>
        <div id="vditor" class="vditor" v-model="newNote" />
        <b-button @click="addNote(newNote)" :disabled=false variant="primary">
            Add
        </b-button>
    </div>
</template>

<script>
    import Vditor from 'vditor'

    export default {
        name: "vditor.vue",
        data() {
            return {
                contentEditor: '',
                newNote: null
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
                after: () => {
                    this.contentEditor.setValue('hello, Vditor + Vue!')
                },
            })
        },
        methods: {
            addNote(newNote) {
                console.log(this.contentEditor.getValue())
            }
        }
    }
</script>


<style lang="css" scoped>
    @import "https://cdn.jsdelivr.net/npm/vditor@latest/dist/index.css";
</style>

<!--import "~vditor/src/assets/scss/index"-->
