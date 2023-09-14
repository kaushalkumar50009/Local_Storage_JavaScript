const form = document.querySelector(".form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const getDataBtn = document.querySelector(".outputBtn__1");
const clearBtn = document.querySelector(".outputBtn__2");
const box = document.querySelector(".box");

// submit form and store data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  acceptData()

});

let data = []

let acceptData = () => {
  //storing data as object with name email and message
  data.push({
    name: name.value,
    email: email.value,
    message: message.value,
  });

  // set the items in local storage as object if you will not use JSON.stringify it will store like this ===== data:"[object Object]"
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);

  // clear input field after submit
  name.value = "";
  email.value = "";
  message.value = "";

};

clearBtn.addEventListener("click", () => {
  localStorage.clear();
});


getDataBtn.addEventListener("click", () => {
  data = JSON.parse(localStorage.getItem("data")) || []
  const showData = data.map((item) => {
    const { name, email, message } = item
    return `<p>My Name is ${name}, Email Id is ${email} and message is ${message} </p>`;
  }).join(" ")
  box.insertAdjacentHTML("afterbegin", showData)

});

