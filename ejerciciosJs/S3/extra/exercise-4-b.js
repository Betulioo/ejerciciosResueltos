const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const ul$$ = document.createElement("ul");
const button$$ = document.querySelector("button");

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const h4$$ = document.createElement("h4");
  const img$$ = document.createElement("img");
  const div$$ = document.createElement("div");

  h4$$.textContent = country.title;
  img$$.setAttribute("src", country.imgUrl);

  div$$.appendChild(h4$$);
  div$$.appendChild(img$$);

  ul$$.appendChild(div$$);
}
button$$.addEventListener("click", () => {

    const toRemove = document.querySelector("div");
    
  ul$$.removeChild(toRemove)
  console.log(countries);
});

document.body.appendChild(ul$$);
document.body.appendChild(button$$);

