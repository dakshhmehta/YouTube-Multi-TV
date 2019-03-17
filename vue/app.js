window.app = new Vue({
	el: '#app',
	data: {
		page: {
			title: 'MultiTV Channel Window',
		},
		videos: [],
		panel: false,
	},
	created: function(){
		console.log('Created');

		this.retriveFromStorage();

		console.log(this.$el);
	},
	mounted: function(){
		console.log('Mounted');
		console.log(this.$el);
	},
	computed: {
		has_videos: function(){
			var c = 0;
			for(var i in this.videos){
				if(this.videos[i].display){
					c++;
				}
			}

			if(c > 0){
				return true;
			}

			return false;
		},
		screen_width: function(){
			return ((this.panel) ? 10 : 12);
		}
	},
	methods: {
		add: function(videoId){
			var inArray = false;

			for(var i in this.videos){
				if(videoId.trim() === this.videos[i].id){
					inArray = true;
					break;
				}
			}

			if(! inArray){
				this.videos.push({
					id: videoId,
					display: true,
				});

				this.save(this.videos);
			}
		},

		save: function(videos){
			this.videos = videos;

			window.localStorage.setItem('videos', JSON.stringify(this.videos));
		},

		retriveFromStorage: function(){
			console.log(this.videos);
			this.videos = JSON.parse(window.localStorage.getItem('videos'));

			if(this.videos == null){
				this.videos = [];
			}
		},
	}
})