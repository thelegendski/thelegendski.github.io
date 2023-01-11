const xml = new XMLHttpRequest()
xml.onreadystatechange = function(){
    this.readyState === 4 && this.status === 200 && println('it works!')
}
xml.open("GET", "/home/main.xml", true)
xml.send()
