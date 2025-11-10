// DOM Node
const root = document.querySelector(".root");

//1. createElement()
const h1 = document.createElement("h1");
h1.innerText = "ThanhDora";
h1.className = "title";
console.log(h1);

//append
root.append(h1);

const h2 = document.createElement("h2");
h2.innerText = "Apple";

//prepend
root.prepend(h2);

const btn = document.createElement("button");
btn.innerText = "Click me";
btn.addEventListener("click", () => {
  h1.innerText = "ThanhDora is a good boy";
});
root.append(btn);

//ínetrBefore
const h3 = document.createElement("h3");
h3.innerText = "Banana";
root.insertBefore(h3, h1);

//3. replaceChild()
const h4 = document.createElement("h4");
h4.innerText = "Cherry";
root.replaceChild(h4, h3);

//4. removeChild()
root.removeChild(h4);

//5. textNode
const counterHeading = document.createElement("h2");
counterHeading.innerText = "Count: ";
// const span = document.createElement("span");
// span.innerText = 0;
const textNode = document.createTextNode(0);
counterHeading.append(textNode);
root.append(counterHeading);
const plusBtn = document.createElement("button");
plusBtn.innerText = "+";
plusBtn.addEventListener("click", () => {
  textNode.data++;
});
root.append(plusBtn);
