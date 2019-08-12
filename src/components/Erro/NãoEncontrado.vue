<template>
    <div>
        <h1><strong>404 NÃO ENCONTRADO</strong></h1>
        <router-link to="/" tag="button"><a>Voltar para o inicio</a></router-link>
        <button @click="confirmar = !confirmar">Voltar</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            confirmar: false
        }
    },

    beforeRouteLeave(to, from, next){
        console.log(1)
        if(this.confirmar){
            next('/')
        } else {
            if(confirm('tem certeza?')){
                next('/')
            } else {
                next(false)
            }
        }
    },
}
</script>

<style>

</style>
