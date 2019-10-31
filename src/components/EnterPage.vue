<template>
    <div id="enter-page-root">
<!--        <img src="../assets/back.jpg" />-->
        <div class="worm">
            <div id="enter-page-top-bar">
                <span class="button fa fa-map-marker" @click="onLoginClick"></span>
                <span class="button fa fa-sign-in" @click="onSignupClick"></span>
            </div>
            <div id="enter-page-body">
                <component :is="comp"></component>
            </div>
        </div>

    </div>
</template>

<script>
    import Login from "@/components/Login.vue"
    import Register from "@/components/Register.vue"

    export default {
        name: "EnterPage",
        data: function () {
            return {
                comp: "Login"
            }
        },
        components: {
            Login, Register
        },
        methods: {
            onLoginClick: function () {
                this.comp = "Login"
            },
            onSignupClick: function () {
                this.comp = "Register"
            }
        }
    }
</script>

<style scoped>
    #enter-page-root {
        width: 100%;
        height: 100%;
    }

    .button {
        height: 32px;
        width: 32px;
        text-align: center;
        line-height: 32px;
        font-size: 1.2em;
        transition: 300ms;
        border-radius: 50%;
        margin-left: 8px;
        margin-bottom: 8px;
    }

    .button:hover {
        transform: rotateZ(360deg);
        background: black;
        color: white;
    }

    .worm {
        /*box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.3);*/
        width: 380px;
        margin: 0 auto;
    }

    #enter-page-top-bar {
        /*width: 380px;*/
        margin: auto;
        margin-top: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    #enter-page-body {
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        padding: 24px;
        width: 332px;
        margin: auto;

    }

    /*img {*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*}*/
</style>