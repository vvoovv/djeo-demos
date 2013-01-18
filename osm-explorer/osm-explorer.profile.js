var copyOnly = function(mid) {
	return mid in {
		"djeo-demos/util": 1
	}
};

var profile = {
	releaseDir: "../../release",
	basePath: "..",
	action: "release",
	cssOptimize: "comments",
	mini: true,
	optimize: "closure",
	layerOptimize: "closure",
	stripConsole: "all",
	selectorEngine: "acme",
	staticHasFeatures: {
		"dojo-firebug": 0,
		"djeo-built": 1
	},
	layers: {
		"dojo/dojo": {
			include: [
				"dojo/dojo",
				"dojo/domReady",
				"dojo/_base/kernel", // locale
				"dojo/dom-construct", // place
				"dojo/aspect", // after
				"dijit/layout/BorderContainer",
				"dijit/layout/ContentPane",
				
				"djeo/Map",
				// djeo/Engine is used by all engines
				"djeo/Engine",
				"djeo/control/Navigation",
				"djeo/control/Highlight",
				"djeo/control/Tooltip",

				"djeo-ui/Tree",
				"djeo/projection",
				"djeo/parser/osm",
	
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
				// seems to be loaded in runtime
				"xstyle/load-css"
			]
		},
		"djeo-esri/esri": {
			include: [
				"djeo-esri/Engine",
				"djeo-esri/Placemark",
				"djeo-esri/Navigation",
				"djeo-esri/WebTiles"
			]
		}
	},
	resourceTags: {
		copyOnly: function (filename, mid) {
			return copyOnly(mid);
		},
		amd: function(filename, mid) {
			return !copyOnly(mid) && /\.js$/.test(filename);
		}
	}
};