type Dipendente = {
    nome: string,
    cognome: string,
    annoDiNascita: number,
    sesso: 'm' | 'f',
    anniDiServizio: number[],
}

//esempio 
const dipendente1: Dipendente = {
    nome: 'Mario',
    cognome: 'Rossi',
    annoDiNascita: 1924,
    sesso: 'm',
    anniDiServizio: [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2021],
}

console.log(dipendente1);

//bonus
type DipendenteBonus = {
    nome: string,
    cognome: string,
    annoDiNascita: number,
    sesso:'m' | 'f',
    anniDiServizio: number[],
    readonly emailAziendale: string,
    contratto: 'indeterminato' | 'determinato' | 'freelance'
}

const dipendente2: DipendenteBonus = {
   nome: 'Laura',
   cognome: 'Pausini',
   annoDiNascita: 1980,
   sesso:'f',
   anniDiServizio: [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2021],
   emailAziendale: 'laurapausini@boolean.careers.com',
   contratto: 'indeterminato' 
}

console.log(dipendente2);


export {
    Dipendente,
    DipendenteBonus
}