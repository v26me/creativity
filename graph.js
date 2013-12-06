Graph = {
	init: function(graph_data) {		
		this.figures = graph_data.figures;
		this.nodes = graph_data.nodes;
		this.links = graph_data.links;	
	},

	build: function(graph_data) {
		var figures = graph_data.figures;
		var parents = graph_data.parents;
		var children = graph_data.children;
		var nodes = {};
		var links = {};

		for (var i in figures) {
			nodes[i] = 1;
			for (var pi in parents[i]) {
				for (var pc in children[pi]) {
					if (i != pc) {				
						if (!links[i]) {
							links[i] = {};
						}		
						links[i][pc] = 1;
					}
				}
			}
		}

		this.figures = figures;
		this.nodes = nodes;
		this.links = links;			
	},

	convertForViz: function(nodes, links) {
		var new_nodes = [];
		var new_links = [];
		var nums = [];
		var count = 0;
		for (var i in nodes) {
			new_nodes.push({'label': i});
			nums[i] = count;
			count++;
		}
		for (var i in links) {
			for (var j in links[i]) {
				new_links.push({source: nums[i], target: nums[j]});
			}			
		}

		return {'nodes': new_nodes, 'links': new_links}
	},

	randomCore: function(data, links) {
		var new_nodes = {};
		var new_links = {};
		var cur_node, prev_node = false;
		var cur_links = false;

		for (var game in data) {			
			prev_node = '1023';
			new_nodes[prev_node] = 1;
			for (var i = 0; i < data[game]; i++) {			
				cur_links = Object.keys(links[prev_node]);				
				cur_node = cur_links[randint(cur_links.length)];
				new_nodes[cur_node] = 1;
				
				if (!new_links[prev_node]) new_links[prev_node] = {};
				new_links[prev_node][cur_node] = 1;
				
				prev_node = cur_node;
			}
		}

		return {nodes: new_nodes, links: new_links}
	},

	random: function(data) {
		return this.randomCore(data, this.links);
	},

	randomExt: function(data, games) {
		var sub = this.sub(data);			
		return this.randomCore(games, sub.links);
	},

	randomSubExt: function(sub, games) {		
		return this.randomCore(games, sub.links);	
	},

	sub: function(data) {
		var new_nodes = {};
		var new_links = {};		

		for (var game in data) {
			gdata = data[game];
			for (var i in gdata) {
				new_nodes[gdata[i].code] = 1;
			}
		}

		for (var i in this.links) {
			if (new_nodes[i]) {
				new_links[i] = {};
				for (j in this.links[i]) {
					if (new_nodes[j]) {
						new_links[i][j] = 1;
					}
				}
			}
		}

		return {nodes: new_nodes, links: new_links}
	},

	subExt: function(data) {
		var new_nodes = {};
		var new_links = {}
		var cur_node, prev_node = false;

		for (var game in data) {
			gdata = data[game];
			prev_node = false;
			for (var i in gdata) {			
				cur_node = gdata[i].code;
				new_nodes[cur_node] = 1;
				if (prev_node) {
					if (!new_links[prev_node]) new_links[prev_node] = {};
					if (!new_links[cur_node]) new_links[cur_node] = {};
					new_links[prev_node][cur_node] = 1;
					new_links[cur_node][prev_node] = 1;
				}
				prev_node = cur_node;
			}
		}

		return {nodes: new_nodes, links: new_links}
	},

	//Build subgraph for selected 
	supersub: function(data) {

	},


	//Build subgraph for all games in data
	subsub: function(data) {
		var new_nodes = {};
		var new_links = {}
		var cur_node, prev_node = false;

		for (var game in data) {
			gdata = data[game];
			prev_node = false;
			for (var i in gdata) {			
				cur_node = gdata[i].code;
				new_nodes[cur_node] = 1;
				if (prev_node) {
					if (!new_links[prev_node]) new_links[prev_node] = {};
					new_links[prev_node][cur_node] = 1;
				}
				prev_node = cur_node;
			}
		}

		return {nodes: new_nodes, links: new_links}
	},

	stat: function(data) {
		var conv = Graph.convertForViz(data.nodes, data.links);
	
		var degree = [];
		for (var i = 0; i <= 76; i++) {
			degree[i] = 0;
		}
		var num;
		for (var i in data.links) {
			num = Object.keys(data.links[i]).length;			
			degree[num]++;
 		}
 		
		return {nodes: conv.nodes.length, edges: conv.links.length, degrees: degree}
	}
}