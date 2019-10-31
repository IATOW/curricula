<template>
    <div id="curricula-page-root">
        <div id="curricula-page-side-bar">
            <div id="curricula-page-user-info">
                <img src="../assets/logo.png" @click="currentPage = 'UserInfoPage'" />
            </div>
            <IconTextButton
                    v-for="(item, index) in menu"
                    :icon-path="item.icon"
                    :active="currentPage === item.name"
                    @click="onMenuClick(item.name, index)"
                    :key="index"
            >{{ item.text }}</IconTextButton>
        </div>
        <div id="curricula-page-content">
            <component :is="currentPage" @navigate="onNavigate"></component>
        </div>
    </div>
</template>

<script>
    import IconTextButton from "@/components/IconTextButton";
    import UserInfoPage from "@/components/curricula_page/UserInfoPage";
    import storage from "@/utils/storage.js";

    export default {
        name: "CurriculaPage",
        components: {IconTextButton, UserInfoPage},
        data: function () {
            return {
                currentPage: "UserInfoPage",
                menu: [
                    {
                        icon: "note.svg",
                        name: "CoursePage",
                        text: "选课"
                    },
                    {
                        icon: "cooperate.svg",
                        name: "MyCourseListPage",
                        text: "我的课表"
                    },
                    {
                        icon: "dessert.svg",
                        name: "CourseManagePage",
                        text: "课程管理"
                    }
                ],
            }
        },
        methods: {
            onMenuClick: function (name, index) {
                this.currentPage = name;
            },
            onNavigate(name) {
                // console.log(name);
                this.currentPage = name;
            }
        }
    }
</script>

<style scoped>
    #curricula-page-root {
        width: 100%;
        height: 100%;
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    #curricula-page-user-info {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        margin-bottom: 32px;
    }

    #curricula-page-side-bar {
        display: inline-block;
        width: 100px;
        height: 100%;
        background: rgb(31, 28, 28);
    }

    #curricula-page-content {
        height: 100%;
        width: calc(100% - 100px);
        display: inline-block;
        vertical-align: top;
    }
</style>