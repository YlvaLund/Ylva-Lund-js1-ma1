const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};


// question 2

let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3

heading.style.fontSize = "2em"

// question 4

heading.classList.add("subheading");

// question 5

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
    paragraphs[i].style.color = "red";
}

// question 6

let resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7

function printNames(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

printNames(cats);
