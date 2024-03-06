async function showAvatar() {
  // leer nuestro JSON
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();

    // leer usuario github
    const betulioo = 'betulioo';
  let githubResponse = await fetch(`https://api.github.com/users/${betulioo}`);
  let githubUser = await githubResponse.json();

  // muestra el avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // espera 3 segundos
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}
showAvatar();