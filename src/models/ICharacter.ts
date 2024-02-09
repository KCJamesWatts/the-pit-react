interface Character {
    background_bonds: string;
    codename: string;
    damage: number;
    description: string;
    focus: string;
    gear: string;
    hangups: string;
    health: number;
    influences: string;
    languages: string;
    level: number;
    movement: number;
    notes: string;
    perks: string;
    origin: string;
    realname: string;
    role: string;
    training_and_qualifications: string;

    armor: IArmor[];
    attacks: ICharacterAttack[];
    weapons: IWeapon[];
}