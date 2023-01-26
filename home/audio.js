fetch("test.mp3")
    .then(r => r.arrayBuffer())
      .then(buffer => {
        const arr = new Uint8Array(buffer)
        println(arr.reduce((str, code) => str += String.fromCharCode(code), ''))
      })
