//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/liongamer.minehost.pro/30251";

$.getJSON(url, function (r) {
    //data is the JSON string
    if (r.error) {
        $('#rest').html('Server Apagado');
        return false;
    }
    var pl = '';
    if (r.players.sample.length > 0) { pl = '<br>Players: ' + r.players.sample[0].name; }
    $('#rest').html(r.description.replace(/§(.+?)/gi, '') + '<br><b>Conectados:</b> ' + r.players.online + pl);
    $('#favicon').attr('src', r.favicon);

});