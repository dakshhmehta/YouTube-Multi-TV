import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        videos: []
    },
    mutations: {
        restore: function(state) {
            let videos = JSON.parse(window.localStorage.getItem('videos'));
            if (videos != null) {
                state.videos = videos
            }
        },
        save(state) {
            window.localStorage.setItem('videos', JSON.stringify(state.videos))
        }
    },
    actions: {
        add(ctx, videoId) {
            return new Promise(function(resolve, reject) {
                var inArray = false;
                for (var i in ctx.state.videos) {
                    if (videoId.trim() === ctx.state.videos[i].id) {
                        inArray = true;
                        break;
                    }
                }
                if (!inArray) {
                    ctx.state.videos.push({
                        id: videoId,
                        display: true,
                    });
                    ctx.commit('save')
                    return resolve(videoId)
                }
                return reject(videoId);
            })
        },
        remove(ctx, index) {
            return new Promise(function(resolve) {
                ctx.state.videos.splice(index, 1)
                ctx.commit('save')

                return resolve(index)
            })
        }
    }
})