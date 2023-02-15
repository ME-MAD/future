const canvas  = document.getElementById('field')

if(canvas.getContext)
{
    draw(canvas)
}
else
{
    alert("The Game Cannot play on this browser")
}



function draw(canvas)
{
    const ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.arc(40, 40, 20, Math.PI, Math.PI * 2, true)

    ctx.moveTo(60,100)
    ctx.arc(40, 100, 20, 0, Math.PI, true)

    ctx.moveTo(140,40)
    ctx.arc(120, 40, 20, 0 , (Math.PI / 2) * 3, false)
    ctx.stroke()
}