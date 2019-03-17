var _template = `<div class="col screens" :class="'col-'+width">
					<div class="text-center" v-for="video in videos" v-if="video.display">
						<iframe v-bind:src="'https://youtube.com/embed/'+video.id" class="embed"></iframe><br/>
						{{ video.id }}<br/><br/>
					</div>
				</div>`;

Vue.component('monitor', {
	name: 'Monitor',
	store,
	props: ['width'],
	template: _template,
	data(){
		return {
			videos: this.$store.state.videos
		}
	}
});