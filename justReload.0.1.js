function justReload(time){
		let assets = [],
			autoreload = true,
			t = time || 4000;

		function scan(file){
			if (!autoreload) return false;

			$.get(file.path, null, function(res){
				// console.log(file.path, res.length);
				if(!file.size){
					file.size = res.length;
				} 

				if (file.size == res.length){
					setTimeout(function(){
						scan(file);
					}, t)
				} else {
					location.reload();
				}
			}, 'text');
		}

		function start(){
			autoreload = true;
			// push css or js assets
			$('link, script').each(function(){
				const path = this.href || this.src;
				if(path.includes('google') || 
					path.includes('jquery') ||
					path.includes('font') 
				) return false;

				assets.push({path: path, size: null});
			});
			// push current view file (either html or dynamic)
			assets.push({path: location.href, size: null});


			assets.forEach(function(file){
				scan(file);
			});
			console.info('autoreload started with '+ t +'ms delay. make cool stuff!');
		}
		function stop(){
			autoreload = false;
			console.info('autoreload stopped.');
		}

		$(function(){
			start();
		});

		return {
			start: start,
			stop: stop,
		}
	}
