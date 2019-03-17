Vue.component('add-video', {
	name: 'addVideo',
	store,
	template: `
	<div>
		<input type="text" placeholder="Enter Youtube ID" v-model="videoId" />
		<button type="button" @click="addVid">Add</button>
	</div>
	`,

	data() {
		return {
			videoId: null,
		}
	},

	methods: {
		addVid: function(){
			let that = this

			this.$store.dispatch('add', this.videoId).then(function(status){
				that.videoId = null
			}).catch(function(videoId){
				alert(videoId+' is already in list.')
			})
		}
	}
});