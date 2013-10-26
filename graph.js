var svg = null;

$(function() {		
	//TODO:: Расшарить с братом
	//TODO:: Опитимизировать код
	var figures = [];
	var max_level = 6;
	
	var next_y = 10;
	var new_level = [];

	figures[1] = {1: new Figure([[0,0]])};

	for (var i = 2; i <= max_level; i++) {
		new_level = generateNewLevel(figures[i-1]);		
		figures[i] = new_level.figures;		
	}	

	var graph = buildGraph(new_level);
	
	var w = 800, h = 600;
	svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

	drawGraph(graph);
});

function buildGraph(graph) {
	var figures = graph.figures;
	var parents = graph.parents;
	var children = graph.children;
	var nodes = [];
	var links = [];

	for (var i in figures) {
		nodes.push({label:i});
		for (var pi in parents[i]) {
			for (var pc in children[pi]) {
				if (i != pc) {
					links.push({source: figures[i].num, target: figures[pc].num})
				}
			}
		}
	}

	return {figures: figures, nodes: nodes, links: links};
}

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
	var num = 0;

	for (i in figures) {
		parent = figures[i];
		parent_nodes = parent.getNodes();

		for (var j = 0; j < parent_nodes.length; j++) {
			for (var k = 0; k < new_pos.length; k++) {
				new_fig = parent.addNode([parent_nodes[j][0] + new_pos[k].x, parent_nodes[j][1] + new_pos[k].y]);
				if (new_fig) {
					new_figure = new Figure(new_fig, num);					
					if (!new_level[new_figure.hash]) {
						new_level[new_figure.hash] = new_figure;
						num++;
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

function Figure(nodes, num) {
	this.num = (num)? num : 0;
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

function Grid(grid) {	
	this.grid = grid;
}

Grid.prototype.draw = function(figure, x, y) {
	this.drawGrid();
	var nodes = figure.getNodes();
	var g = this.grid;
	var x = x; var y = y;
	var r = 30;
	svg.selectAll('circle.fig').data([{x: x + r, y: y + r}]).
	enter().append('circle').
	attr('class', 'fig').
	attr('cx', function(d){return d.x}).
	attr('cy', function(d){return d.y}).
	attr('fill', '#FFF').
	attr('stroke', '#555').
	attr('r', r);

	svg.selectAll('rect.fig').data(nodes).enter().append('rect')
		.attr('x', function(d){return x + g.x + d[0] * g.size + g.pad + 1;})
		.attr('y', function(d){return y + g.y + d[1] * g.size + g.pad + 1;})
		.attr('width', g.size - 2 * g.pad - 1)
		.attr('height', g.size - 2 * g.pad - 1).attr('fill', "#33F").attr('class', 'fig');

	
	
}

Grid.prototype.clear = function() {
	d3.selectAll('.fig').remove();
	/*if (this.figure) {
		console.log(this.figure);
		this.figure.exit().remove();
	*/
}

Grid.prototype.drawGrid = function() {
	var g = this.grid;
	//this.paper.circle(g.x + g.size*6,g.y+g.size*6,g.size*6).attr({stroke: "#AAA"});
	//this.paper.path( ["M", g.x, g.y, "L", g.x + g.size * 12, g.y ] ).attr({stroke: "#AAA", "stroke-width": 1});
	//this.paper.path( ["M", g.x, g.y + 12 * g.size, "L", g.x+ g.size * 12, g.y + 12 * g.size ] ).attr({stroke: "#AAA", "stroke-width": 1});
	//this.paper.path( ["M", g.x + g.size * 12, g.y, "L", g.x + g.size * 12, g.y + 12 * g.size ] ).attr({stroke: "#AAA", "stroke-width": 1});
	//this.paper.path( ["M", g.x , g.y, "L", g.x, g.y + 12 * g.size ] ).attr({stroke: "#AAA", "stroke-width": 1});
	//for (var i = 0; i < 13; i++) {
	//	this.paper.path( ["M", g.x + g.size * i, g.y, "L", g.x + g.size * i, g.y + 12 * g.size ] ).attr({stroke: "#AAA", "stroke-width": 1});
	//	this.paper.path( ["M", g.x, g.y + i * g.size, "L", g.x + g.size * 12, g.y + i * g.size ] ).attr({stroke: "#AAA", "stroke-width": 1});
	//}	
}

function deepClone(a) {
	var result = [];
	for (var i = 0; i < a.length; i++) {
		result.push(a[i].slice(0));
	}
	return result;
}

function drawGraph(graph) {
	var figures = graph.figures;
	var nodes = graph.nodes;
	var links = graph.links;

	var force = d3.layout.force().size([600, 600]).nodes(nodes).links(links).charge(-600);
	force.start();

	for (var i=0; i<100;i++) {
		force.tick();
	}

	var link = svg.selectAll(".link").data(links).enter().append("line").attr("class", "link")
	.style("stroke", "#CCC").attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    
    var grid = new Grid({x: 0, y: 0, size: 6, pad: 0});

	var node = svg.selectAll(".node").data(nodes).enter().append("circle").attr("class", "node")
			   .attr("r", 5).style("fill", "#33F")
	           .attr("cx", function(d) { return d.x; })
               .attr("cy", function(d) { return d.y; })
               .on("mouseover", function(d){
	               	grid.clear();
	               	grid.draw(figures[d.label], d.x, d.y);
               });               
}