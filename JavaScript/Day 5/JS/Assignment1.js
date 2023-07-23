// Using document object method on the lecture’s HTML page
// a- Find all images in page by two ways (document default collection and document methods).
// Document Default Collection
console.log(document.images);
// Document Methods
console.log(document.getElementsByTagName("img"));
console.log(document.querySelectorAll("img"));

// b- Find all options for City drop down list.
let options = document.querySelectorAll("select option")
console.log(options);
for(let i = 0 ; i < options.length ; i++) {
  console.log(options[i].innerHTML);
}


// c- Find all rows(tds) for second table in page.
// Rows
console.log(document.querySelectorAll("table.bPink tr"));
// Cells
console.log(document.querySelectorAll("table.bPink td"));


// d- Find all elements that contain class name fontBlue and BGrey.
console.log(document.querySelectorAll(".fontBlue.bGrey"));
console.log(document.getElementsByClassName("fontBlue bGrey"));
