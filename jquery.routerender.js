function addRoute(hash, method, endpoint, id) {
	if (location.hash === hash) {
		$.ajax({
			url: endpoint,
			type: method,
			success: function(data) {
				render(id, data);
			}
		});
	}
}
function renderObject(template, data) {
	return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
		var keys = key.split(".");
		var v = data[keys.shift()];
		for (var i = 0; i < keys.length; i++) {
			v = v[keys[i]];
		}
		return (typeof v !== "undefined" && v !== null) ? v : "";
	});
}
function renderArray(template, data) {
	var html = '';
	for (var i = 0; i < data.length; i++) {
		html += renderObject(template, data[i]);
	}
	return html;
}
function renderTemplate(template, data) {
	if (data.length > 1) {
		return renderArray(template, data);
	}
	return renderObject(template, data);
}
function render(id, data) {
	if (typeof $(id).data('html') === 'undefined') {
		$(id).data('html', $(id).html());
	}
	$(id).html(renderTemplate($(id).data("html"), data));
}
$(window).on('load hashchange', function() {
	addRoutes();	
});
$.ajaxSetup({
	dataType: "json"
});
