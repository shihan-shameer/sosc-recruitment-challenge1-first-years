document.getElementById("info-btn").addEventListener("click", () => {
    alert("JS effect working!");
});

// create floating particles
for (let i = 0; i < 40; i++) {
    let dot = document.createElement("span");
    dot.style.left = Math.random() * window.innerWidth + "px";
    dot.style.animationDuration = 3 + Math.random() * 5 + "s";
    dot.style.opacity = Math.random();
    document.body.appendChild(dot);
}
// Hover animation on name
const name = document.getElementById("name");
name.addEventListener("mouseover", () => {
    name.style.color = "#00ffcc";
});
name.addEventListener("mouseout", () => {
    name.style.color = "white";
});
