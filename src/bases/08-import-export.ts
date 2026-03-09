import {heroes, Owner} from './data/hero.data';

export const getHeroeByOwner = (owner: Owner) => {

    const heroByOwner = heroes.filter( hero => hero.owner === owner)
    return heroByOwner
    }

