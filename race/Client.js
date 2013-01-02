define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect"
], function(declare, lang, array, aspect){
	
var id=0;
	
function getTime() {return new Date().getTime()};
	
return declare(null, {
    running: true,
    pollInterval: 500,
    server: null,
    intervalHandle: null,
	lastTimestamp: 0,
    
    constructor: function(kwArgs) {
        lang.mixin(this, kwArgs);
		
		aspect.after(this.map, "destroy", lang.hitch(this, function(){
			this.stop();
			delete this.map, this.server;
		}));
		
		id++;
		this.id = id;

		if (this.running) {
			this.start();
		}
    },
	
	start: function() {
		this.intervalHandle = setTimeout(lang.hitch(this, this.poll), this.pollInterval);
		this.running = true;
	},
	
	stop: function() {
		this.running = false;
	},
	
	poll: function() {
		if (this.running) {
			if (this.map) this.map.executeBatch(lang.hitch(this, this._poll));
			else this._poll();
		}
	},
	
	_poll: function() {
		this._pollTime = getTime();
		
        this.server.poll({
			lastTimestamp: this.lastTimestamp,
			load: lang.hitch(this, function(packets){
				var numPackets = packets.length;
				if (numPackets) {
					array.forEach(packets, function(packet){
						array.forEach(packet.data, function(dataItem) {
							this.process(dataItem);
						}, this);
					}, this);
					this.lastTimestamp = packets[numPackets-1].timestamp;
				}
				this._schedulePoll();
			})
		});
	},
	
	_schedulePoll: function() {
		var executionTime = getTime() - this._pollTime;
		setTimeout(lang.hitch(this, this.poll), executionTime >= this.pollInterval ? 50 : this.pollInterval-executionTime);
	},
	
	process: function(dataItem) {
		
	}
});
	
});