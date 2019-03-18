<template>
    <ul>
        <li v-for="(video, i) in videos" :key="video.id">
            <input type="checkbox" v-model="video.display" @change="listUpdated" />
             {{ video.id }} <small class="text-danger"><i class="fa fa-trash" @click="remove(i)"></i></small>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'videoList',

    computed: {
        videos() {
            return this.$store.state.videos
        }
    },

    methods: {
        listUpdated: function(){
            this.$store.commit('save')
        },

        remove: function(index){
            if(! confirm('Are you sure?')){
                return false;
            }

            this.$store.dispatch('remove', index)
        }
    }
}
</script>

<style scoped>
ul {
    list-style-position: inside;
}
li {
    text-align: left;
    list-style-type: none;
}
</style>