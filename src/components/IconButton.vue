<template>
    <div class="icon-button-class" v-on="listeners">
        <span :class="cls" :style="spanStyle"></span>
        <button :style="buttonStyle">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "IconButton",
        props: {
            icon: {
                type: String,
                default: "times"
            },
            size: {
                type: Number,
                default: 60
            },
            color: {
                type: String,
                default: "rgb(34, 56, 78)"
            },
        },
        computed: {
            cls: function () {
                return ["fa", "fa-" + this.icon]
            },
            buttonStyle: function () {
                return {
                    height: this.size + "px",
                    backgroundColor: this.hover ? "rgb(100, 100, 100)" : this.color
                    // backgroundColor: this.color
                }
            },
            spanStyle: function () {
                return {
                    height: this.size + "px",
                    width: this.size + "px",
                    lineHeight: this.size + "px",
                    // backgroundColor: "none"
                    backgroundColor: this.hover ? "rgb(70, 70, 70)" : this.color
                }
            },
            listeners: function () {
                let vm = this;
                return Object.assign({}, this.$listeners, {
                    mouseenter: function () {
                        vm.hover = true
                    },
                    mouseleave: function () {
                        vm.hover = false
                    }
                });
            }
        },
        data: function () {
            return {
                hover: false
            }
        }
    }
</script>

<style scoped>

    button {
        outline: none;
        border: none;
        color: black;
        font-family: "consolas", sans-serif;
        letter-spacing: 1px;
        transition: 300ms;
        width: 128px;
        height: 32px;
    }

    span {
        color: black;
        display: inline-block;
        /*margin-right: 8px;*/
        /*font-size: 1.2em;*/
        pointer-events: none;
        vertical-align: top;
        line-height: 32px;
        /*padding: 0 8px;*/
        height: 32px;
        width: 32px;
        text-align: center;
        /*border-right: 1px solid white;*/
        transition: 300ms;
    }

    div.icon-button-class {
        background: none;
    }

    div.icon-button-class:hover span {
        transform: rotateZ(360deg);
        color: deepskyblue;
        /*border-radius: 50%;*/
    }

    div.icon-button-class:hover button {
        color: deepskyblue;
        /*border-left: 1px solid deepskyblue;*/
    }
</style>