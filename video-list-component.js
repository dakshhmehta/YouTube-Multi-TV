var _template =`	<ul>
		<li v-for="(video, i) in videos">
			<input type="checkbox" v-model="video.display" @change="listUpdated" />
			 {{ video.id }} <small class="text-danger"><i class="fa fa-trash" @click="remove(i)"></i></small>
		</li>
	</ul>`;

Vue.component('video-list', {
	name: 'videoList',
	store,

	template: _template,

	computed: {
		videos() {
			return this.$store.state.videos
		}
	},

	methods: {
		listUpdated: function(){
			this.$emit('updated', this.data);
		},

		remove: function(index){
			if(! confirm('Are you sure?')){
				return false;
			}

			this.$store.dispatch('remove', index)
		}
	}
});