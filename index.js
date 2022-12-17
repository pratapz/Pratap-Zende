console.log("Javascript connected");

let works = [
  {
    name: "SQL Query Builder",
    link: "temp.html",
    image: "",
    desc: "SQl Query Builder",
  },
  {
    name: "SQL Query Builder",
    link: "temp.html",
    image: "",
    desc: "SQl Query Builder",
  },
  {
    name: "SQL Query Builder",
    link: "temp.html",
    image: "",
    desc: "SQl Query Builder",
  },
  {
    name: "SQL Query Builder",
    link: "temp.html",
    image: "",
    desc: "SQl Query Builder",
  },
  {
    name: "SQL Query Builder",
    link: "temp.html",
    image: "",
    desc: "SQl Query Builder",
  },
];

let writings = [
  {
    name: "Anatomy of react JS",
    link: "temp.html",
    image: "",
    desc: "Anatomy of react JS",
  },
  {
    name: "Anatomy of react JS",
    link: "temp.html",
    image: "",
    desc: "Anatomy of react JS",
  },
  {
    name: "Anatomy of react JS",
    link: "temp.html",
    image: "",
    desc: "Anatomy of react JS",
  },
  {
    name: "Anatomy of react JS",
    link: "temp.html",
    image: "",
    desc: "Anatomy of react JS",
  },
];

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

  data.forEach((result) => {
      const card = document.createElement("div");
      card.classList = "card card-content";

      let name = document.createTextNode("Name: " + result.name);
      card.appendChild(name);

      let br = document.createElement("br");
      card.appendChild(br);

      let desc = document.createTextNode("Gist: " + result.desc);
      card.appendChild(desc);

      let btn = document.createElement('button');
      btn.innerHTML = "<a href = '"+result.link+"'> Visit Project </a>"
      btn.classList = 'btn'
      // card.appendChild(btn);



      card.onclick = function() {
        window.location.href = result.link;
      } ;
      
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

loader();
assignCards();
