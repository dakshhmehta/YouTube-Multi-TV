<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col text-right">
        <input type="checkbox" v-model="panel" /> Display Panel
      </div>
    </div>
    <hr class="m-2" />
    <div class="row">
      <div class="col col-9" v-if="!has_videos">
        <div class="alert alert-info" role="alert">
          Either no videos there or available to display.
        </div>
      </div>

      <monitor v-if="has_videos" :width="screen_width"></monitor>

      <div class="col panel" v-if="panel">
        <add-video></add-video>
        <hr class="m-2" />

        <video-list></video-list>
      </div>
    </div>
  </div>
</template>

<script>
import AddVideo from './components/AddVideo.vue'
import Monitor from './components/Monitor.vue'
import VideoList from './components/VideoList.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    AddVideo, Monitor, VideoList
  },

  data() {
    return {
      panel: false,
    }
  },

  created() {
    this.$store.commit('restore')
  },

  computed: {
    has_videos() {
      var c = 0;
      for(var i in this.$store.state.videos){
        if(this.$store.state.videos[i].display){
          c++;
        }
      }

      if(c > 0){
        return true;
      }

      return false;
    },
    screen_width() {
      return ((this.panel) ? 9 : 12);
    }
  },
}
</script>

<style>
#app {
  padding: 1vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
