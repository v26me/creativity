$(function() {	
	var figures = [];
	var max_level = 5;
	
	var paper = new Raphael(0,0,1200,700);
	var next_y = 10;

	figures[1] = {1: new Figure([[0,0]])};

	for (var i = 2; i <= max_level; i++) {
		figures[i] = generateNewLevel(figures[i-1]);
		next_y = drawLevel(paper, figures[i], next_y);
	}
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
						//$('#progress').html(counter++);
						//console.log(counter++);
					}
				}
			}			
		}
	}
	
	return new_level;
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
		hash[y_pos] += Math.pow(2, x_pos);
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
	if (this.coded[y] && x >= 0 && (this.coded[y] & Math.pow(2, x))) {
		return false;
	}	
	var result = deepClone(this.nodes);
	result.push(node);
	return result;
}

function Grid(paper, grid) {
	this.paper = paper;
	this.grid = grid;
}

Grid.prototype.draw = function(figure) {
	this.drawGrid();
	var nodes = figure.getNodes();
	for (var i = 0; i < nodes.length; i++) {
		this.drawNode(nodes[i]);
	}
}

Grid.prototype.drawGrid = function() {
	var g = this.grid;
	for (var i = 0; i < 13; i++) {
		this.paper.path( ["M", g.x + g.size * i, g.y, "L", g.x + g.size * i, g.y + 12 * g.size ] ).attr({stroke: "#AAA", "stroke-width": 1});
		this.paper.path( ["M", g.x, g.y + i * g.size, "L", g.x + g.size * 12, g.y + i * g.size ] ).attr({stroke: "#AAA", "stroke-width": 1});
	}	
}

Grid.prototype.drawNode = function(node) {
	var g = this.grid;
	var x = node[0];
	var y = node[1];
	this.paper.rect(g.x + x * g.size + g.pad + 1, g.y + y * g.size + g.pad + 1, g.size - 2 * g.pad - 1, g.size - 2 * g.pad - 1).attr({fill: "#0000FF", "stroke-width": 0});
}

function deepClone(a) {
	var result = [];
	for (var i = 0; i < a.length; i++) {
		result.push(a[i].slice(0));
	}
	return result;
}