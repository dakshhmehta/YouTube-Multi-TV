var _template =`	<ul>
		<li v-for="(video, i) in data">
			<input type="checkbox" v-model="video.display" @change="listUpdated" />
			 {{ video.id }} <small class="text-danger"><i class="fa fa-trash" @click="remove(i)"></i></small>
		</li>
	</ul>`;

Vue.component('video-list', {
	name: 'videoList',

	props: ['data'],

	template: _template,

	methods: {
		listUpdated: function(){
			this.$emit('updated', this.data);
		},

		remove: function(index){
			if(! confirm('Are you sure?')){
				return false;
			}

			this.data.splice(index, 1);

			this.$emit('removed', this.data);
		}
	}
});