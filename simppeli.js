
function simppeli(x,y) {
    return x + y
  }

console.log(simppeli(1,2, 3))
//ei kannata varmaan antaa tota 2 parametriä tohon ku ei toi funktio ota ku ekan vastaan...


//DUPLACTE CODE:
function duplo () {

    const jotain = "jotain"
    let tulos = ""
    if (jotain === "jotain") {
        tulos = jotain + " extraa"
        const tulos2 = jotain + "extraa2"
        console.log(tulos + tulos2)
    }
    
    if (jotain === "jotain") {
        tulos = jotain + " extraa"
        const tulos2 = jotain + "extraa2"
        console.log(tulos + tulos2)
    }
    
    console.log(tulos)
    return tulos

}

duplo ()

module.exports = simppeli
