console.log("Javascript connected");

let works = [
  {
    name: "Portfolio",
    link: "https://github.com/pratapz/Pratap-Zende",
    image: "./Icons/github-mark-white.png",
    desc: "Code of this site",
  }
];

let writings = [];

let elements = ["works", "writings"];

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

function setFocus(id) {
  console.log(id);
  switch (id) {
    case "goHome":
      document.getElementById("home").focus();
      break;
    case "goProjects":
      document.getElementById("projects").focus();
      break;
    case "goAbout":
      document.getElementById("about").focus();
      break;
    case "goContact":
      document.getElementById("contact").focus();
      break;
    case "goBlogs":
      document.getElementById("blogs").focus();
      break;

    default:
      break;
  }
}

async function loader() {
  try {
    var loaded = window.addEventListener("load", async function () {
      document.getElementById("site").style.display = "none";
      // document.getElementById("name").classList.add('hover');
      hoverElements("name");
      await sleep();
      document.getElementById("preloader").style.display = "none";
      document.getElementById("site").style.display = "";
    });
  } catch (error) {
    console.log("ERROR -->" + error);
  }
}

function hoverElements(id) {
  let element = document.getElementById(id);
  element.addEventListener("mouseover", function () {
    // console.log("Event Triggered");
  });

  var event = new MouseEvent("mouseover", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  element.dispatchEvent(event);
}

function createCard(data) {
  
  const cardBundle = document.createElement('div');
  cardBundle.classList = 'card-bundle';

  if (data.length == 0){

    console.log("inside if");

    const card = document.createElement("div");
    card.classList = ' card container card-content'

    let message = document.createTextNode("Coming Soon");
    // message.style.color = "black";
    card.appendChild(message);

    console.log(card);

    cardBundle.appendChild(card);

    cardBundle.classList = 'container card-bundle-empty';


    return cardBundle;

  }

  data.forEach((result) => {
      const card = document.createElement("div");
      card.classList = "card container card-content";

      let name = document.createTextNode("Name: " + result.name);
      card.appendChild(name);

      let br = document.createElement("br");
      card.appendChild(br);

      let desc = document.createTextNode("Gist: " + result.desc);
      card.appendChild(desc);

      card.onclick = function() {
        window.location.href = result.link;
      } ;

      card.style.backgroundImage = "url('"+result.image+"')"
      
      cardBundle.appendChild(card);

      console.log(card);
      
    });
    
    return cardBundle;

}

function assignCards() {
  window.onload = () => {
    
    const parent1 = document.getElementById("works");
    parent1.appendChild(createCard(works));
    
    const parent2 = document.getElementById("writings");
    parent2.appendChild(createCard(writings));
  
  };
}

function openEmail() {
  // window.open(String('mailto:test^example.com').repeat('^','@'));
  let gmail = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pratapzende31@gmail.com'
  location.href = gmail;
  
}

loader();
assignCards();
