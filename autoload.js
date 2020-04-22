/**
* Init CSRF protection to AJAX
*/
setHeader($('meta[name="csrf-token"]').attr('content'));

/**
* Set Ajax header
* @param data
*/
function setHeader(data){
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': data
		}
	});
}

/**
* Get refresh CSRF token
* @param callback
*/
function refreshToken(callback){
	$.get('/api/refresh-csrf').done(function(data){
		setHeader(data);
		callback(true);
	});
}

/**
* Refresh CSRF every 50 minutes
*/
setInterval(function(){
	refreshToken(function(){
		console.log("Token refreshed!");
	});
}, 3000000);
