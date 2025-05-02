import { Dipendente, DipendenteBonus } from "./snack2";

type Developer = Dipendente & {
    livelloEsperienza: 'Junior'| 'Mid'| 'Senior',
    linguaggi: string[],
    certicazioni: string[] // Typo: should be "certificazioni"
}

const developer1: Developer = {
    nome: 'Mario',
    cognome: 'Rossi',
    annoDiNascita: 1924,
    sesso: 'm', // Missing required property
    anniDiServizio: [1999, 2000, 2001, 2002, 2003, 2004, 2005],
    livelloEsperienza: 'Mid',
    linguaggi: ['Java', 'C++', 'Python'],
    certicazioni: ['Certificazione Java', 'Certificazione C++', 'Certificazione Python'] // Same typo as above
}

console.log(developer1);

type ProjectManager = Dipendente & {
    teamSize: number | null,
    budget?: number,
    stakeHolders: string[]
}

const projectManager1: ProjectManager = { // Wrong type: using Developer instead of ProjectManager
    nome: 'Mario',
    cognome: 'Rossi',
    annoDiNascita: 1924,
    sesso: 'm', // Missing required property
    anniDiServizio: [1999, 2000, 2001, 2002, 2003, 2004, 2005],
    teamSize: 10,
    budget: 100000,
    stakeHolders: ['StakeHolder1', 'StakeHolder2', 'StakeHolder3'] // Typo: should be "stakeholderPrincipali"
}

console.log(projectManager1);

//bonus
type Team = {
    nome: string,
    progettoAttuale: string | null,
    membri: [ProjectManager, ...Developer[]],
    budget: number
}

const team1: Team = {
    nome: 'Tartarughe Ninja',
    progettoAttuale: 'Progetto Tartarughe Ninja',
    membri: [projectManager1, developer1],
    budget: 100000
}

console.log(team1)