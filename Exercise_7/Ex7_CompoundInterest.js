function compoundInt(p,r,t,n)
{
    let principleamt = p;
    let interestrate = r;
    let time = t;
    let compoundingperiod = n;
    let CompoundInterest = p*Math.pow((1+(r/n)),(n*t));
    return (CompoundInterest)
}
console.log(compoundInt(5000,0.20,1,2))
console.log(compoundInt(1000,0.03,1,3))
