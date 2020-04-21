/**
* Append automatically CSRF protection to $.POST
* @type {jQuery}
*/

var csrf_token = $('meta[name="csrf-token"]').attr('content');

$.ajaxPrefilter(function(options, originalOptions, jqXHR){
	if (options.type.toLowerCase() === "post") {
		// initialize `data` to empty string if it does not exist
		options.data = options.data || "";

		// add leading ampersand if `data` is non-empty
		options.data += options.data?"&":"";

		// add _token entry
		options.data += "_token=" + encodeURIComponent(csrf_token);
	}
});

/**
* Get refresh CSRF token
* @param callback
*/
function refreshToken(callback){
	$.get('/refresh-csrf').done(function(data){
		callback(true);
	});
}
