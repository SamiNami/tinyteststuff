const person = {
    name: 'John Doe',
    email: 'john@doe.com',
    age: 27,
    country: 'Australia',
    language: 'English',
    profession: 'Front End Developer'
};
// creates a new copy of persons, without the profession and country properties
const { profession, country, ...newPerson } = person;
console.log(newPerson);
