function Animal(name) {
  this.name = name;
}
// 
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

function createAnimal(name) {
  const animal = {
    name
  };

  return animal
}

const winston = new Animal('Winston');
console.log(winston);

const taylor = new Animal('Taylor');
console.log(taylor);

const kila = new Animal('Kila');
console.log(kila);

const keke = createAnimal('KeKe');
console.log(keke);
