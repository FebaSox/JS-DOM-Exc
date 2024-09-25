console.log("Script attached");

/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text
document.getElementById("node1").textContent = "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text
let node2 = document.getElementsByClassName("node2")[0];
node2.textContent = "I used the getElementsByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text
let h3Tags = document.getElementsByTagName("h3");
for (let h3 of h3Tags) {
    h3.textContent = "I used the getElementsByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// Create a paragraph element
let paragraph = document.createElement("p");
paragraph.textContent = "This node was created using the createElement() method";

// Append the created node to the parent node
let parent = document.getElementById("parent");
parent.appendChild(paragraph);

// Create an <a> element
let anchor = document.createElement("a");
anchor.textContent = "I am a <a> tag";
anchor.href = "#"; // Set a href for the anchor

// Insert the created <a> before the <p> you just created
parent.insertBefore(anchor, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// Replace the "Child Node" with a new <p> element that reads "New Child Node"
let newParagraph = document.createElement("p");
newParagraph.textContent = "New Child Node";
let exerciseContainer3 = document.getElementById("exercise-container3");
exerciseContainer3.replaceChild(newParagraph, document.getElementById("N1"));

// Remove the "New Child Node"
newParagraph.remove();

/*----------- Exercise #4: LIST ITEMS ----------- */

// Create an unordered list element
let ul = document.createElement("ul");

// Iterate over the array values, and create a list item element for each
let list = ["apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)"];
for (let item of list) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
}

// Append the unordered list to the `div#container` under exercise 4
document.getElementById("container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// Function to show modal
function show() {
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    modal.style.color = "white";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";

    // Add close functionality
    modal.onclick = function () {
        modal.remove();
    };

    document.body.appendChild(modal);
}

// Attach show function to button click
document.getElementById("btn").onclick = show;
