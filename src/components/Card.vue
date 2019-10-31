<template>
    <div class="card-root" :style="rootStyle">
        <svg>
            <path :d="d" :fill="color"></path>
            <circle :cx="cx" :cy="cy" r="200px" fill="#ffffff90"></circle>
        </svg>
        <img :src="`${publicPath}${icon}`" />
        <h3>{{ header }}</h3>
        <p>{{ content }}</p>
        <ConfirmButton @click="click"></ConfirmButton>
    </div>
</template>

<script>
    import ConfirmButton from "@/components/buttons/ConfirmButton";
    export default {
        name: "Card",
        components: {ConfirmButton},
        data: function () {
            return {
                publicPath: process.env.BASE_URL,
                cx: 0,
                cy: 0,
            }
        },
        methods: {
            click: function () {
                // console.log("aaa")
                this.$emit("confirm");
            }
        },
        props: {
            icon: {
                type: String,
                default: "favicon.ico"
            },
            header: {
                type: String,
                default: "Default"
            },
            content: {
                type: String,
                default: "Content"
            },
            color: {
                type: String,
                default: "rgba(65,184,131,0.1)"
            },
            width: {
                type: Number,
                default: 300
            }
        },
        created: function () {
            this.cx = Math.random() * 200;
            this.cy = Math.random() * 300;
        },
        computed: {
            d: function () {
                let x = this.width - 30;
                return "m 0 0 h " + x + " l 30 30 v 270 h " + -x + " l -30 -30 z";
            },
            rootStyle: function () {
                return {
                    width: this.width + "px"
                }
            }
        }
    }
</script>

<style scoped>
    .card-root {
        /*width: 300px;*/
        height: 300px;
        text-align: center;
        position: relative;
        transition: 300ms;
        /*display: inline-block;*/
        /*padding: 30px 0 0 30px;*/
    }

    .card-root img {
        width: 96px;
        height: 96px;
        transition: 300ms;
        background: transparent;
        transform: translateY(64px);
    }

    .card-root:hover img {
        width: 48px;
        height: 48px;
        transform: translate(0, 24px);
    }

    .card-root h3 {
        font-family: "consolas", sans-serif;
        /*color: white;*/
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        transform: translateY(96px);
        transition: 300ms;
    }

    .card-root:hover h3 {
        transform: translateY(32px);
    }

    .card-root p {
        padding: 0 32px;
        margin-top: 8px;
        font-family: "consolas", sans-serif;
        /*color: white;*/
        text-align: center;
        height: 128px;
        overflow: hidden;
        opacity: 0;
        transition: 300ms;
    }

    .card-root:hover p {
        opacity: 1;
        transform: translateY(32px);
    }

    button {
        margin-top: 20px;
        opacity: 0;
    }

    .card-root:hover button {
        opacity: 1;
        transform: translateY(12px);
    }

    svg {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        /*z-index: -1;*/
    }

    /*.card-root:hover*/
</style>