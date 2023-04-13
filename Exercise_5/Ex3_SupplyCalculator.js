function calculateSupply(x, y)
{
    const maxage =100
    let currentage =x
    let amtperday =y
    let supply = (amtperday*365)*(maxage-currentage)
    return ("You will need "+ supply +"Kgs of snacks to last you till the ripe old age of "+ maxage )

    
}
console.log (calculateSupply(10, 50))
console.log (calculateSupply(20, 50))
console.log (calculateSupply(30, 50))
