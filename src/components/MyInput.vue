<template>
    <div>
        <span :class="['fa', 'fa-' + icon]" :style="spanStyle"></span>
        <label>
            <input
                    :type="password ? 'password' : 'text'"
                    @focusin="isActive = true"
                    @focusout="focusout"
                    @input="$emit('input', $event.target.value)"
                    ref="input"
                    :value="value"
                    :style="inputStyle"
            />
        </label>
        <p :class="{active: isActive}" :style="{'color': isActive ? color : 'lightgray'}">{{ placeholder }}</p>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        data: function () {
            return {
                isActive: false
            }
        },
        props: {
            placeholder: {
                type: String,
                default: "placeholder"
            },
            value: {
                type: String,
                default: ""
            },
            password: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: "exclamation-circle"
            },
            color: {
                type: String,
                default: "deepskyblue"
            }
        },
        methods: {
            focusout: function () {
                if (this.$refs.input.value === "") {
                    this.isActive = false
                }
            }
        },
        computed: {
            spanStyle: function () {
                return {
                    background: this.color
                }
            },
            inputStyle: function () {
                return {
                    borderBottom: "2px solid " + this.color
                }
            },
        }
    }
</script>

<style scoped>
    span {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-size: 1.3em;
        color: white;
    }

    input {
        outline: none;
        position: absolute;
        left: 32px;
        bottom: 0;
        height: 32px;
        width: 300px;
        box-sizing: border-box;
        border: none;
        font-family: "consolas";
        padding: 0 8px;
        background-color: ghostwhite;
    }

    div {
        position: relative;
        height: 52px;
        width: 332px;
    }

    p {
        position: absolute;
        left: 40px;
        bottom: 0;
        height: 32px;
        line-height: 32px;
        margin: 0;
        transition: 300ms;
        font-family: "consolas";
        pointer-events: none;
    }

    p.active {
        transform: translateY(-32px);
        height: 15px;
        line-height: 15px;
        font-size: 0.8em;
        left: 0;
    }
</style>