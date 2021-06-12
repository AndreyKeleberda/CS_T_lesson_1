// console.log(first);
// var first = 1;
// let second
// console.log(second);

// second = 2;
// console.log(second);

// let b = second;
// console.log(b);

// second = 3;
// console.log(b);

// const obj1 = { a: '', b: '' };
// const obj2 = obj1;

// console.log(obj2);

// obj1.a = 'andr';
// console.log(obj2);

// const name = 123;
// console.log(name);



// _________________________ обьекты  и конструкторы


const form = document.getElementById('register_form');
console.dir(form)

console.log(form.elements.pass)
const users = [];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    console.log('target', event.target.elements);
    let name = event.target.elements.name.value;
    let pass = event.target.elements.pass.value;
    let email = event.target.elements.email.value;
    let tel = event.target.elements.tel.value;
    class User {
        constructor(a,b,c,d) {
            this.name = a;
            this.pass = b;
            this.email = c;
            this.tel = d;
        }
    }
    const user = new User(name, pass, email, tel);
    console.log(user);
    users.push(user);
    console.log(users);
});