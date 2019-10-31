<template>
    <div id="loginRootDiv">
        <img src="../assets/logo.png" />
        <MyInput
                placeholder="username"
                v-model="username"
                :style="{marginBottom: '30px'}"
                icon="user"
                color="rgb(12, 34, 56)"
        ></MyInput>
        <MyInput
                placeholder="password"
                v-model="password"
                password
                icon="lock"
                color="rgb(12, 34, 56)"
        ></MyInput>

        <EnterButton :style="{marginTop: '80px'}" @click="doLogin">login</EnterButton>
    </div>
</template>

<script>
    import MyInput from "@/components/MyInput.vue"
    import EnterButton from "@/components/EnterButton";
    import storage from "@/utils/storage.js";

    export default {
        name: "Login",
        components: {EnterButton, MyInput},
        data: function () {
            return {
                password: "",
                username: ""
            }
        },
        methods: {
            // toSignup: function () {
            //     this.$router.push('register')
            // },
            doLogin: function () {
                // let data = new FormData();
                // data.append("username", this.username);
                // data.append("password", this.password);
                // this.axios.post("http://127.0.0.1:8080/login", data).then(function (response) {
                //
                // })
                // this.$emit("login", this.username, this.password)
                this.$router.push("/curricula");
                storage.set("username", this.username)
            }
        }
    }
</script>

<style scoped>
    div#loginRootDiv {
        text-align: center;
    }
</style>