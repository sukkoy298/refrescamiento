function greet(name: string): string {
    return `hola ${name}`;
}

const greet2 = (name: string): string => {
    return `hola ${name}`;
}

function getUser(){
    return{
        uid: 'abc-123',
        userName: 'carlos123',
    };
}

// const getUser2 = () => uid:'abc-234',username: 'augusto234'
    

const message = greet('carlos');
const message2 = greet2('augusto');
const user = getUser();


console.log(user);
console.log(message);
console.log(message2);
