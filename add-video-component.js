Vue.component('add-video', {
	name: 'addVideo',
	template: `
	<div>
		<input type="text" placeholder="Enter Youtube ID" v-model="videoId" />
		<button type="button" @click="addVid">Add</button>
	</div>
	`,

	data: function(){
		return {
			videoId: null,
		}
	},

	methods: {
		addVid: function(){
			this.$emit('added', this.videoId);

			this.videoId = null;
		}
	}
});