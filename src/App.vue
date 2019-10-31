<template>
    <div id="app">
<!--        <transition name="fade2">-->
            <router-view></router-view>
<!--        </transition>-->
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        /*flex-direction: column;*/
        justify-content: center;
        /*align-items: center;*/
        /*margin-top: 60px;*/
        width: 100%;
        height: 100%;
    }
</style>
