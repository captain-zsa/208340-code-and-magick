'use strict';
var CLOUD_WIDTH = 420,
	CLOUD_HEIGHT = 270,
	BAR_HEIGHT = 150,
	COLUMN_WIDTH = 40,
	COLUMN_MARGIN = 50;

var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderColumn = function(ctx, x, y, column_color, height_column) {
	ctx.fillStyle = column_color;
	ctx.fillRect(x, y, COLUMN_WIDTH, height_column);
};

var getMaxElement = function(arr) {
	var maxElement = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
	renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, 100, 10, '#fff');

	ctx.fillFont = '16px PT Mono';
	ctx.fillStyle = '#000';
	ctx.fillText('Ура вы победили!', 110, 50);
	ctx.fillText('Список результатов:', 110, 70);

	var maxTime = getMaxElement(times);
	for (var i = 0; i < players.length; i++) {
		ctx.fillStyle = '#000';
		ctx.fillText(players[i], 140 + (COLUMN_WIDTH+COLUMN_MARGIN)*i, 95+BAR_HEIGHT+10);
		if(players[i] == 'Вы') {
			var column_color = 'rgba(255, 0, 0, 1)';
		}
		else {
			var alpha = parseInt(Math.random()*10);
			var column_color = 'rgba(0,0,255,.'+alpha+')';
		}
		renderColumn(ctx, 140 + (COLUMN_WIDTH+COLUMN_MARGIN)*i, 85+BAR_HEIGHT-(BAR_HEIGHT * times[i])/maxTime, column_color, (BAR_HEIGHT * times[i])/maxTime);
	}
}