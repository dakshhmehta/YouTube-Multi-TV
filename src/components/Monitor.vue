<template>
    <div class="col screens" :class="'col-'+width">
        <div class="row">
            <div class="col col-4 text-center" v-for="video in videos" :key="video.id">
                <div class="embed-responsive">
                <iframe :src="'https://youtube.com/embed/'+video.id+'?autoplay=1'" class="embed"></iframe>
                </div>
                <p>{{ video.id }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Monitor',
    props: ['width'],
    computed: {
        videos() {
            let videos = []

            this.$store.state.videos.map(function(video){
                if(video.display){
                    videos.push(video)
                }
            })

            return videos
        }
    }
}
</script>

<style scoped>
.embed-responsive {
    min-height: 30vh;
}
</style>