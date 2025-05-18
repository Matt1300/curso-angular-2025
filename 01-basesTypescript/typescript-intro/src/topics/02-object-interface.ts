let skills: string[] = ['Swordsmanship', 'Archery', 'Stealth'];

interface Character {
    name: string;
    hpPoints: number;
    isAlive: boolean;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hpPoints: 95,
    isAlive: true,
    skills: ['Swordsmanship', 'Archery', 'Stealth'],
}

strider.hometown = 'Rivendell';

console.table(strider);