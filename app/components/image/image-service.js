function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);
	var photo = []

	this.getImage = function getImage(cb) {
		return $.get(apiUrl, function (res) {
			res = JSON.parse(res)
			photo = res.photo
			cb(photo)
			ready()
		})
	}
}
