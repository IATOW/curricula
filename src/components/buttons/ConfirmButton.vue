<template>
    <button v-on="$listeners"><span class="fa fa-location-arrow"></span></button>
</template>

<script>
    export default {
        name: "ConfirmButton"
    }
</script>

<style scoped>
    button {
        outline: none;
        border: none;
        background: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        position: relative;
        transition: 300ms;
    }

    button:hover {
        background: dimgray;
        color: white;
    }

    /*button::before {*/
    /*    content: "";*/
    /*    width: 10px;*/
    /*    height: 10px;*/
    /*    position: absolute;*/
    /*    left: 0;*/
    /*    top: 0;*/
    /*    !*background: red;*!*/
    /*    transition: 100ms;*/
    /*    border-top: 2px solid rgb(12, 34, 56);*/
    /*    border-left: 2px solid rgb(12, 34, 56);*/
    /*    opacity: 0;*/
    /*}*/

    /*button::after {*/
    /*    content: "";*/
    /*    width: 10px;*/
    /*    height: 10px;*/
    /*    position: absolute;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*    !*background: red;*!*/
    /*    transition: 100ms;*/
    /*    border-right: 2px solid rgb(12, 34, 56);*/
    /*    border-bottom: 2px solid rgb(12, 34, 56);*/
    /*    opacity: 0;*/
    /*}*/

    /*button:hover::after {*/
    /*    opacity: 1;*/
    /*    transform: translate(10px, 10px);*/
    /*}*/

    /*button:hover::before {*/
    /*    opacity: 1;*/
    /*    transform: translate(-10px, -10px);*/
    /*}*/
</style>