<template>
    <div>
       <transition enter-to-class="animated bounceInDown" leave-active-class="animated bounceOutUp" mode="out-in">
			<router-view />
		</transition>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
