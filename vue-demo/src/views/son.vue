<template>
    <div>
        <slot name="todo" :todo="todo"></slot>
    </div>
</template>

<script>
    export default {
        name: "son",
        data(){
            return{
                todo:[10,20,30,40,50,60,70,80,90]
            }
        },
        components:{}

    }
</script>

<style scoped>

</style>
