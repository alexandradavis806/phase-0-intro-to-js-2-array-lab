// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
    return cats.push(name);
}

console.log(destructivelyAppendCat("Ralph"))
console.log(cats)

const destructivelyPrependCat = name => {
    return cats.unshift(name);
}

console.log(destructivelyPrependCat("Bob"));
console.log(cats)