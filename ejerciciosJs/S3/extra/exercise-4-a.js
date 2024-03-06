const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const ul$$ = document.createElement("ul");
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const h4$$ = document.createElement("h4");
    const img$$ = document.createElement("img");
    const div$$ = document.createElement("div");

    h4$$.textContent = country.title;
    img$$.setAttribute("src", country.imgUrl);

    div$$.appendChild(h4$$)
    div$$.appendChild(img$$);

    ul$$.appendChild(div$$);

}
document.body.appendChild(ul$$);