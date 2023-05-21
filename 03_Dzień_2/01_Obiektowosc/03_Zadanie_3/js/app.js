const foods = [];

const form = document.querySelector('form');
const list = document.querySelector('#products');
class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }

  print() {
    console.log(
      `${this.name} ma ${this.protein} białka, ${this.carbs} węglowodanów i ${this.fat} tłuszczu.`
    );
  }
}

class FatFreeFood extends Food {} // ponizej 250 kcal

class FastFood extends Food {} // powyzej 250 kcal

const createProduct = (name, kcal) => {
  const liItem = document.createElement('li');
  liItem.innerHTML = `${name} ma ${kcal} kcal`;
  list.appendChild(liItem);
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  const name = formData.get('name');
  const proteins = formData.get('proteins');
  const carbs = formData.get('carbs');
  const fat = formData.get('fat');

  const kcal = Number(proteins) * 4 + Number(fat) * 9 + Number(carbs) * 4;

  createProduct(name, kcal);

  if (kcal > 250) {
    const fastFood = new FastFood(name, proteins, carbs, fat);
    foods.push(fastFood);
  } else {
    const fatFreeFood = new FatFreeFood(name, proteins, carbs, fat);
    foods.push(fatFreeFood);
  }

  console.log(foods);
});