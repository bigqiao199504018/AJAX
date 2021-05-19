loadCSS.onclick = (()=> {
    let request = new XMLHttpRequest()
    request.open("GET","/style.css")
    request.onreadystatechange = (()=>{
    if(request.readyState === 4 && request.status === 200){
        let style = document.createElement("style")
        style.innerHTML = request.response
        document.head.appendChild(style)
        }
    }) 
    request.send()

})
loadJS.onclick = (()=> {
    let request = new XMLHttpRequest()
    request.open("GET","/2.js")
    request.onreadystatechange = (()=>{
    if(request.readyState === 4 && request.status === 200){
        let script = document.createElement("script")
        script.innerHTML = request.response
        document.body.appendChild(script)
        }
    }) 
    request.send()
})
loadHTML.onclick = (()=> {
    let request = new XMLHttpRequest()
    request.open("GET","/3.html")
    request.onreadystatechange = (()=>{
    if(request.readyState === 4 && request.status === 200){
        let div = document.createElement("div")
        div.innerHTML = request.response
        content.appendChild(div) 
    }
    }) 
    request.send()
})
loadJSON.onclick = (()=> {
    let request = new XMLHttpRequest()
    request.open("GET","/5.json")
    request.onreadystatechange = (()=>{
    if(request.readyState === 4 && request.status === 200){
        console.log(JSON.parse(request.response))
        }
    }) 
    request.send()
})

let currentPage = 2
loadPages.onclick = (()=> {
    let request = new XMLHttpRequest()
    request.open("GET",`/page${currentPage}`)
    request.onreadystatechange = (()=>{
    if(request.readyState === 4 && request.status === 200){
        const array = JSON.parse(request.response)
        const result = array.map(item=>{
            const li = document.createElement("li")
            li.innerText = item.id
            pageList.appendChild(li)
            })
        }
    }) 
    currentPage++
    request.send()
})