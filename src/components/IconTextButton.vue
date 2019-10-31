<template>
    <div class="icon-text-button-root-div"
         :style="{background: active || hover ? '#ffc300' : 'unset'}"
         v-on="listeners"
    >
        <img :src="`${publicPath}${iconPath}`" />
        <p><slot></slot></p>
    </div>
</template>

<script>
    export default {
        name: "IconTextButton",
        props: {
            iconPath: {
                type: String,
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                publicPath: process.env.BASE_URL,
                hover: false
            }
        },
        computed: {
            listeners: function () {
                let vm = this
                return Object.assign({}, {
                    mouseenter: function () {
                        vm.hover = true
                    },
                    mouseleave: function () {
                        vm.hover = false
                    }
                }, vm.$listeners)
            }
        }
    }
</script>

<style scoped>
    img {
        width: 64px;
        height: 64px;
        transition: 300ms;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: 300ms;
        padding: 8px 0;
        /*border-radius: 10px;*/
    }

    p {
        color: white;
        text-align: center;
        font-family: "consolas", sans-serif;
        margin-top: 8px;
    }

    /*div:hover {*/
    /*    background: #ffc300;*/
    /*}*/

    div.icon-text-button-root-div:hover img {
        transform: rotateZ(360deg);
    }
</style>