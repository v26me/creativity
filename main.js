$(function() {			
	var net = initGraph(5);
	Vizard.init();

	Graph.build(net);	
	Vizard.drawGraph(Graph.convertForViz(Graph.nodes, Graph.links), Graph.figures);	
	return;

	var clusters;
	var game;
	var figure;
	var selections = [];
	clusters = getClusters(30, 60); //112	

	var s = clusters[0][0]; var e = clusters[0][1];
	var figures = [];
	var count = 0;
	for (var i = s; i <= e; i++) {
		Vizard.drawFig(net.figures[data[60][i]['code']], 60*(count % 15) + 20, 20 + Math.floor(count/15) *60, count, (data[60][i]['selection'] == ' ')? 0 : 1);
		count++;
	}

	//console.log(figures);
	



	//console.log(clusters);
	return;





	var game, figure;
	var selections = [];
	var index = 0;
	var segm = [];

	var stage = 0;

	for (var i in segments[30]) {

		for (var j in segments[30][i]) {
			segm[segments[30][i][j]] = stage;
		}
		stage = 1 - stage;
	}

	console.log(segm);

	sel_num = 1;

	for (var i in data) {
		game = data[i];
		if (game.length == 112) {

		}

		selections[i] = [];
		for (var j in game) {
			figure = game[j];
			if (!(figure.selection == ' ')) {
				selections[i].push(figure['selection']);
			}
		}
	}

	for (var i in data) {
		console.log(data[i].length + ' | ' + selections[i].length);
	}

	return;

	

	Graph.build(new_level);		

	var games = [];
	for (var i in data) {
		games.push(data[i].length);
	}

	var pl = Graph.subsub(data);


	var links = pl.links;
	var numers = [];
	var count = 1;
	var res = "";
	for (var i in links) {
		for (var j in links[i]) {
			if (!numers[i]) {
				numers[i] = count++;
			}
			if (!numers[j]) {
				numers[j] = count++;
			}


			res += numers[i] + ' ' + numers[j] + "\n";
		}
	}
	console.log(res);return;

	compute_triad(pl);
	var sub = Graph.subExt(data);
	var ran;
	for (var i = 0; i < 10; i++) {
	 	ran = Graph.randomSubExt(sub, games);
	 	compute_triad(ran);
	}	
	return;



	return;
	
	var count = 0;
	var game = data[4];
	var times = [];
	var stages = [];
	var stage = 0;
	var prev_time = 0;
	Vizard.init();
	var figure;
	for (var i = 0; i < game.length; i++) {
		times.push(M.round(game[i]['time'], 3));		
		if (!(game[i].selection == ' ')) {
			count++;
			//console.log(game[i]['code']);
			figure = new_level.figures[game[i]['code']];
			//console.log(figure);
			Vizard.drawFig(figure, 60*(count % 15) + 20, 20 + Math.floor(count/15) *60, count, stage);
			console.log(game[i]['time'] - prev_time);
			prev_time = game[i]['time'];
		}
		if (count == 1 || count == 67 || count == 93 || count == 130) {
			//stage = 1;
		} 
		if (count == 2 || count == 68 || count == 94 || count == 131) {
			stage = 0;
		}
		stages.push(stage);
	}

	//console.log(times.toString());
	//console.log(stages.toString());
	return;

/*	var game, figure;
	var selections = [];
	var index = 0;
	for (var i in data) {
		game = data[i];
		selections[index] = [];
		for (var j in game) {
			figure = game[j];
			if (!(figure.selection == ' ')) {
				selections[index].push(figure['selection']);
			}
		}
		index++;
	}*/

	//console.log(selections[13].toString());
	//console.log(selections[12].length);
	//console.log(selections[13].length);
	//console.log(selections[14].length);
	
	

	var curr_diff;
	var result = [];

	/**/

	for (var i in selections) {		
		result[i] = [];
		for (var j in selections[i]) {	
			curr_diff = selections[i][j] * 1;
			if (selections[i][j-1]) {
				curr_diff = curr_diff - selections[i][j-1];
			}			
			result[i][j] = M.round(curr_diff, 3);
		}
	}
	console.log(result[13].toString());
	//  2
    //68
    //94
   //131
	return;

	/*/
	var ind = 0;
	for (var i in selections) {		
		
		for (var j in selections[i]) {	
			curr_diff = selections[i][j] * 1;
			if (selections[i][j-1]) {
				curr_diff = curr_diff - selections[i][j-1];
			}			
			if (M.round(curr_diff, 3) > 0) {
				result[ind++] = M.round(curr_diff, 3);
			}
		}
	}
	/**/
	var s = '';
	var t = [5,7,13,14,21,26,27,29,30,32,34,36,38,39,40,41,43,56,59,60,61,73,75,81,94,95,99];
	for (i in t) {
		s +='display ' + t[i] + ';em(x' + t[i] + ');';
	}
	console.log(s);
	/*
	var s = '';
	for (var i = 0; i<result.length; i++) {
		s += 'x' + i + ' = [' + result[i].toString() + '];';
	}
	console.log(s);*/
	return;

	

	Graph.build(new_level);		

	var games = [];
	for (var i in data) {
		games.push(data[i].length);
	}

	var pl = Graph.subsub(data);
	compute_triad(pl);
	var sub = Graph.subExt(data);
	var ran;
	for (var i = 0; i < 10; i++) {
	 	ran = Graph.randomSubExt(sub, games);
	 	compute_triad(ran);
	}	
	return;


	var sub_graphs = {'Random': Graph.random(games), 'Players': Graph.subsub(data), 'Random Extended': Graph.randomExt(data, games)};
	var stat;
	for (var i in sub_graphs) {
		stat = Graph.stat(sub_graphs[i]);
		console.info(i + ' stat: ');
		console.log('Nodes: ' + stat.nodes);
		console.log('Edges: ' + stat.edges);
		console.log('Degrees: ' + stat.degrees.toString());
	}

	//Vizard.init();	
	//Vizard.drawGraph(Graph.convertForViz(sub_graph.nodes, sub_graph.links), Graph.figures);	
	
});

function drawLevel(paper, figures, y_start) {
	var grids_in_row = 16;
	var grid_step = 70;
	var i = 0;
	for (k in figures) {				
		grid = new Grid(paper, {x: 10 + (i % grids_in_row) * grid_step, y: y_start + Math.floor(i/grids_in_row) * grid_step, size: 5, pad: 0});
		grid.draw(figures[k]);
		i++;
	}	
	return y_start + (Math.floor(i/grids_in_row) + 1) * grid_step + 20;
}

function generateNewLevel(figures) {
	var parent = null;
	var parent_nodes = [];
	var new_figure = null, new_fig = null;
	var new_level = [];
	var new_pos = [{x: -1, y: 0}, {x: 1, y: 0}, {x: 0, y: -1}, {x: 0, y: 1}];
	var parents = [];
	var children = [];
	
	for (i in figures) {
		parent = figures[i];
		parent_nodes = parent.getNodes();

		for (var j = 0; j < parent_nodes.length; j++) {
			for (var k = 0; k < new_pos.length; k++) {
				new_fig = parent.addNode([parent_nodes[j][0] + new_pos[k].x, parent_nodes[j][1] + new_pos[k].y]);
				if (new_fig) {
					new_figure = new Figure(new_fig);					
					if (!new_level[new_figure.hash]) {
						new_level[new_figure.hash] = new_figure;						
					}
					if (!parents[new_figure.hash]) {
						parents[new_figure.hash] = [];
					}
					if (!children[parent.hash]) {
						children[parent.hash] = [];
					}
					parents[new_figure.hash][parent.hash] = 1;
					children[parent.hash][new_figure.hash] = 1;
				}
			}			
		}
	}
	
	return {figures: new_level, parents: parents, children: children};
}

function Figure(nodes) {	
	this.nodes = nodes;	
	this.normalize();
	this.generateHash();
}

Figure.prototype.generateHash = function() {
	var hash = [];
	var nodes = this.nodes;
	var y_pos, x_pos;
	for (var i = 0; i < nodes.length; i++) {
		x_pos = nodes[i][0] - this.edges.left;
		y_pos = nodes[i][1] - this.edges.top;
		if (!hash[y_pos]) hash[y_pos] = 0;
		hash[y_pos] += Math.pow(2, 9-x_pos);
	}
	this.coded = hash;
	this.hash = hash.toString();
}

Figure.prototype.normalize = function() {
	var nodes = this.nodes;
	var edges = {top:12, bottom:0, left:12, right:0};
	for (var i = 0; i < nodes.length; i++) {
		if (nodes[i][0] < edges.left) edges.left = nodes[i][0];
		if (nodes[i][0] > edges.right) edges.right = nodes[i][0];
		if (nodes[i][1] < edges.top) edges.top = nodes[i][1];
		if (nodes[i][1] > edges.bottom) edges.bottom = nodes[i][1];
	}
	
	var x_cor = edges.left - 5 + Math.floor((edges.right - edges.left) / 2);
	var y_cor = edges.top - 5 + Math.floor((edges.bottom - edges.top) / 2);
	edges.left -= x_cor; edges.right -= x_cor;
	edges.top -= y_cor; edges.bottom -= y_cor;
	this.edges = edges;

	for (var i = 0; i < nodes.length; i++) {
		nodes[i][0] = nodes[i][0] - x_cor;
		nodes[i][1] = nodes[i][1] - y_cor;
	}
}

Figure.prototype.getNodes = function() {
	return this.nodes;
}

Figure.prototype.addNode = function(node) {
	var x = node[0] - this.edges.left;
	var y = node[1] - this.edges.top;
	if (this.coded[y] && x >= 0 && (this.coded[y] & Math.pow(2, 9-x))) {
		return false;
	}	
	var result = deepClone(this.nodes);
	result.push(node);
	return result;
}

function deepClone(a) {
	var result = [];
	for (var i = 0; i < a.length; i++) {
		result.push(a[i].slice(0));
	}
	return result;
}

function randint(n) {
	return Math.floor((Math.random()*n));
}

function selection_analysis(data) {

	var figures = {};
	var fig;
	for (var game in data) {
		for (var figure in data[game]) {
			fig = data[game][figure];
			if (!figures[fig.code]) figures[fig.code] = [0, 0];
			figures[fig.code][0]++;
			if (!(fig.selection == ' ')) {
				figures[fig.code][1]++;
			}
		}
	}

	/*
	var rated_ratio = [], unrated_ratio = [];
	for (var i in figures) {
		if (rated[i] && figures[i][0] > 2) {
			rated_ratio.push(figures[i][1]/figures[i][0]);
		}
		else if(figures[i][1] > 0 && figures[i][0] > 2) {
			unrated_ratio.push(figures[i][1]/figures[i][0]);
		}
	}

	console.log(rated_ratio.toString());
	console.log(unrated_ratio.toString());
	*/


	
	var trav = [], sel = [], ratio = [];
	for (var i in figures) {
		trav.push(figures[i][0]);
		sel.push(figures[i][1]);
		//if (figures[i][0] > 10 && figures[i][1] > 0) {
			ratio.push(figures[i][1]/figures[i][0]);
		//}
	}

	console.log(trav.toString());
	//console.log(sel.toString());
	console.log(ratio.toString());
}

function compute_triad(graph) {
	var nodes = graph.nodes;
	var links = graph.links;
	var all_links = {};

	for (var i in links) {
		for (var j in links[i]) {
			if (!all_links[j]) all_links[j] = {};
			if (!all_links[i]) all_links[i] = {};
			all_links[i][j] = 1;
			all_links[j][i] = 1;
		}
	}
	


	var result = {};
	var cur = [];

	for (var i in graph.nodes) {
		for (var j in all_links[i]) {
			for (var k in all_links[i]) {
				if (i != j && j!=k && i!=k) {
					cur = [0,0,0];
					cur[0] += ((links[i] && links[i][j])? 1 : 0) + ((links[j] && links[j][i])? 2 : 0);
					cur[1] += ((links[j] && links[j][k])? 1 : 0) + ((links[k] && links[k][j])? 2 : 0);
					cur[2] += ((links[k] && links[k][i])? 1 : 0) + ((links[i] && links[i][k])? 2 : 0);
					if (!result[cur.toString()]) result[cur.toString()] = 0;
					result[cur.toString()]++;
				}
			}
		}
	}

	var final_res = [];
	final_res = [
	  result['1,0,2'] / 2, 
	  result['2,0,1'] / 2,
	  result['1,0,1'], //result['2,0,2']
	  result['2,0,3'], //result['3,0,1']
	  result['1,0,3'], //result['3,0,2']
	  result['3,0,3'] / 2,
	  result['1,1,2'], //result['1,2,1'], result['1,2,2'] result['2,1,1'] result['2,1,2'] result['2,2,1']
	  result['1,1,1'] / 3, //result['2,2,2']
	  result['1,3,2'] / 2, //result['2,1,3'] result['3,2,1']
	  result['1,2,3'] / 2, //result['2,3,1'] result['3,1,2']
	  result['1,1,3'], //result['1,3,1'] result['2,2,3'] result['2,3,2'] result['3,1,1'] result['3,2,2']
 	  result['1,3,3'], //result['2,3,3'] result['3,1,3'] result['3,2,3'] result['3,3,1'] result['3,3,2']
	  result['3,3,3'] / 6
	]
	console.log(final_res);
}

/*
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
*/
M = {
	round: function(value, precision) {
		var multi = Math.pow(10, precision);
		return Math.round(value * multi) / multi;
	}
}

function computeTSP(links) {
	var nodes = [],connections = [];

	for (var i in links) {
		nodes[i] = 1;
		for (var j in links[i]) {
			nodes[j] = 1;
			if (!connections[i]) connections[i] = [];
			if (!connections[j]) connections[j] = [];
			connections[i][j] = 1;
			connections[j][i] = 1;
		}
	}

	var result = {};
	var cur = [];

	for (var i in nodes) {
		for (var j in connections[i]) {
			for (var k in connections[i]) {				
				if (i != j && j!=k && i!=k) {					
					cur = [0,0,0];
					cur[0] += ((links[i] && links[i][j])? 1 : 0) + ((links[j] && links[j][i])? 2 : 0);
					cur[1] += ((links[j] && links[j][k])? 1 : 0) + ((links[k] && links[k][j])? 2 : 0);
					cur[2] += ((links[k] && links[k][i])? 1 : 0) + ((links[i] && links[i][k])? 2 : 0);
					if (!result[cur.toString()]) result[cur.toString()] = 0;
					console.log(i + ' ' + j + ' ' + k + ' -> ' + cur.toString());
					result[cur.toString()]++;
				}
			}
		}
	}

	var final_res = [];
	final_res = [
	  result['1,0,2'] / 2, 
	  result['2,0,1'] / 2,
	  result['1,0,1'], //result['2,0,2']
	  result['2,0,3'], //result['3,0,1']
	  result['1,0,3'], //result['3,0,2']
	  result['3,0,3'] / 2,
	  result['1,1,2'], //result['1,2,1'], result['1,2,2'] result['2,1,1'] result['2,1,2'] result['2,2,1']
	  result['1,1,1'] / 3, //result['2,2,2']
	  result['1,3,2'] / 2, //result['2,1,3'] result['3,2,1']
	  result['1,2,3'] / 2, //result['2,3,1'] result['3,1,2']
	  result['1,1,3'], //result['1,3,1'] result['2,2,3'] result['2,3,2'] result['3,1,1'] result['3,2,2']
 	  result['1,3,3'], //result['2,3,3'] result['3,1,3'] result['3,2,3'] result['3,3,1'] result['3,3,2']
	  result['3,3,3'] / 6
	]
	console.log(final_res);	
}

function getClusters(segm_num, data_num) {
	var game, cluster, clusters = [], selections = [], index = 1;

	game = segm_data[segm_num];
	
	for (var i in game) {
		cluster = game[i];
		if (cluster.length > 1) {
			clusters.push([cluster[0], cluster[cluster.length-1]]);
		}
	}

	game = data[data_num];
	
	for (var j in game) {
		figure = game[j];
		if (!(figure.selection == ' ')) {
			selections[index++] = j;
		}
	}	

	var new_clusters = [];
	var tr = 8;
	for (var i in clusters) {
		if (selections[clusters[i][1]] - selections[clusters[i][0]] > tr) {
			new_clusters.push([selections[clusters[i][0]],selections[clusters[i][1]]]);
		}		
	}

	return new_clusters;
}

function initGraph(max_level) {
	var figures = [];
	if (!max_level) max_level = 10;	
	var new_level = [];
	figures[1] = {1: new Figure([[0,0]])};

	for (var i = 2; i <= max_level; i++) {
		new_level = generateNewLevel(figures[i-1]);		
		figures[i] = new_level.figures;		
	}

	return new_level;
}