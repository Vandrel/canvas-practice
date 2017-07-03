var dirt_tile = new Image(25,25);
dirt_tile.src = 'http://i.imgur.com/OFUkqSH.png';
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
            ])
    }
};


$(document).ready(function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth * 0.97;
    ctx.canvas.height = window.innerHeight;
    
    var curLevel = levels.menu;
    
    //proportionally draws the level according to window size.
    function drawMap(level) {
        var tileSize = level.length/100 * 0.7;
        for (var i = 0; i < level.length; i++) {
            for (var k = 0; k < level[i].length; k++) {
                if (level[i][k] === 1) {
                    if (i % 2 === 0) {
                        ctx.drawImage(dirt_tile, canvas.width * ((tileSize / 2) + (k * tileSize)) + ((canvas.width / level.length)  ), canvas.width * ((tileSize / 2) + (i * (tileSize / 4))) + (canvas.height / 4), canvas.width * tileSize, canvas.width * tileSize);
                    } else {
                        ctx.drawImage(dirt_tile, canvas.width * (tileSize + (k * tileSize))  + ((canvas.width / level.length)  ), canvas.width * ((tileSize / 2) + (i * (tileSize / 4))) + (canvas.height / 4), canvas.width * tileSize, canvas.width * tileSize);
                    }
                } 
            }
        }
    }
    
    drawMap(curLevel.layout);
	
	$(window).resize(function(){
        ctx.canvas.width  = window.innerWidth * 0.97;
      	ctx.canvas.height = window.innerHeight;
      	drawMap(curLevel.layout);
	});
	
	
})