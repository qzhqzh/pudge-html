<template>
    <b-container>
        <p>系统中存在笔记 {{ formData.count }}个</p>

        <b-button size="sm" @click="add()">
            添加
        </b-button>

            <b-form-group
                    label=""
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="SearchInput"
                    class="mb-0"
            >
                <b-input-group size="sm">
                    <b-form-input
                            v-model="searchVal"
                            type="search"
                            id="SearchInput"
                            placeholder="搜索标题、分类"
                    ></b-form-input>
                    <b-input-group-append>
                        <b-button @click="searchNote(searchVal)">搜索</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>

        <b-table striped hover :items="formData.results" :fields="fields">
            <template v-slot:cell(tags)="row">

                <b-form-tag disabled tag-pills v-for="(tag, i) in row.item.tags">
                    {{tag.name}}
                </b-form-tag>

            </template>
            <template v-slot:cell(actions)="row">
                <b-button size="sm" @click="see(row.item)">
                    查看
                </b-button>
                <b-button size="sm" @click="edit(row.item)">
                    修改
                </b-button>
                <b-button size="sm" @click="del(row.item, row.index, $event.target)" class="mr-1">
                    删除
                </b-button>
            </template>
        </b-table>


        <template>
            <div class="overflow-auto">
                <!--<b-pagination-nav :link-gen="linkGen" :page-ge n="pageGen" :number-of-pages="pageCount" use-router></b-pagination-nav>-->
                <b-pagination-nav :link-gen="linkGen" :page-gen="pageGen" :number-of-pages="pageCount" use-router></b-pagination-nav>
            </div>
        </template>

        <!--<template>-->
            <!--<div class="overflow-auto">-->
                <!--<b-pagination-nav :link-gen="linkGen2" :number-of-pages="10" use-router></b-pagination-nav>-->
            <!--</div>-->
        <!--</template>-->

        <hr>

        <!-- Info modal -->
        <b-modal :id="delModal.id" :title="delModal.title"  ok-only @hide="resetInfoModal">
            <pre>{{ delModal.content }}</pre>
        </b-modal>
    </b-container>
</template>

<script>
    import axios from "axios"
    import Vditor from 'vditor'
    export default {
        name: "ListNote.vue",
        data() {
            return {
                fields: [
                    { key: 'title', label: '标题' },
                    { key: 'content', label: '内容' },
                    { key: 'category.name', label: '类别' },
                    { key: 'tags', label: '标签' },
                    { key: 'actions', label: '操作' }
                    ],
                formData: {},
                delModal: {
                    id: 'info-modal',
                    title: '',
                    content: ''
                },
                contentEditor: '',
                vditor: null,
                pageNum: 1,
                recordCount: 0,
                pageSize: 5,
                currentPage: 1,
                searchVal: '',
                param: '',
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData(){
                var paramList = []

                for (var key in this.$route.query)
                {
                    paramList.push(key + '=' + this.$route.query[key])
                }
                this.param = paramList ? '&' + paramList.join('&') : ''

                axios.get(
                    this.$baseUrl + '/article/note?page_size=' + this.pageSize + this.param
                ).then((response) => {
                        this.formData = response.data;
                        this.recordCount = response.data.count
                    }
                ).catch(function (error) {
                    console.log(error);
                    this.$message.error('tt')
                });
            },
            reload() {
                this.getData();
            },
            add(){
                this.$router.push('/note/add')
            },
            see(item){
                this.$router.push('/note/'+item.id)
            },
            edit(item) {
                this.$router.push('/note/'+item.id + '/edit')
            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            del(item, index, button) {
                // this.boxTwo = ''
                this.$bvModal.msgBoxConfirm('请确认删除', {
                    title: 'Please Confirm',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    okTitle: 'YES',
                    cancelTitle: 'NO',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                })
                    .then(value => {
                        axios.delete(
                            this.$baseUrl + '/article/note/' + item.id,
                            {
                                auth: {
                                    username: 'zhuqin',
                                    password: 'zhuqin2863'
                                }
                            }
                        ).then((response) => {
                            this.getData()
                            }
                        ).catch(function (error) {
                            console.log(error);
                        });
                    })
                    .catch(err => {
                        // An error occurred
                        console.log(err);
                    })
            },
            searchNote (searchVal) {
                axios.get(
                    this.$baseUrl + '/article/note' + '?search=' + searchVal
                ).then((response) => {
                        this.formData = response.data;
                    }
                ).catch(function (error) {
                    console.log(error);
                });

            },
            linkGen(pageNum) {
                // 页码导航链接
                return pageNum === 1 ? '?' : `?page=${pageNum}`
                return `?page=${pageNum}`
            },
            // linkGen2(pageNum) {
            //     // 页码导航链接
            //     return pageNum === 1 ? '?' : `?page=${pageNum}`
            // },
            pageGen(pageNum) {
                // 页码导航样式
                return '第'+pageNum+'页'
            }
        },
        computed: {
            pageCount: function () {
                // 第一次 option 请求中 recordCount 为 0,
                // 需要判断最后结果 pageCount 不能为 0
                return this.recordCount !== 0 ? Math.ceil(this.recordCount / this.pageSize) : 1
            }
        }
    }
</script>

<style scoped>

</style>
