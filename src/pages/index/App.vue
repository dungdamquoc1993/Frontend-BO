<template>
    <div id="app" :class="vueAppClasses">
		<router-view @setAppClasses="setAppClasses" />
	</div>
</template>

<script>
export default {
    name: 'Home',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Trang chủ',
    },
    data() {
        return {
            vueAppClasses: [],
        }
    },
    methods: {
        setAppClasses(classesStr) {
        this.vueAppClasses.push(classesStr)
        },
    }
}
</script>

<style scoped>
h1, h2{
    font-weight: normal;
}

</style>