<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{category.name}}</p>
        <p>{{content}}</p>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: "DetailNote.vue",
        data() {
            return {
                id: '',
                title: '',
                content: '',
                category: {},
                tags: ''
            }
        },
        mounted() {
            this.id = this.$route.params.id
            this.getData()
        },
        methods: {
            getData() {
                axios.get(
                    this.$baseUrl + '/article/note/' + this.id
                ).then((response) => {
                        this.title = response.data.title;
                        this.content = response.data.content;
                        this.category = response.data.category;
                    }
                ).catch(function (error) {
                    console.log(error);
                });
            },
        }
    }
</script>

<style scoped>

</style>
