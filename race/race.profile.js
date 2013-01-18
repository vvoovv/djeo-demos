var copyOnly = function(filename, mid) {
	return mid in {
		"djeo-demos/util": 1,
		"djeo-demos/race/resources/track": 1
	}
};

var miniExclude = function(filename, mid) {
	return mid!="djeo-demos/util" && !/djeo-demos\/race/.test(filename)
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
		"dojo-firebug": 0,
		"djeo-built": 1
	},
	layers: {
		"dojo/dojo": {
			include: [
				"dojo/dojo",
				"dojo/domReady",
				
				"djeo/Map",
				// djeo/Engine is used by all engines
				"djeo/Engine",
				"djeo/control/Navigation",
				"djeo/control/Highlight",
				"djeo/Model",
				"djeo-demos/race/RaceServer",
				"djeo-demos/race/RaceClient"
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
				"djeo/djeo/WebTiles",
				// seems to be loaded in runtime by gfx
				"djeo/dojox/gfx/path",
				// basic gfx renderers
				"djeo/dojox/gfx/svg",
				"djeo/dojox/gfx/vml"
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
				"djeo-ymaps/Navigation",
				"djeo-ymaps/WebTiles",
				"djeo/WebTiles"
			]
		},
		"djeo-ge/ge": {
			include: [
				"djeo-ge/Engine",
				"djeo-ge/Placemark",
				"djeo-ge/Navigation",
				"djeo-ge/Model"
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
				"dojo/i18n",
				"dojo/text",
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