var D = data


var a = new AudioContext()
var b = new AudioBuffer({
    numberOfChannels: chls,
    length: D.length / chls * tri,
    sampleRate: rate
})

for (var c = 0; c < chls; c++) {
    var C = b.getChannelData(c);
    for (var i = 0; i < b.length / tri; i++) {
        var A = atob('AAA' + D[i + b.length / (tri ? 2 : 1) * c]).charCodeAt(2);
        if (tri > 1) {
            C[i * 2] = ((A & 56) >> 3) / 3.5 - 1;
            C[i * 2 + 1] = (A & 7) / 3.5 - 1
        } else C[i] = A / 15.5 - 1
    }
}
var P =new AudioBufferSourceNode(a, {
    buffer: l[n],
    loop: loop
});
var q = new GainNode(a, {
    gain: vol
});
P.connect(q).connect(a.destination);
P.start()

load(30500, 2, 2, data, 0);
play(0, 1/3, true);
