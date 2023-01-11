const xml = new XMLHttpRequest()
xml.onreadystatechange = function(){
    this.readyState === 4 && this.status === 200 && XMLHandler(this)
}
xml.open("GET", "/home/main.xml", true)
xml.send()

const tag = (doc, tag) => doc.getElementsByTagName(tag)[0].childNodes[0].nodeValue

const XMLHandler = xml => {
    const doc = xml.responseXML
    println(tag(doc, 'test'))
}
