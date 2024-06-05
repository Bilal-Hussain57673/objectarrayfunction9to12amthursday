// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your 
// friend list
var people = {
    friends: []
};
var friend1 = {
    firstName: "bilal",
    lastName: "hussain",
    id: 11,
};
var friend2 = {
    firstName: "kinza",
    lastName: "bilal",
    id: 22,
};
var friend3 = {
    firstName: "zoha",
    lastName: "fatima",
    id: 33,
};
var friend4 = {
    firstName: "qaima",
    lastName: "fatima",
    id: 44,
};
people.friends.push(friend1, friend2, friend3, friend4);
console.log(people);
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray[2] = (scrambledArray[2]);
scrambledArray[3] = (scrambledArray[3]);
scrambledArray.unshift(scrambledArray.pop());
scrambledArray.splice(2, 0, scrambledArray.splice(4, 1)[0]);
scrambledArray.splice(5, 0, scrambledArray.splice(6, 1)[0]);
var result = scrambledArray.join("");
console.log(result);
// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product 
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.
var inventory = [];
var product1 = {
    name: "product1",
    model: "Model 1",
    cost: 20,
    quantity: 9,
};
var product2 = {
    name: "product2",
    model: "model 2",
    cost: 40,
    quantity: 13,
};
var product3 = {
    name: "product3",
    model: "model 3",
    cost: 60,
    quantity: 19,
};
inventory.push(product1, product2, product3);
console.log('Quantity of ${inventory[2].name}:  ${inventory[2].quantity}');
inventory.push({ name: "product 4", model: "Model 4", cost: 8.99, quqntity: 12 });
console.log('total products in inventory:  ${inventory.length}');
console.log('cost of ${inventory[1].name}: ${inventory[1].cost}');
;
var students = [
    {
        name: "bilal",
        senior: true,
        assignmentscompleted: true,
    },
    {
        name: "kinza",
        senior: false,
        assignmentscompleted: false,
    },
    {
        name: "zoha",
        senior: true,
        assignmentscompleted: true,
    },
    {
        name: "qaima",
        senior: false,
        assignmentscompleted: true,
    },
    {
        name: "roha",
        senior: true,
        assignmentscompleted: false,
    },
];
function findSeniorStudentWithAssignments() {
    return students.filter(function (student) { return student.senior && student.assignmentscompleted; });
}
function updateClassList() {
    students = students.filter(function (student) { return student.assignmentscompleted || !student.senior; });
}
console.log(findSeniorStudentWithAssignments());
updateClassList();
console.log(students);
