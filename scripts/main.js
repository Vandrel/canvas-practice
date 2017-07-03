var dirt_tile = new Image(25,25);
dirt_tile.src = 'http://i.imgur.com/OFUkqSH.png';
var level = [[0,1,1,1,1,0,1,0,0,1],[0,1,1,1,1,0,1,1,1,1],[1,1,0,1,0,1,1,1,1,1],[1,1,1,1,1,1,0,0,1,1],[1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,1,1,0,1,1],[1,1,1,1,1,1,0,0,1,1],[1,1,1,0,1,1,1,1,1],[0,0,0,1,1,1,1,0,0]]


$(document).ready(function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth * 0.97;
    ctx.canvas.height = window.innerHeight * 0.85;
    
    /*
    function drawMap() {
        ctx.drawImage(dirt_tile, canvas.width * 0.05, canvas.width * 0.05, canvas.width * 0.1, canvas.width * 0.1);
        ctx.drawImage(dirt_tile, canvas.width * 0.15, canvas.width * 0.05, canvas.width * 0.1, canvas.width * 0.1);
        ctx.drawImage(dirt_tile, canvas.width * 0.1, canvas.width * 0.075, canvas.width * 0.1, canvas.width * 0.1);
        ctx.drawImage(dirt_tile, canvas.width * 0.2, canvas.width * 0.075, canvas.width * 0.1, canvas.width * 0.1);
        ctx.drawImage(dirt_tile, canvas.width * 0.05, canvas.width * 0.1, canvas.width * 0.1, canvas.width * 0.1);
        ctx.drawImage(dirt_tile, canvas.width * 0.15, canvas.width * 0.1, canvas.width * 0.1, canvas.width * 0.1);
        ctx.drawImage(dirt_tile, canvas.width * 0.1, canvas.width * 0.125, canvas.width * 0.1, canvas.width * 0.1);
    }
    */
    function drawMap() {
        var tileSize = 0.05;
        for (var i = 0; i < level.length; i++) {
            for (var k = 0; k < level[i].length; k++) {
                if (level[i][k] === 1) {
                    if (i % 2 === 0) {
                        ctx.drawImage(dirt_tile, canvas.width * ((tileSize / 2) + (k * tileSize)), canvas.width * ((tileSize / 2) + (i * (tileSize / 4))), canvas.width * tileSize, canvas.width * tileSize);
                    } else {
                        ctx.drawImage(dirt_tile, canvas.width * (tileSize + (k * tileSize)), canvas.width * ((tileSize / 2) + (i * (tileSize / 4))), canvas.width * tileSize, canvas.width * tileSize);
                    }
                } 
            }
        }
    }
    
    
    drawMap();
	
	$(window).resize(function(){
        ctx.canvas.width  = window.innerWidth * 0.97;
      	ctx.canvas.height = window.innerHeight * 0.85;
      	drawMap();
	});
	
	
})