function circleValues(r)
{
    let radius = r;
    let area = Math.PI*r*r;
    let perimeter = 2*Math.PI*r;
    return ("For the given raius of Circle "+r+"cms, the Area is "+area+"cms and the Perimeter is "+perimeter+"cms.")
}
console.log(circleValues(10));
console.log(circleValues(25));
console.log(circleValues(80));
