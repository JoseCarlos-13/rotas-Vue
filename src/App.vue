<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<mennu />
			<router-view />
	</div>
</template>

<script>
import Mennu from './components/Menu/Menu'
export default {
	components: {
		'mennu': Mennu
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
