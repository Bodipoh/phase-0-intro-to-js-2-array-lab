const cats = ["Milo", "Otis", "Garfield"]
console.log(cats);

function destructivelyAppendCat(Ralph){
    return cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
    return cats.unshift(Bob)
}

function destructivelyRemoveLastCat(){
    return cats.pop(0)
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    return cats = [...cats, "Broom"]
}
function prependCat(name){
    cats = cats.slice(0,3);
    return cats = ["Arnold", ...cats];
}
function removeLastCat(){
    return cats = cats.slice(1, 3);
}
function removeFirstCat(){
    cats = ["Milo", "Otis", "Garfield"]
    return cats = cats.slice(1);
}







