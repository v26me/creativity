Vizard = {
	init: function() {
		var w = 1200, h = 600;
		this.svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
	},

	drawGraph: function(graph, figures) {		
		var nodes = graph.nodes;
		var links = graph.links;
		var figures = figures;

		var force = d3.layout.force().size([600, 600]).nodes(nodes).links(links).charge(-2400);
		force.start();

		for (var i=0; i<100;i++) {
			force.tick();
		}

		var link = this.svg.selectAll(".link").data(links).enter().append("line").attr("class", "link")
		    .style("stroke", "#CCC").attr("x1", function(d) { return d.source.x; })
	        .attr("y1", function(d) { return d.source.y; })
	        .attr("x2", function(d) { return d.target.x; })
	        .attr("y2", function(d) { return d.target.y; });
        
		var node = this.svg.selectAll(".node").data(nodes).enter().append("circle").attr("class", "node")
			   .attr("r", 5).style("fill", "#33F")
	           .attr("cx", function(d) { return d.x; })
               .attr("cy", function(d) { return d.y; })
               .on("mouseover", function(d){
               		Vizard.drawFigure(figures[d.label], d.x, d.y);
               });     
	},

	drawFigure: function(figure, x, y, m) {
		d3.selectAll('.fig').remove();

		var nodes = figure.getNodes();
		var g = {x: 0, y: 0, size: 6, pad: 0};
		var x = x; var y = y;
		var r = 40;
		this.svg.selectAll('circle.fig').data([{x: x + r, y: y + r}]).
				enter().append('circle').
				attr('class', 'fig').
				attr('cx', function(d){return d.x}).
				attr('cy', function(d){return d.y}).
				attr('fill', '#FFF').
				attr('stroke', '#555').
				attr('r', r);

		this.svg.selectAll('rect.fig').data(nodes).enter().append('rect')
				.attr('x', function(d){return x + g.x + d[0] * g.size + g.pad + 1;})
				.attr('y', function(d){return y + g.y + d[1] * g.size + g.pad + 1;})
				.attr('width', g.size - 2 * g.pad - 1)
				.attr('height', g.size - 2 * g.pad - 1).attr('fill', "#33F").attr('class', 'fig');
	},

	drawFig: function(figure, x, y, m, stage) {
		var nodes = figure.getNodes();
		var g = {x: 0, y: 0, size: 4, pad: 0};
		var x = x; var y = y;

		this.svg.selectAll('rect.fig' + m).data(nodes).enter().append('rect')
				.attr('x', function(d){return x + g.x + d[0] * g.size + g.pad + 1;})
				.attr('y', function(d){return y + g.y + d[1] * g.size + g.pad + 1;})
				.attr('width', g.size - 2 * g.pad - 1)
				.attr('height', g.size - 2 * g.pad - 1).attr('fill', (stage == 0)? "#33F" : '#C33').attr('class', 'fig' + m);
	}
}