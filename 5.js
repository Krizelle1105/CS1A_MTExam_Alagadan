let favColors = [];

for (let i=0; i<3; i++) {
    let color = prompt('Enter your favorite color (${i+1}/3):');
    favColors.push(color); //Add the color to the array
    console.log('Updated color list:', favColors); //Print updated array
}

console.log("Your favorite colors are:", favColors);