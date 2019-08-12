<template>
    <div>
        <h1>Something Awful</h1>
            usuario: {{id}}
        <button @click="irParaInicio">aaa</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
        }
    },
    // watch: {
    //     $route(to, from){
    //         this.id = to.params.id
    //     }
    // },

    methods: {
        irParaInicio(){
            this.$router.push({name: 'detalhes'})
        }
    }
}
</script>

<style>

</style>
