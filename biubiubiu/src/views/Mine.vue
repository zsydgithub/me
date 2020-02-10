<template>
    <div>
        
        嘿嘿嘿
        {{$route.params.id}}
        {{$route.params.name}}
        <router-link to="/mine/test1">子路由1</router-link>
        <router-link to="/mine/test2">子路由2</router-link>
        <router-view></router-view>
        
        
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>