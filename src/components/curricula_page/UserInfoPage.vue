<template>
    <div id="user-info-page-root">
        <div id="user-info-page-avatar">
            <img src="../../assets/logo.png" />
            <p>{{ username }}</p>
        </div>
        <div id="user-info-page-links">
            <p>链接</p>
            <div>
                <Card
                        v-for="(item, index) in links"
                        width="400"
                        :icon="item.icon"
                        :header="item.header"
                        :content="item.content"
                        :key="index"
                        :color="item.color"
                        @confirm="onLinksClicked(index)"
                ></Card>
            </div>

        </div>

    </div>
</template>

<script>
    import storage from "@/utils/storage"
    import Card from "@/components/Card";

    export default {
        name: "UserInfoPage",
        components: {Card},
        data: function () {
            return {
                username: "",
                links: [
                    {
                        icon: "cooperate.svg",
                        header: "Arrange",
                        content: "worm worm worm worm worm worm worm worm worm worm",
                        color: "rgba(65,184,131,0.1)"
                    },
                    {
                        icon: "dessert.svg",
                        header: "Curricula",
                        content: "asdj kahsdj askhd akjd hajsd",
                        color: "rgba(239,108,154,0.1)"
                    },
                    {
                        icon: "note.svg",
                        header: "Manage",
                        content: "yuew qyyue t3784 uas uysau dau ytqw78",
                        color: "rgba(105,150,211,0.1)"
                    }
                ]
            };
        },
        mounted: function () {
            this.username = storage.get("username");
            if (!this.username) {
                this.username = "default";
            }
        },
        methods: {
            onLinksClicked: function (index) {
                // console.log("aaa");
                if (index === 0) {
                    this.$emit("navigate", "CoursePage")
                } else if (index === 1) {
                    this.$emit("navigate", "MyCourseListPage")
                } else if (index === 2) {
                    this.$emit("navigate", "CourseManagePage")
                }
            }
        }
    }
</script>

<style scoped>
    #user-info-page-root {
        width: 100%;
        height: 100%;
        /*background: #222226;*/
    }

    #user-info-page-avatar {
        display: flex;
        align-items: center;
        /*justify-content: center;*/
        /*flex-direction: column;*/
        border-bottom: 1px solid #00000030;
        margin: 0 100px;
    }

    #user-info-page-avatar img {
        border-radius: 50%;
        box-shadow: 0 0 30px 1px #00000030;
        /*margin-bottom: 24px;*/
        /*margin-top: 32px;*/
        margin: 32px 0;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    #user-info-page-avatar p {
        font-family: "consolas", sans-serif;
        font-size: 1.2em;
        /*margin-bottom: 24px;*/
        color: black;
        display: inline;
        /*margin: 32px 0;*/
        margin-left: 32px;
        height: 32px;
        line-height: 32px;
    }

    #user-info-page-links {
        margin-top: 48px;
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
    }

    #user-info-page-links p {
        display: inline-block;
        width: 64px;
        height: 64px;
        background: rgb(31,28,28);
        border-radius: 50%;
        color: white;
        text-align: center;
        line-height: 64px;
        margin-left: 100px;
    }

    #user-info-page-links > div {
        display: flex;
        justify-content: space-between;
        padding: 0 100px;
        margin-top: 64px;
    }
</style>