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

// question 8

function createCats(cats) {
    let temporaryHtml = "";
    for (let i = 0; i < cats.length; i++) {
        // This was the way we wore taught in the lecture creating HTML from objects - part 1
        // but with the null-coalescing-operator the cats age can still be 0, if its less than one year old.
        //https://scotch.io/tutorials/javascripts-null-coalescing-operator

        /*
        let catAge = "Age unknown";
        if (cats[i].age){
            catAge = cats[i].age;
        }
        temporaryHtml += `<div class="cat">
            <h5>${cats[i].name}</h5>
            <p>${catAge}</p>   
        </div>
        `;
        */

        temporaryHtml += `<div class="cat">
            <h5>${cats[i].name}</h5>
            <p>${cats[i].age ?? 'Age unknown'}</p>   
        </div>
        `;
    }
    const catContainer = document.querySelector("div.cat-container");
    catContainer.innerHTML = temporaryHtml;
}

createCats(cats);
