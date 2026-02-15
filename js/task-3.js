const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    const text = event.currentTarget.value.trim();
    if (text === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = text;
    }
});
