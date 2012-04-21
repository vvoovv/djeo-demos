define([], function(){

var nameOrId = function(feature) {
	return feature.name ? ": " + feature.name : "<br>OpenStreetMap id: "+feature.id;
};

return [
{
	fillOpacity: 0.8,
	strokeOpacity: 1
},
{
	id: "building",
	filter: "this.building=='yes' || this.building=='government'",
	fill: "#bca9a9",
	tooltip: function(feature) {
		var content = "Building",
			name = feature.name,
			street = feature["addr:street"],
			housenumber = feature["addr:housenumber"]
		;
		if (name) {
			content += ": " + name;
		}
		if (street && housenumber) {
			content += "<br>" + street + ", " + housenumber;
		}
		if (!(name||(street && housenumber))) {
			content += "<br>OpenStreetMap id: "+feature.id;
		}
		return content;
	}
},
{
	id: "primary",
	filter: "this.highway=='primary'",
	stroke: "#8d4346",
	strokeWidth: 7.5,
	guiIcon: "gui/primary.png"
},
{
	id: "secondary",
	filter: "this.highway=='secondary'",
	stroke: "#a37b48",
	strokeWidth: 8.5,
	guiIcon: "gui/secondary.png"
},
{
	id: "tertiary",
	filter: "this.highway=='tertiary'",
	stroke: "#bbb",
	strokeWidth: 6,
	guiIcon: "gui/tertiary.png"
},
{
	id: "residential_unclassified",
	filter: "this.highway=='residential' || this.highway=='unclassified'",
	stroke: "#999",
	strokeWidth: 4,
	guiIcon: "gui/residential.png"
},
{
	id: "footway",
	filter: "this.highway=='footway'",
	lines: [
		{
			stroke: "#fff",
			strokeWidth: 4
		},
		{
			stroke:"salmon",
			strokeWidth: 1.5
		}
	],
	guiIcon: "gui/footway.png"
},
{
	id: "water",
	filter: "this.natural=='lake' || this.natural=='water' || this.landuse=='reservoir' || this.waterway=='riverbank' || this.landuse=='water'",
	fill: "#b5d0d0",
	tooltip: function(feature) {
		return "Water object" + nameOrId(feature);
	}
},
{
	id: "railway",
	filter: "this.railway=='rail'",
	lines: [
		{
			stroke: "#999999",
			strokeWidth: 3
		},
		{
			stroke:"white",
			strokeWidth: 1
		}
	],
	guiIcon: "gui/railway.png"
},
{
	id: "park",
	filter: "this.leisure=='park' || this.leisure=='recreation_ground'",
	fill: "#b6fdb6",
	fillOpacity: 0.6,
	tooltip: function(feature) {
		return "Park" + nameOrId(feature);
	}
},
{
	id: "forest",
	filter: "this.landuse=='forest'",
	fill: "#8dc56c",
	tooltip: function(feature) {
		return "Forest" + nameOrId(feature);
	}
},
{
	id: "wood",
	filter: "this.natural=='wood' || this.landuse == 'wood'",
	fill: "#aed1a0",
	tooltip: function(feature) {
		return "Wood" + nameOrId(feature);
	}
},
{
	id: "restaurant",
	filter: "this.amenity=='restaurant'",
	size: [24, 24],
	img: "restaurant-24.png"
},
{
	id: "cafe",
	filter: "this.amenity=='cafe'",
	size: [24, 24],
	img: "cafe-24.png"
},
{
	id: "fast_food",
	filter: "this.amenity=='fast_food'",
	size: [24, 24],
	img: "fast-food-24.png"
},
{
	filter: "this.amenity=='school'",
	size: [24, 24],
	img: "school-24.png"
},
{
	id: "shop",
	filter: "this.shop",
	size: [24, 24],
	img: "shop-24.png"
},
{
	id: "hotel",
	filter: "this.tourism=='hotel'",
	size: [24, 24],
	img: "lodging-24.png"
},
{
	id: "bank",
	filter: "this.amenity=='bank'",
	size: [24, 24],
	img: "bank-24.png"
},
{
	id: "station",
	filter: "this.railway=='station'",
	size: [24, 24],
	img: "rail-above-24.png"
},
{
	id: "bus_stop",
	filter: "this.highway=='bus_stop'",
	size: [24, 24],
	img: "bus-24.png"
},
{
	id: "monument",
	filter: "this.historic=='monument'",
	size: [24, 24],
	img: "monument-24.png"
}
];

});