<template>
    <div>
        <top/>
        <video-main/>
        <bottom/>
    </div>
</template>

<script>
import Top from '@/components/top'
import Bottom from '../components/bottom'
import VideoMain from './videolist'
    export default {
        components: {Top, Bottom, VideoMain },
    }
</script>

<style lang="scss" scoped>

</style>