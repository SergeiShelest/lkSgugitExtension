let js = [
    "selectize.min.js",
    "mySelectize.js"
]

let css = [
    "selectize.css",
    "customStyle.css"
]

js.forEach(function (file) {
    let jsScript = document.createElement("script")
    jsScript.setAttribute("src", chrome.extension.getURL(file))
    document.head.appendChild(jsScript)
})

css.forEach(function (file) {
    let style = document.createElement("link")
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", chrome.extension.getURL(file))
    document.head.appendChild(style)
})
