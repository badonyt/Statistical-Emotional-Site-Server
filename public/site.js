const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
btn1.addEventListener("click", function () {
    fetchget("superhappy")
});
btn2.addEventListener("click", function () {
    fetchget("happy")
});
btn3.addEventListener("click", function () {
    fetchget("face")
});
btn4.addEventListener("click", function () {
    fetchget("sad")
});
btn5.addEventListener("click", function () {
    fetchget("supersad")
});

function fetchget(data) {
    let formData = new FormData();
    formData.append('data', String(data));
    console.log(formData)
    //formData.append('password', 'John123');
    fetch("http://localhost:3000/afterpost", {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //body: JSON.stringify({ "Data": String(data) })
        body: data
    });
}

