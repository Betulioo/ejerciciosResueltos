const div$$ = document.createElement("div");
const ul$$ = document.createElement("ul")
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];


for (let i = 0; i < apps.length; i++) {
    const li$$ = document.createElement("li");
    li$$.textContent= apps[i]
    ul$$.appendChild(li$$);
}

div$$.appendChild(ul$$);
document.body.appendChild(div$$);