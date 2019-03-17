var _template = `<div class="col screens" :class="'col-'+width">
			<div class="row">
				<div class="col text-center" v-for="video in data" v-if="video.display">
					<iframe v-bind:src="'https://youtube.com/embed/'+video.id" class="embed"></iframe><br/>
					{{ video.id }}<br/><br/>
				</div>
			</div>
		</div>`;

Vue.component('monitor', {
	name: 'Monitor',
	props: ['data', 'width'],
	template: _template
});