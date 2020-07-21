<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-container>
                <b-navbar-brand href="#">
                    Brand
                    <b-icon-shop-window></b-icon-shop-window>
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="/test">测试</b-nav-item>
                        <b-nav-item href="/axios">Axios测试</b-nav-item>
                        <b-nav-item href="/book">书</b-nav-item>
                        <b-nav-item href="/author">作者</b-nav-item>
                        <b-nav-item href="/note">笔记</b-nav-item>
                        <b-nav-item href="/testtb">测试表格</b-nav-item>
                        <b-nav-item href="/vditor">编辑器</b-nav-item>
                        <!--<b-nav-item href="#">Disabled</b-nav-item>-->
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input
                                    size="sm"
                                    class="mr-sm-2"
                                    placeholder="Search for a help"
                                    v-model="meal"
                            ></b-form-input>
                            <b-button
                                    size="sm"
                                    class="my-2 my-sm-0"
                                    type="submit"
                                    @click.prevent="getMeal"
                            >Search
                            </b-button>
                        </b-nav-form>
                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template slot="button-content"><em>User</em></template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                meal: ''
            }
        },
        methods: {
            getMeal() {
            }
        }
    }
</script>
