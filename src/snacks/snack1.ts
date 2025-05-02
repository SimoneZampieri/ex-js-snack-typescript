//snack 1
const valoreRicevuto: unknown =  'Valore della api'

if(typeof valoreRicevuto === 'string'){
    console.log(valoreRicevuto.toUpperCase())
} else if (typeof valoreRicevuto === 'number'){
    console.log(valoreRicevuto * 2)
} else if (typeof valoreRicevuto === 'boolean'){
    if(valoreRicevuto){
        console.log('Si')
    } else {
        console.log('NO')
    }
} else{
    console.log('tipo non supportato')
}