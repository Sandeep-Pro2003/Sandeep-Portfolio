
const menuBar = document.querySelector(".menubar");
console.log(menuBar);
function toggleMenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu';
  menuBar.classList.toggle("top-[7%]");
}

let count = 0;
let process = document.querySelector("#process");
let percentage = document.querySelector("#percentage");
let progressStatus = document.querySelector("#status");
let interval1 = setInterval(function () {
  if (count < 80) {
    count++
    process.style.width = `${count}%`;
    percentage.style.width = `${count}%`;
    progressStatus.textContent = `${count}%`;
  } else {
    clearInterval(interval1);
  }
}, 30)
let css = 0;
let processCss = document.querySelector("#processCss");
let percentageCss = document.querySelector("#percentageCss");
let progressStatusCss = document.querySelector("#statusCss");
let interval2 = setInterval(function () {
  if (css < 75) {
    css++
    processCss.style.width = `${css}%`;
    percentageCss.style.width = `${css}%`;
    progressStatusCss.textContent = `${css}%`;
  } else {
    clearInterval(interval2);
  }
}, 30)
let js = 0;
let processjs = document.querySelector("#processjs");
let percentagejs = document.querySelector("#percentagejs");
let progressStatusjs = document.querySelector("#statusjs");
let interval3 = setInterval(function () {
  if (js < 70) {
    js++
    processjs.style.width = `${js}%`;
    percentagejs.style.width = `${js}%`;
    progressStatusjs.textContent = `${js}%`;
  } else {
    clearInterval(interval3);
  }
}, 30)
let php = 0;
let processphp = document.querySelector("#processphp");
let percentagephp = document.querySelector("#percentagephp");
let progressStatusphp = document.querySelector("#statusphp");
let interval4 = setInterval(function () {
  if (php < 80) {
    php++;
    processphp.style.width = `${php}%`;
    percentagephp.style.width = `${php}%`;
    progressStatusphp.textContent = `${php}%`;
  } else {
    clearInterval(interval4);
  }
}, 30)
let db = 0;
let processdb = document.querySelector("#processdb");
let percentagedb = document.querySelector("#percentagedb");
let progressStatusdb = document.querySelector("#statusdb");
let interval5 = setInterval(function () {
  if (db < 80) {
    db++;
    processdb.style.width = `${db}%`;
    percentagedb.style.width = `${db}%`;
    progressStatusdb.textContent = `${db}%`;
  } else {
    clearInterval(interval5);
  }
}, 30)
let cr = 0;
let inc = document.querySelector("#inc");
setInterval(() => {
  if (cr < 85) {
    cr++;
    inc.innerHTML = cr + "%";
  }
  else {
    clearInterval();
  }
}, 24)
let cr1 = 0;
let inc1 = document.querySelector("#inc1");
setInterval(() => {
  if (cr1 < 70) {
    cr1++;
    inc1.innerHTML = cr1 + "%";
  }
  else {
    clearInterval();
  }
}, 30)
let cr2 = 0;
let inc2 = document.querySelector("#inc2");
setInterval(() => {
  if (cr2 < 70) {
    cr2++;
    inc2.innerHTML = cr2 + "%";
  }
  else {
    clearInterval();
  }
}, 30)
let cr3 = 0;
let inc3 = document.querySelector("#inc3");
setInterval(() => {
  if (cr3 < 80) {
    cr3++;
    inc3.innerHTML = cr3 + "%";
  }
  else {
    clearInterval();
  }
}, 24)

function sendEmail() {
  Email.send({
    Host: "s1.gmail.in",
    Username: "sandeepproj0@gmail.com",
    Password: "sharma@365",
    To: 'sandeepproj0@gmail.com',
    From: document.querySelector("#email").value,
    Subject: "New Contact from Portfolio Site",
    Body: "Name: " + document.querySelector("#name").value
      + "<br> Email: " + document.querySelector("#email").value
      + "<br> Subject: " + document.querySelector("#subject").value
      + "<br> Message: " + document.querySelector("#message").value
  }).then(
    message => alert("Message sent Successfully")
  );
}