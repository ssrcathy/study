<template id="test">
    <div>
        <!--<header>头部</header>-->
        <!--<slot name="one"> 我是one</slot>-->
        <!--<slot name="two"> 我是two</slot>-->
        <!--<slot name="three"> 我是three</slot>-->
        <!--<footer>尾部</footer>-->
        <header>我是头部</header>
        <slot>我是中间</slot>
        <slot>我是中间</slot>
        <slot>我是中间</slot>
        <footer>我是尾部</footer>
    </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>
