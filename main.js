/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyDvpfoibL19TD8A" }).base(
  "app68AKsQa0Jgl05p"
);

//get the "sneakers" table from the base, select ALL the records, and specify the functions that will receive the data
base("sneakers").select({
    view: "Grid view"
  }).eachPage(gotPageOfSneakers, gotAllSneakers);

// an empty array to hold our sneaker data
const sneakers = [];

// callback function that receives our data
function gotPageOfSneakers(records, fetchNextPage) {
  console.log("gotPageOfSneakers()");
  // add the records from this page to our books array
  sneakers.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSneakers(err) {
  console.log("gotAllBooks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading sneakers");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSneakers();
  showSneakers();
}

// just loop through the books and console.log them
function consoleLogSneakers() {
  console.log("consoleLogSneakers()");
  sneakers.forEach((sneaker) => {
    console.log("Sneaker:", sneaker);
  });
}

    // // get genre field from airtable
    // // loop through array
    // // addeach category as a class to the song container

    // var sneakerDesign = sneakers.fields.designer;
    // sneakerDesign.forEach(function(designer) {
    //   songContainer.classList.add(designer);
    // });
    
// loop through the books, create an h2 for each one, and add it to the page
function showSneakers() {
  console.log("showSneakers()");
  sneakers.forEach((sneaker) => {

//creating div container
    var sneakerContainer = document.createElement("div");
    sneakerContainer.classList.add("sneaker-container");
    document.querySelector(".container").append(sneakerContainer);


    //adding titles

    var sneakerTitle = document.createElement("h1");
    sneakerTitle.classList.add("sneaker-title");
    sneakerTitle.innerText = sneaker.fields.sneaker_name;
    sneakerContainer.append(sneakerTitle);

    //add images

    var sneakerImage = document.createElement("img");
    sneakerImage.classList.add("sneaker-image");
    sneakerImage.src = sneaker.fields.image[0].url;
    sneakerContainer.append(sneakerImage);

    // add designer

    var sneakerDesigner = document.createElement("h2");
    sneakerDesigner.classList.add("sneaker-designer");
    sneakerDesigner.innerText = sneaker.fields.designer;
    sneakerContainer.append(sneakerDesigner);

    //add description

    var sneakerDescription = document.createElement("h2");
    sneakerDescription.classList.add("sneaker-description");
    sneakerDescription.innerText = sneaker.fields.description;
    sneakerContainer.append(sneakerDescription);

    //add retail price

        var sneakerRetail = document.createElement("h2");
        sneakerRetail.classList.add("sneaker-retail");
        sneakerRetail.innerText = sneaker.fields.retail_price;
        sneakerContainer.append(sneakerRetail);

    //add retail price

        var sneakerResale = document.createElement("h2");
        sneakerResale.classList.add("sneaker-resale");
        sneakerResale.innerText = sneaker.fields.current_resell_price;
        sneakerContainer.append(sneakerResale);

    //add target audience

    var sneakerAudience = document.createElement("h2");
    sneakerAudience.classList.add("sneaker-audience");
    sneakerAudience.innerText = sneaker.fields.marketed_to;
    sneakerContainer.append(sneakerAudience);

    //add release date

    var sneakerDate = document.createElement("h2");
    sneakerDate.classList.add("sneaker-date");
    sneakerDate.innerText = sneaker.fields.release_date;
    sneakerContainer.append(sneakerDate);

    //add drop count

    var sneakerDrop = document.createElement("h2");
    sneakerDrop.classList.add("sneaker-drop");
    sneakerDrop.innerText = sneaker.fields.drop_count;
    sneakerContainer.append(sneakerDrop);

    //add style number

    var sneakerStyle = document.createElement("h2");
    sneakerStyle.classList.add("sneaker-style");
    sneakerStyle.innerText = sneaker.fields.style;
    sneakerContainer.append(sneakerStyle);

    //add color

    var sneakerColor = document.createElement("h2");
    sneakerColor.classList.add("sneaker-color");
    sneakerColor.innerText = sneaker.fields.color_way;
    sneakerContainer.append(sneakerColor);

    //  //add volatility

    //  var sneakerVolatile = document.createElement("h2");
    //  sneakerVolatile.classList.add("sneaker-volatility");
    //  sneakerVolatile.innerText = sneaker.fields.volatility;
    //  sneakerContainer.append(sneakerVolatile);
 

    //add event listener
    //when user clicks, image and description appear or disappear
        sneakerContainer.addEventListener("click", function(){
            sneakerDescription.classList.toggle("active");
            sneakerImage.classList.toggle("active");
            sneakerDesigner.classList.toggle("active");
            sneakerRetail.classList.toggle("active");
            sneakerResale.classList.toggle("active");
            sneakerAudience.classList.toggle("active");
            sneakerDate.classList.toggle("active");
            sneakerDrop.classList.toggle("active");
            sneakerStyle.classList.toggle("active");
            sneakerColor.classList.toggle("active");
        })

        
    // var sneakerDesigner = document.createElement("p");
    // sneakerDesigner.innerText = sneaker.fields.designer;
    // document.body.append(sneakerDesigner);

    // var sneakerImage = document.createElement("img");
    // sneakerImage.src = sneaker.fields.image[0].url;
    // document.body.append(sneakerImage);
    // document.querySelector(".container").append(sneakerImage);

    // var sneakerDesigner = document.createElement("h1");
    // sneakerDesigner.innertext = sneaker.fields.designer;
    // document.body.append(sneakerDesigner);
  });
}

