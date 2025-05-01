const input = document.querySelector("#name-input")
const button = document.querySelector("#submit-button")
const pGreeting = document.querySelector("#greeting")
const pKey = document.querySelector("#current-key")
const pLocation = document.getElementById("location")

// button.addEventListener("click", () => {
//     const name = input.value;
//     pGreeting.innerText = `Hello ${name}`
// })

input.addEventListener("input", () => {
    const name = input.value;
    pGreeting.innerText = `Hello ${name}`
})

document.addEventListener("keydown", (event) => {
    pKey.innerHTML = `Key: ${event.key}`;
})

document.addEventListener("mousemove", (event) => {
    pLocation.innerHTML = `(${event.clientX},${event.clientY})`
})