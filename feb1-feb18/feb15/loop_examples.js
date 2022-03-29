let num = 0;
while (num < 10){
    num++;
    console.log(num);
}
console.log("do while loop below");

do {
    num++;
    console.log(num);
} while(num < 15);

let result = " ";
let i = 0;

do{
    i = i + 1;
    result = result + i;    
} while(i < 5);
console.log(result);

let person = {"firstName": "Max", "middleName": "Suller", "lastName": "Miravite"};

//FOR IN LOOP EXAMPLE BELOW

for (let propp in person){
    document.write(`<p>${propp}:${person[propp]}</p>`);
}

let animals = ["cat", "dog", "bird", "fish"];
for(let animal in animals){
    document.write(`${animal}: ${animals[animal]}<br>`)
}

let fruit = ["mango", "apple", "orange", "pineapple"];
for(var kind of fruit){
    document.write(`${kind}<br>`);
}

let greeting = "Hello World";
for(var letter of greeting){
    document.write(`${letter} <br>`);
}