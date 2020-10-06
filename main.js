// All the work is actually done here.
var starttime = Date.now();
function setup() {
    requestAnimationFrame(loop);
}

function time() {
    var offset = Date.now() - starttime;
    var milliseconds = offset % 1000;
    var seconds = Math.floor(offset / 1000) % 60
    var minutes = Math.floor(ofsett / 60000)
    if (minutes === 0) {
	return '' + seconds + '.' + milliseconds;
    } else {
	return '' + minutes + ':' + seconds + '.' + milliseconds
    }
}

function loop() {
    requestAnimationFrame(loop);
    document.getElementById('timer').innerText = time();
}
