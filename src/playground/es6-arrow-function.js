const name="Tanya Ejanthkar";

let firstName;

const regularArrow = (name) => {
    firstName= name.split(' ')[0];
    return firstName;
};

console.log(regularArrow(name));

const shortFunction = (name) => name.split(' ')[0];

console.log(shortFunction(name))