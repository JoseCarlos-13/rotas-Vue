<template>
    <div class="menu">
        <ul>
            <router-link to="/"><a >inicio</a></router-link>
            <router-link :to="{ name: 'lista'}"><a>listaUsuarios</a></router-link>
            <router-link :to="{ name:'detalhes', query:{complete: 'something awful'} }"><a>detalhes</a></router-link>
            <router-link to="/usuario/detalhes"><a>redirecionar</a></router-link>
        </ul>

        <p>{{$route.query.completo}}</p>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
