window.app = new Vue({
	el: '#app',
	store,
	data: {
		panel: true,
	},
	computed: {
		has_videos: function(){
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
		screen_width: function(){
			return ((this.panel) ? 9 : 12);
		}
	},
})