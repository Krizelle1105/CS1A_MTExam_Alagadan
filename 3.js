let age = prompt("Enter your age:");
age = Number(age);
let category;

if (age<5) {
    category = "Toddler (under 5 years)";
} else if (age >=5 && age <=12) {
    category = "Child (5-12 years)";
} else if (age >=13 && age <=19) {
    category = "Teenager (13-19 yaers)";
} else if (age >=20 && age <=35) {
    category = "Young Adult (20-35 years";
} else if (age <=36 && age <=60) {
    category = "Middle Aged (36-60 years)";
} else {
    category = "Senior (over 60 yaers)";
}

console.log('You belong to the category:${category}');
