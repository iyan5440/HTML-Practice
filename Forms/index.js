function say(name) {
    console.log(name);
}
function main() {
    let x = 6;
    console.log(x);
    if (x > 5) {
        x = "julie"
        console.log(x);
    }
    let person = {
        name: "james",
        age: 23
    }

    let seledt = ['read', 34, 'write'];
    seledt[3] = 23;

    person['name'] = 'jessie'

    console.log(person['age']);
    say(person['name']);

    console.log(seledt);
}
