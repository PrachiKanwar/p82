canvas =document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseevent=""
var lastpositionofx,lastpositionofy
colour="black"
width=1
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    colour=document.getElementById("colour").value 
    width=document.getElementById("width").value 
    mouseevent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    cpmx=e.clientX-canvas.offsetLeft
    cpmy=e.clientY-canvas.offsetTop
    if (mouseevent=="mousedown") {
       ctx.beginPath()
       ctx.strokeStyle=colour
       ctx.lineWidth=width
       console.log("last position of x and y are")
       console.log("x= "+lastpositionofx+" y= "+lastpositionofy)
       //ctx.moveTo(lastpositionofx,lastpositionofy)
       console.log("current position of x and y are")
       console.log("x= "+cpmx+" y= "+cpmy)
       ctx.arc(cpmx,cpmy,20,0,2*Math.PI)
       ctx.stroke()
    }
    lastpositionofx=cpmx
    lastpositionofy=cpmy
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}