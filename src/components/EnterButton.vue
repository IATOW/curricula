<template>
    <button :style="style" v-on="listeners">
        <slot></slot>
        <transition name="fade">
            <span v-if="hover"> >></span>
        </transition>
    </button>
</template>

<script>
    export default {
        name: "EnterButton",
        props: {
            color: {
                type: String,
                default: "rgb(12, 34, 56)"
            },
        },
        computed: {
            style: function () {
                return {
                    background: this.color,
                }
            },
            listeners: function () {
                var vm = this;
                return Object.assign({},
                    this.$listeners,
                    {
                        mouseenter: function () {
                            vm.hover = true;
                        },
                        mouseleave: function () {
                            vm.hover = false;
                        }
                    }
                )
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
        display: block;
        color: white;
        outline: none;
        border: none;
        padding: 8px 16px;
        font-family: "consolas";
        height: 32px;
    }

    .fade-enter-active {
        transition: opacity 300ms;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>