const xml = new XMLHttpRequest()
xml.onreadystatechange = function(){
    this.readyState === 4 && this.status === 200 && XMLHandler(this)
}
xml.open("GET", "/home/main.xml", true)
xml.send()

const XMLHandler = xml => {
    const doc = xml.responseXML
    println(doc.getElementsByTagName('test')[0].childNodes[0].nodeValue)
}
