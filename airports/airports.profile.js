var copyOnly = function(filename, mid) {
	return mid in {
		"djeo-demos/util": 1,
		"djeo-demos/airports/data/airports": 1
	}
};

var miniExclude = function(filename, mid) {
	return mid!="djeo-demos/util" && !/djeo-demos\/airports/.test(filename)
}

var profile = {
	releaseDir: "../release",
	basePath: "..",
	action: "release",
	cssOptimize: "comments",
	mini: true,
	optimize: "closure",
	layerOptimize: "closure",
	stripConsole: "all",
	selectorEngine: "lite",
	staticHasFeatures: {
		"djeo-built": 1
	},
	layers: {
		"dojo/dojo": {
			include: [
				"dojo/dojo",
				"dojo/domReady",
				"dojo/parser",
				"dojo/aspect", // after
				"dijit/registry", // byId
				"dijit/layout/BorderContainer",
				"dijit/layout/ContentPane",
				"dgrid/Grid",
				
				"djeo-demos/airports/data/airports",
				
				"djeo/util/numeric",
				"djeo-jenks/main",
				"djeo/widget/Legend",
				
				"djeo/Map",
				// djeo/Engine is used by all engines
				"djeo/Engine",
				"djeo/control/Navigation",
				"djeo/control/Highlight",
				"djeo/control/Tooltip",
				"djeo/widget/Legend",
				
				"dojo/query",
				"djeo/tests/data/usa_features",
				
				// seems to be loaded in runtime by dgrid
				"xstyle/load-css",
				// seems to be loaded in runtime by gfx
				"djeo/dojox/gfx/path",
				// basic gfx renderers
				"djeo/dojox/gfx/svg",
				"djeo/dojox/gfx/canvasWithEvents",
				"djeo/dojox/gfx/vml"
			],
			customBase: true,
			boot: true
		},
		"djeo/native": {
			include: [
				"djeo/djeo/Engine",
				"djeo/djeo/Placemark",
				"djeo/djeo/Navigation",
				"djeo/WebTiles",
				"djeo/djeo/WebTiles"
			]
		},
		"djeo-gmaps/gmaps": {
			include: [
				"djeo-gmaps/Engine",
				"djeo-gmaps/Placemark",
				"djeo-gmaps/Navigation"
			]
		},
		"djeo-ymaps/ymaps": {
			include: [
				"djeo-ymaps/Engine",
				"djeo-ymaps/Placemark",
				"djeo-ymaps/Navigation"
			]
		},
		"djeo-ge/ge": {
			include: [
				"djeo-ge/Engine",
				"djeo-ge/Placemark",
				"djeo-ge/Navigation",
				"djeo-ge/Tooltip"
			]
		},
		"djeo-leaflet/leaflet": {
			include: [
				"djeo-leaflet/Engine",
				"djeo-leaflet/Placemark",
				"djeo-leaflet/Navigation",
				"djeo-leaflet/WebTiles",
				"djeo/WebTiles",
				// seems to be loaded in runtime
				"xstyle/load-css"
			]
		},
		"djeo-esri/esri": {
			include: [
				"dojo/main",
				"dojo/require",
				"djeo-esri/Engine",
				"djeo-esri/Placemark",
				"djeo-esri/Navigation",
				"djeo-esri/WebTiles",
				"djeo/WebTiles",
				// seems to be loaded in runtime by gfx
				"dojox/gfx/path",
				// basic gfx renderers
				"dojox/gfx/svg",
				"dojox/gfx/vml"
			]
		}
	},
	resourceTags: {
		copyOnly: function (filename, mid) {
			return copyOnly(filename, mid);
		},
		amd: function(filename, mid) {
			return !copyOnly(mid) && /\.js$/.test(filename);
		},
		miniExclude: function(filename, mid) {
			return miniExclude(filename, mid);
		}
	}
};