define([
	"dojo/_base/declare",
	"./Client"
], function(declare, Client){
	
return declare([Client], {
	
	process: function(response) {
		var feature = this.map.$(response.id);
		feature.set("coords", response.coords);
		if (response.heading != undefined) {
			feature.set("orientation", response.heading);
		}
	}
});
	
});