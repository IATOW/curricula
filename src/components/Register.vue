<template>
    <div id="register-div">
        <img src="../assets/logo.png" />
        <MyInput
                placeholder="username"
                v-model="username"
                :style="{marginBottom: '30px'}"
                color="rgb(12, 34, 56)"
                icon="user"
        ></MyInput>
        <MyInput
                placeholder="password"
                v-model="password"
                password
                :style="{marginBottom: '30px'}"
                color="rgb(12, 34, 56)"
                icon="lock"
        ></MyInput>
        <MyInput
                placeholder="confirm password"
                v-model="confirm_password"
                password
                color="rgb(12, 34, 56)"
                icon="lock"
        ></MyInput>
        <EnterButton :style="{marginTop: '80px'}">register</EnterButton>
    </div>
</template>

<script>
    import MyInput from "@/components/MyInput";
    import EnterButton from "@/components/EnterButton";
    export default {
        name: "Register",
        components: {EnterButton, MyInput},
        data: function () {
            return {
                username: "",
                password: "",
                confirm_password: ""
            }
        }
    }
</script>

<style scoped>
    div#register-div {
        text-align: center;
        /*margin-top: 60px;*/
    }

    img {
        /*margin-bottom: 24px;*/
    }
</style>