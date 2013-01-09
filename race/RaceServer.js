define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./util"
], function(declare, lang, u) {
	
function getTime() {return new Date().getTime()};

return declare(null, {
	
	timestamp: 0,

	constructor: function(kwArgs) {
		lang.mixin(this, kwArgs);
		this.carPosition = this.trackCoords[0];
		this.trackCoordIndex = 0;
	},

	poll: function(kwArgs) {
		var data = [{data:[]}];
		if (this.timestamp == 0) {
			this.timestamp = getTime();
		}
		else {
			var trackCoordIndex = this.trackCoordIndex,
				carPosition = this.carPosition
			;
			for (var i=0; i<this.numCars; i++) {
				var timestamp = getTime(),
					result = u.movePointAlongTrack(
						carPosition,
						i ? this.carDistance : this.speed * (timestamp - this.timestamp)/1000.,
						this.trackCoords,
						trackCoordIndex,
						!i
					)
				;
				this.timestamp = timestamp;
				carPosition = result[0];
				trackCoordIndex = result[1];
				data[0].data.push({
					id: i+1,
					coords: carPosition,
					heading: result[2]
				});
				if (i == 0) {
					this.carPosition = carPosition;
					this.trackCoordIndex = trackCoordIndex;
				}
			}
		}
		kwArgs.load(data);
    },
	
	getInitialCarPositions: function() {
		return u.getInitialPositions(this.trackCoords, this.numCars, this.carDistance);
	}
});
	
});