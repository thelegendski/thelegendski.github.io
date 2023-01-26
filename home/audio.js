fetch("test.mp3").then(r => r.arrayBuffer()).then(buffer => println(buffer))
