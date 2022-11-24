// lvl 1 - 1.
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const p1 = document.querySelector('p');
console.log(p1);


// lvl 1 - 3.
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const nodeList = document.querySelectorAll('#name');
console.log(nodeList);


// lvl 1 - 4
// Loop through the nodeList and get the text content of each paragraph

function printEl() {
    for (let i = 0; i < nodeList.length; i++) {
        console.log(nodeList[i]);
    }
}
printEl();

// lvl 1 - 5
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph

nodeList[3].innerHTML = 'Fourth Paragraph';

// lvl 1 - 5
// Set id and class attribute for all the paragraphs using different attribute setting methods

p1.classList.add('add')

nodeList[2].className = 'className'
// // lvlv 2 - 1
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

nodeList.forEach((p, i) => {
    p.style.fontSize = '40px';
    p.style.color = 'blue';  
    p.style.fontFamily = 'roboto';
    p.style.border = '2px dotted white';
    p.style.backgroundColor = 'white';

})

// lvl 2 - 1
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


nodeList.forEach((title, i) => {
  title.style.fontSize = '50px' //
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
});

