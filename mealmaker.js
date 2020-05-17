const menu = {
    
    // Courses Object
_courses: {
    appetizers: [],
    mains: [],
    desserts:[],
},
    
//Getters and setters for meals
get appetizers() {
    return this._courses.appetizers;
},     
get mains() {
    return this._courses.mains;
    }, 
get desserts() {
    return this._courses.desserts;
    },
set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
    },
set mains(mains) {
    this._courses.mains = mains;
    },
set desserts(desserts) {
    this._courses.appetizers = desserts;
    },
        
//Function to Get Courses        
  get courses() {
    return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
    };
},

    
//Add Dish to Course
addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
        name: dishName,
        price: dishPrice,
    };
    return this._courses[courseName].push(dish); 
},
    
//Get a random dish from a course    
getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
},    

//Generate the Random Meal
generateRandomMeal() {
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('mains');
const dessert = this.getRandomDishFromCourse('desserts');
let totalPrice = appetizer.price + main.price + dessert.price;
return `Your meal is ${appetizer.name} and ${main.name} and ${dessert.name} and it costs ${totalPrice} dollars.`;
}       
};

//Appetizers
menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'calamari', 10.00);
menu.addDishToCourse('appetizers', 'garlic bread', 6.00);

//Main dishes
menu.addDishToCourse('mains', 'burger', 5.00);
menu.addDishToCourse('mains', 'salmon', 12.00);
menu.addDishToCourse('mains', 'pasta', 6.00);

//Desserts
menu.addDishToCourse('desserts', 'cannoli', 3.00);
menu.addDishToCourse('desserts', 'cookie', 2.00);
menu.addDishToCourse('desserts', 'ice cream', 3.00);


const meal = menu.generateRandomMeal();
console.log(meal);
