<template>
    <div>
        <h1>lista de usuarios</h1>
        <ul class="lista">
            <router-link tag="li" to="/usuario/1" class="item-lista">usuario 1</router-link>
            <router-link tag="li" to="/usuario/2" class="item-lista">usuario 2</router-link>
            <router-link tag="li" to="/usuario/3" class="item-lista">usuario 3</router-link>    
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id
        }
    },
}
</script>

<style>
</style>
