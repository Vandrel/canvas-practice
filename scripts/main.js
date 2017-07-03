var dirt_tile = new Image(25,25);
var grass1 = new Image(25,25);
grass1.src = 'http://i.imgur.com/HrMQJV8.png';
dirt_tile.src = 'http://i.imgur.com/OFUkqSH.png';
var username = 'test';
var password = 'test';
var levels = {
    menu:{
        layout:([
            [0,1,1,1,1,0,1,0,0,1],
            [0,1,1,1,1,0,1,1,1,1],
            [1,1,0,1,0,1,1,1,1,1],
            [1,1,1,1,1,1,0,0,1,1],
            [1,1,1,1,1,1,1,0,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,1,1,1,0,1,1],
            [1,1,1,1,1,1,0,0,1,1],
            [1,1,1,0,1,1,1,1,1,0],
            [0,0,0,1,1,1,1,0,0,0]
            ]),
        fill: 'black'
    },
    tavern:{
        layout:([
            [0,1,1,1,0,0,0,0,0,0],
            [0,1,1,1,1,0,0,0,0,0],
            [0,1,1,1,1,1,0,0,0,0],
            [0,1,1,1,1,1,1,1,0,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,0,0,1,1,1,1,0,0,0]
        ]),
        fill: 'black'
    }
};


$(document).ready(function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth * 0.97;
    ctx.canvas.height = window.innerHeight;
    
    
    
    var curLevel = levels.menu;
    
    //fill the background with a solid color during the drawMap function
    function backgroundFill(color) {
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.fill();
    }
    
    //proportionally draws the level according to window size.
    function drawMap(level) {
        backgroundFill(curLevel.fill);
        var tileSize = level.length/100 * 0.7;
        for (var i = 0; i < level.length; i++) {
            for (var k = 0; k < level[i].length; k++) {
                if (level[i][k] === 1) {
                    if (i % 2 === 0) {
                        ctx.drawImage(grass1, canvas.width * ((tileSize / 2) + (k * tileSize)) + ((canvas.width / level.length)  ), canvas.width * ((tileSize / 2) + (i * (tileSize / 4))) + (canvas.height / 4), canvas.width * tileSize, canvas.width * tileSize);
                    } else {
                        ctx.drawImage(grass1, canvas.width * (tileSize + (k * tileSize))  + ((canvas.width / level.length)  ), canvas.width * ((tileSize / 2) + (i * (tileSize / 4))) + (canvas.height / 4), canvas.width * tileSize, canvas.width * tileSize);
                    }
                }
            }
        }
    }
    
    function enterGame() {
        curLevel = levels.tavern;
        drawMap(curLevel.layout);
    }
    
    drawMap(curLevel.layout);
	
	$(window).resize(function(){
        ctx.canvas.width  = window.innerWidth * 0.97;
      	ctx.canvas.height = window.innerHeight;
      	drawMap(curLevel.layout);
	});
	
	$('#submit').click(function() {
	    if ($('#username').val() === username && $('#password').val() === password) {
	        $('.overlay').remove();
	        enterGame();
	    } else {
	        $('#error').remove();
	        $('.login').append('<p id="error">Username and/or password are invalid.</p>');
	    }
	});
})