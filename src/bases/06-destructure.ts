const person = {
    name: 'tony',
    age: 45,
    key: 'ironman',
};

const { name, age, key } = person;

console.log({name, age, key});

interface Hero{
    name: string,
    age: number
    key: string,
    rank?: string,
};

const useContext = ({key, name,  age, rank}: Hero) => {
    return {
        keymane: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const {keymane, rank} = useContext(person);

console.log({keymane, rank});