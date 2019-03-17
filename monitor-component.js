var _template = `<div class="col screens" :class="'col-'+width">
					<div class="row">
						<div class="col col-4 text-center" v-for="video in videos" v-if="video.display">
							<div class="embed-responsive" style="height: 25vh">
							<iframe :src="'https://youtube.com/embed/'+video.id+'?autoplay=1'" class="embed"></iframe>
							</div>
							<p>{{ video.id }}</p>
						</div>
					</div>
				</div>`;

Vue.component('monitor', {
	name: 'Monitor',
	store,
	props: ['width'],
	template: _template,
	computed: {
		videos() {
			return this.$store.state.videos
		}
	}
});