$(function() {
	addNavigation();	
});

function addNavigation() {

	$('.main').removeClass('hide');	
	Game.init();
	Game.reproduce(
		[{"action":"put","time":"6937","params":{"x":"9","y":"9"}},{"action":"put","time":"8201","params":{"x":"9","y":"10"}},{"action":"put","time":"49807","params":{"x":"9","y":"11"}},{"action":"put","time":"51351","params":{"x":"9","y":"12"}},{"action":"put","time":"54315","params":{"x":"10","y":"11"}},{"action":"put","time":"55048","params":{"x":"10","y":"12"}},{"action":"put","time":"59853","params":{"x":"9","y":"8"}},{"action":"put","time":"74387","params":{"x":"8","y":"8"}},{"action":"put","time":"77507","params":{"x":"11","y":"11"}},{"action":"put","time":"78677","params":{"x":"11","y":"12"}},{"action":"save","time":"84262"},{"action":"put","time":"91750","params":{"x":"9","y":"9"}},{"action":"put","time":"94527","params":{"x":"10","y":"9"}},{"action":"put","time":"95510","params":{"x":"9","y":"8"}},{"action":"put","time":"96461","params":{"x":"8","y":"9"}},{"action":"put","time":"97522","params":{"x":"9","y":"10"}},{"action":"put","time":"103357","params":{"x":"11","y":"9"}},{"action":"put","time":"106149","params":{"x":"7","y":"9"}},{"action":"put","time":"108864","params":{"x":"11","y":"8"}},{"action":"put","time":"110049","params":{"x":"7","y":"8"}},{"action":"put","time":"115353","params":{"x":"9","y":"11"}},{"action":"again","time":"133645"},{"action":"put","time":"135814","params":{"x":"9","y":"9"}},{"action":"put","time":"141492","params":{"x":"10","y":"9"}},{"action":"put","time":"143801","params":{"x":"9","y":"10"}},{"action":"put","time":"144706","params":{"x":"10","y":"10"}},{"action":"put","time":"146859","params":{"x":"8","y":"10"}},{"action":"put","time":"147920","params":{"x":"11","y":"10"}},{"action":"put","time":"151274","params":{"x":"10","y":"11"}},{"action":"put","time":"152022","params":{"x":"9","y":"11"}},{"action":"put","time":"155579","params":{"x":"12","y":"10"}},{"action":"put","time":"156827","params":{"x":"7","y":"10"}},{"action":"again","time":"161570"},{"action":"put","time":"163473","params":{"x":"9","y":"9"}},{"action":"put","time":"164315","params":{"x":"9","y":"10"}},{"action":"put","time":"165142","params":{"x":"9","y":"11"}},{"action":"put","time":"166406","params":{"x":"10","y":"10"}},{"action":"put","time":"167310","params":{"x":"8","y":"10"}},{"action":"put","time":"168387","params":{"x":"9","y":"12"}},{"action":"put","time":"175594","params":{"x":"10","y":"12"}},{"action":"put","time":"176452","params":{"x":"8","y":"12"}},{"action":"put","time":"178371","params":{"x":"10","y":"13"}},{"action":"put","time":"179229","params":{"x":"8","y":"13"}},{"action":"again","time":"197529"},{"action":"put","time":"203800","params":{"x":"9","y":"9"}},{"action":"put","time":"204877","params":{"x":"9","y":"10"}},{"action":"put","time":"206733","params":{"x":"9","y":"11"}},{"action":"put","time":"210649","params":{"x":"10","y":"9"}},{"action":"put","time":"211663","params":{"x":"10","y":"10"}},{"action":"put","time":"212911","params":{"x":"11","y":"10"}},{"action":"put","time":"234252","params":{"x":"12","y":"10"}},{"action":"put","time":"237309","params":{"x":"12","y":"9"}},{"action":"put","time":"238214","params":{"x":"13","y":"9"}},{"action":"put","time":"239134","params":{"x":"13","y":"10"}},{"action":"again","time":"249494"},{"action":"put","time":"251007","params":{"x":"9","y":"9"}},{"action":"put","time":"252037","params":{"x":"9","y":"10"}},{"action":"put","time":"254127","params":{"x":"9","y":"11"}},{"action":"put","time":"255047","params":{"x":"10","y":"10"}},{"action":"put","time":"256077","params":{"x":"10","y":"11"}},{"action":"put","time":"258713","params":{"x":"9","y":"12"}},{"action":"put","time":"259509","params":{"x":"10","y":"12"}},{"action":"put","time":"260398","params":{"x":"11","y":"12"}},{"action":"put","time":"262941","params":{"x":"8","y":"12"}},{"action":"put","time":"281911","params":{"x":"11","y":"11"}},{"action":"again","time":"287043"},{"action":"put","time":"288634","params":{"x":"9","y":"9"}},{"action":"put","time":"289461","params":{"x":"9","y":"10"}},{"action":"put","time":"290288","params":{"x":"9","y":"11"}},{"action":"put","time":"291786","params":{"x":"9","y":"12"}},{"action":"put","time":"292940","params":{"x":"10","y":"11"}},{"action":"put","time":"294516","params":{"x":"10","y":"10"}},{"action":"put","time":"295655","params":{"x":"10","y":"12"}},{"action":"put","time":"296731","params":{"x":"11","y":"11"}},{"action":"put","time":"298041","params":{"x":"11","y":"12"}},{"action":"put","time":"299664","params":{"x":"12","y":"12"}},{"action":"save","time":"303080"},{"action":"put","time":"310379","params":{"x":"9","y":"9"}},{"action":"put","time":"312376","params":{"x":"10","y":"9"}},{"action":"put","time":"313624","params":{"x":"10","y":"10"}},{"action":"put","time":"314763","params":{"x":"10","y":"11"}},{"action":"put","time":"315714","params":{"x":"11","y":"11"}},{"action":"put","time":"316869","params":{"x":"12","y":"11"}},{"action":"put","time":"326244","params":{"x":"13","y":"11"}},{"action":"put","time":"327134","params":{"x":"13","y":"10"}},{"action":"put","time":"328038","params":{"x":"13","y":"9"}},{"action":"put","time":"328959","params":{"x":"14","y":"9"}},{"action":"save","time":"337820"},{"action":"put","time":"350674","params":{"x":"9","y":"9"}},{"action":"put","time":"352016","params":{"x":"9","y":"10"}},{"action":"put","time":"353108","params":{"x":"10","y":"10"}},{"action":"put","time":"359566","params":{"x":"10","y":"11"}},{"action":"put","time":"361360","params":{"x":"11","y":"11"}},{"action":"put","time":"363903","params":{"x":"10","y":"12"}},{"action":"put","time":"365229","params":{"x":"10","y":"13"}},{"action":"put","time":"373228","params":{"x":"9","y":"12"}},{"action":"put","time":"374663","params":{"x":"10","y":"14"}},{"action":"put","time":"388890","params":{"x":"12","y":"11"}},{"action":"again","time":"390856"},{"action":"put","time":"392276","params":{"x":"9","y":"9"}},{"action":"put","time":"393024","params":{"x":"9","y":"10"}},{"action":"put","time":"393773","params":{"x":"9","y":"11"}},{"action":"put","time":"400372","params":{"x":"8","y":"9"}},{"action":"put","time":"401324","params":{"x":"8","y":"8"}},{"action":"put","time":"403336","params":{"x":"10","y":"10"}},{"action":"put","time":"404241","params":{"x":"11","y":"10"}},{"action":"put","time":"405052","params":{"x":"11","y":"9"}},{"action":"put","time":"412166","params":{"x":"11","y":"8"}},{"action":"put","time":"413944","params":{"x":"9","y":"12"}},{"action":"again","time":"420137"},{"action":"put","time":"421635","params":{"x":"9","y":"9"}},{"action":"put","time":"422493","params":{"x":"9","y":"10"}},{"action":"put","time":"423351","params":{"x":"9","y":"11"}},{"action":"put","time":"424693","params":{"x":"10","y":"10"}},{"action":"put","time":"425878","params":{"x":"11","y":"10"}},{"action":"put","time":"426665","params":{"x":"11","y":"9"}},{"action":"put","time":"428303","params":{"x":"8","y":"10"}},{"action":"put","time":"429270","params":{"x":"7","y":"10"}},{"action":"put","time":"430144","params":{"x":"7","y":"9"}},{"action":"put","time":"431642","params":{"x":"9","y":"12"}},{"action":"save","time":"441782"},{"action":"put","time":"449192","params":{"x":"9","y":"9"}},{"action":"put","time":"450752","params":{"x":"9","y":"10"}},{"action":"put","time":"453326","params":{"x":"8","y":"9"}},{"action":"put","time":"454184","params":{"x":"10","y":"9"}},{"action":"put","time":"455089","params":{"x":"9","y":"8"}},{"action":"put","time":"456664","params":{"x":"9","y":"11"}},{"action":"put","time":"457663","params":{"x":"9","y":"12"}},{"action":"put","time":"460174","params":{"x":"9","y":"13"}},{"action":"put","time":"462155","params":{"x":"10","y":"11"}},{"action":"put","time":"463029","params":{"x":"8","y":"11"}},{"action":"again","time":"468021"},{"action":"put","time":"469409","params":{"x":"9","y":"9"}},{"action":"put","time":"470673","params":{"x":"9","y":"10"}},{"action":"put","time":"472264","params":{"x":"10","y":"10"}},{"action":"put","time":"473263","params":{"x":"10","y":"11"}},{"action":"put","time":"475103","params":{"x":"11","y":"11"}},{"action":"put","time":"476071","params":{"x":"11","y":"12"}},{"action":"put","time":"477787","params":{"x":"12","y":"12"}},{"action":"put","time":"478769","params":{"x":"12","y":"13"}},{"action":"put","time":"479846","params":{"x":"13","y":"13"}},{"action":"put","time":"482014","params":{"x":"13","y":"14"}},{"action":"save","time":"484932"}]
	);
	return;

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
		this.p = {size: 30, saved_width: 300, saved_size: 6, sel_width: 1000, sel_size: 10};		
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
			$('#tip').hide(); //Awful! 		
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
	},

	reproduce: function(moves) {
		this.moves = moves;
		this.cur_move = 0;
		this.total_moves = moves.length;
		this.moveObserver = setInterval(Game.reproduceNextMove, 100);
	},

	reproduceNextMove: function(move) {
		var move = Game.moves[Game.cur_move];
		if (move.action == 'put') {
			Game.addSquare(move.params.x, move.params.y);		
		}
		else if (move.action == 'save') {
			Game.save();
		}
		else if (move.action == 'again') {
			Game.again();
		}

		Game.cur_move++;
		if (Game.cur_move == Game.total_moves) {
			clearInterval(Game.moveObserver);
		}
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
	//console.log(JSON.stringify(data.moves));
	$.post('server.php', {data: data});
}