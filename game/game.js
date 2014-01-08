$(function() {
	addNavigation();	
});

function addNavigation() {
	var stages=['.intro', '.perso', '.main', '.gallery', '.thanks'];
	var i = 0;
	$(stages[i]).removeClass('hide');	
	$('.go-next').click(function(){		
		$(stages[i++]).hide();		
		$(stages[i]).removeClass('hide');
		if (stages[i] == '.main') {
			Game.init();
		}
		if (stages[i] == '.thanks') {
			sendInfo();
		}
	});
}

Game = {
	init: function() {
		this.p = {size: 30, saved_width: 300, saved_size: 6, sel_width: 800, sel_size: 10};		
		this.svg = d3.select('.grid').append('svg').attr('width', 19 * this.p.size + 10).attr('height', 19 * this.p.size + 10);
		this.saved = d3.select('.saved').append('svg').attr('width', this.p.saved_width).attr('height', this.p.saved_width);
		this.sel =  d3.select('.selected').append('svg').attr('width', this.p.sel_width).attr('height', 400);

		this.figuresNum = 0;
		this.firstTime = true;
		this.savedFigures = 0;		
		this.sqLimit = 10;
		
		this.initMap();		
		this.initPossible();
		this.drawPossible();
		$('.btn-save').click(function() {Game.save(); Log.add('save');});
		$('.btn-again').click(function() {Game.again(); Log.add('again');});

		$('.selected').on('click', 'g.sel', function() {			
			var el = $(this).find('rect.frame');
			if (el.length > 0) {
				el.first().attr('class', 'sel_frame');
			}
			else {
				$(this).find('rect.sel_frame').first().attr('class', 'frame');					
			}		
		});

		this.startTime = new Date().getTime();
		setInterval(this.updateTimer, 1000);
		Log.init();
	},

	initMap: function() {
		//0 - empty, 1 - possible, 2 - square
		this.map = [];
		for (var i = 0; i <= 18; i++) {
			this.map[i] = [];
			for (var j = 0; j <=18; j++) {
				this.map[i][j] = 0;
			}
		}
		this.map[9][9] = 1;
	},

	initPossible: function() {
		$('.grid').on('click', 'rect.possible', function() {							
			Game.addSquare($(this).attr('i'), $(this).attr('j'));						
		});		
	},

	drawPossible: function() {
		$('rect.possible').remove();
		for (var i in this.map) {
			for (var j in this.map[i]) {
				if (this.map[i][j] == 1) {
					this.drawRect(i, j);
				}
			}
		}		
	},

	addSquare: function(i, j) {
		if (this.firstTime) {
			this.initMap();
			this.firstTime = false;
		}		
		this.map[i][j] = 2;
		var neigbours = [[i * 1 + 1, j * 1], [i - 1, j * 1], [i * 1, j * 1 + 1], [i * 1, j - 1]];
		var x, y;
		for (var k in neigbours) {
			x = neigbours[k][0]; y = neigbours[k][1];
			if (x >= 0 && x <= 18 && y >= 0 && y <= 18 && this.map[x][y] == 0) {
				this.map[x][y] = 1;
			}
		}
		this.drawPossible();
		this.drawRect(i, j, 'placed');
		this.figuresNum++;
		$('#sq_left').html(this.sqLimit - this.figuresNum);
		if (this.figuresNum == this.sqLimit) {
			this.stop();
		}
		Log.add('put', {x: i, y: j});		
	},

	stop: function() {
		$('rect.possible').remove();
		$('.panel-buttons button').attr('disabled', false);
	},

	drawRect: function(i, j, className) {		
		this.svg.append('rect').attr('class', className? className : 'possible').attr({i: i, j: j}).attr({x: i * this.p.size + 5 + 2, y: j * this.p.size + 5 + 2, width: this.p.size - 1, height: this.p.size - 1});
	},

	drawSmallRect: function(x, y, i, j, size, svg) {
		svg.append('rect').attr('class', 'saved').attr({x: x + 2 + i * size + 1, y: y + 2 + j * size + 1, width: size - 1, height: size - 1});
	},

	again: function() {
		$('#sq_left').html(10);
		this.figuresNum = 0;
		this.firstTime = true;
		this.initMap(1);
		$('rect.placed').remove();
		$('.panel-buttons button').attr('disabled', 'disabled');
		this.drawPossible();
	},
	
	save: function() {
		this.drawSmall(this.p.saved_size, this.p.saved_width, this.saved, 'sav');		
		this.drawSmall(this.p.sel_size, this.p.sel_width, this.sel, 'sel');		
		this.savedFigures++;				
		this.again();
	},

	drawSmall: function(size, width, svg, classn) {
		var num_per_row = Math.floor(width / (12 * size));
		var x = (this.savedFigures % num_per_row) * 12 * size; 
		var y = Math.floor(this.savedFigures / num_per_row) * 12 * size;
		var g = svg.append('g').attr('class', classn);
		g.append('rect').attr('class', 'frame').attr({x: x, y: y, width: 10 * size + 4, height: 10 * size + 4});	

		var x_cor = 0;
		var y_cor = 0;
		edges = {left: 19, right: 0, top: 19, bottom: 0}
		for (var i in this.map) {
			for (var j in this.map[i]) {
				if (this.map[i][j] == 2) {
					if (i * 1 < edges.left) edges.left = i;
					if (j * 1< edges.top) edges.top = j;
					if (i * 1> edges.right) edges.right = i;
					if (j * 1> edges.bottom) edges.bottom = j;
					console.log([i,j]);
				}
			}
		}

		x_cor = edges.left - 5 + Math.floor((edges.right - edges.left + 1) / 2);
		y_cor = edges.top - 5 + Math.floor((edges.bottom - edges.top + 1) / 2);
		
		for (var i in this.map) {
			for (var j in this.map[i]) {
				if (this.map[i][j] == 2) {
					this.drawSmallRect(x, y, i - x_cor, j - y_cor, size, g);
				}
			}
		}	
	},
	
	updateTimer: function() {		
		var time = Game.time();
		var sec = Math.floor(time / 1000);
		var mins = Math.floor(sec / 60);
		sec = sec - 60 * mins;
		if (mins < 10) {
			mins = '0' + mins;
		}
		if (sec < 10) {
			sec = '0' + sec;
		}
		
		$('#time_pass').html(mins + ':' + sec);
	},

	time: function() {
		var currentTime = new Date().getTime();
		return currentTime - this.startTime;
	},

	getSelected: function() {
		var i = 1;
		var result = [];
		$('g.sel rect').each(
			function() {
				if ($(this).attr('class') == 'sel_frame') {
					result.push(i);
					i++;
				}
				if ($(this).attr('class') == 'frame') {
					i++;
				}
			});		
		return result;
	}
}

Log = {
	init: function() {
		this.log = [];
		this.startTime = new Date().getTime();
	},
	
	add: function(action, params) {
		if (!params) params = {};
		var currentTime = new Date().getTime();
		this.log.push({action: action, time: currentTime - this.startTime, params: params});
	},
	get: function() {
		return this.log;
	}
}

function sendInfo() {
	var data = {
		person: $('#person').serialize(),
		moves: Log.get(),
		selected: Game.getSelected()
	}
	console.log(data);
}