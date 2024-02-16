const canvas = document.querySelector('canvas')
const decreaseBtn = document.getElementById("decrease")
const increaseBtn = document.getElementById("increase")
const sizeEl = document.getElementById('size')
const colorPicker = document.getElementById("color")
const clearBtn = document.getElementById("clear")
const remove = document.getElementById('remove')

const ctx = canvas.getContext("2d")

let size = 10
let isPressed = false

colorPicker.value = 'black'
let color = colorPicker.value
let x = 0
let y = 0

canvas.addEventListener("mousedown",(e) =>{

    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener("mouseup", (e) =>{
    isPressed = false

    x = 0
    y = 0
})

function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth  = size * 2
    ctx.stroke()
}

canvas.addEventListener("mousemove", (e) =>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
        
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

canvas.addEventListener("click", (e) =>{

    const x2 = e.offsetX
    const y2 = e.offsetY
        
    drawCircle(x2, y2)

    x = x2
    y = y2

})

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () =>{
    size += 5

    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () =>{
    size -= 5

    if(size < 5){
        size = 5
    }

    updateSizeOnScreen()
})

colorPicker.addEventListener("change", (e) =>{
    // canvas.style.cursor = "pointer"
    color = e.target.value
})

remove.addEventListener("click", () =>{
    color = '#f5f5f5'
})

clearBtn.addEventListener("click",  () =>{
    ctx.clearRect(0 ,0 ,canvas.width, canvas.height)
})