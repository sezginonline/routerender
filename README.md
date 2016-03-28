# routerender
Jquery Router Render

SPA (Single Page Application) with Jquery is easy with this plugin.

Add script to the webpage:
```html
<script src="jquery.routerender.js"></script>
```

Add some templates:
```html
<div id="test1"><p>{status}{post}</p><hr></div>
<div id="test2"><p>{status2}{post2}</p><hr></div>
```

Add some routes via addRoute('hash', 'ajaxMethod', 'ajaxUrl', 'resultUpdateDomSelector'):
```html
<script>
function addRoutes() {
	addRoute('#/page1', 'POST', 'http://localhost/myApp/page1.html', '#test1');
	addRoute('#/page2', 'POST', 'http://localhost/myApp/page2.html', '#test1');
	addRoute('#/page3', 'POST', 'http://localhost/myApp/page3.html', '#test1');
}
</script>
```

Ajax result example:
```json
[
	{
		"status": 100,
		"post": "hi"
	},
	{
		"status": 101,
		"post": "hi1"
	}
]
```

If you would like, render some components via render('resultUpdateDomSelector', 'dataObject'):
```html
<script>
render('#test2', {"status2":"test2","post2":"test2"});
</script>
```
