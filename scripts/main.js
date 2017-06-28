$(document).ready(function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth * 0.95;
    ctx.canvas.height = window.innerHeight * 0.85;
	
	$(window).resize(function(){
        ctx.canvas.width  = window.innerWidth * 0.95;
      	ctx.canvas.height = window.innerHeight * 0.85;
	});
	
	
})