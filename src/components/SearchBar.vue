<template>
    <div>
        <input
                type="text"
                :placeholder="placeholder"
                v-model="content"
                id="input"
        />
        <span id="search-icon" class="fa fa-search" @click="onSearch"></span>
        <span id="cancel-icon" class="fa fa-times-circle" v-show="content" @click="onClear"></span>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        props: {
            placeholder: {
                type: String,
                default: "default"
            }
        },
        methods: {
            onClear: function () {
                this.content = ""
            },
            onSearch: function () {
                this.$emit("search", this.content)
            }
        },
        data: function () {
            return {
                content: ""
            }
        }
    }
</script>

<style scoped>
    div {
        position: relative;
    }

    input {
        outline: none;
        box-sizing: border-box;
        height: 40px;
        width: calc(100% - 40px);
        vertical-align: top;
        padding: 0 38px 0 8px;
        border: 2px solid rgb(12, 34, 56);
        font-size: 1.2em;
        font-family: "consolas", sans-serif;
    }

    span#search-icon {
        height: 40px;
        width: 40px;
        line-height: 40px;
        text-align: center;
        background: rgb(12, 34, 56);
        color: white;
        transition: 300ms;
    }

    span#cancel-icon {
        position: absolute;
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 1.2em;
        right: 40px;
        transition: 300ms;
    }

    span#cancel-icon:hover {
        color: orangered;
    }

    span#search-icon:hover {
        color: darkturquoise;
    }
</style>