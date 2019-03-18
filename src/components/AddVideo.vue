<template>
    <div>
        <input type="text" placeholder="Enter Youtube ID" v-model="videoId" />
        <button type="button" @click="addVid">Add</button>
    </div>
</template>

<script>
export default {
    name: 'addVideo',
    
    data() {
        return {
            videoId: null,
        }
    },

    methods: {
        addVid: function(){
            let that = this

            this.$store.dispatch('add', this.videoId).then(function(){
                that.videoId = null
            }).catch(function(videoId){
                alert(videoId+' is already in list.')
            })
        }
    }
}
</script>