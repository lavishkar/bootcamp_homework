function calcCircumference(x)
{
    let radius = x
    let circumference = radius * 2 * Math.PI
    return ("The Circumference of the circle with the given radius "+x+"cm is "+circumference )
}
console.log (calcCircumference(5))

function calcArea(y)
{
    let radius = y
    let pi = Math.PI
    let area = pi * radius * radius
    return ("The Area of the circle with the given radius "+y+"cm is "+area)
}
console.log (calcArea(5))
