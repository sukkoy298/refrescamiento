export interface Hero{
    id: number,
    name: string,
    owner: Owner,
}

export const Owner = {
    Dc: 'Dc',
    Marvel: 'Marvel',
} as const;

export type Owner = typeof Owner[keyof typeof Owner];

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.Dc,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.Dc,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.Dc,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];

// export default heroes;