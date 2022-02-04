window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start script");

  // fetching json with an async function
  async function getData() {
    const jsonActors = await fetch("actors.json");
    actors = await jsonActors.json();

    console.log(actors);
    showActorsList();
  }

  getData();
}

function showActorsList() {
  const container = document.querySelector("#container_with_actors");
  const template = document.querySelector("template");

  actors.forEach((actor) => {
    let cloneTemplate = template.cloneNode(true).content;
    // document.querySelector(".image").innerHTML += `<img src="${movie.svg}" alt="movie icon">`;
    cloneTemplate.querySelector(".fullname").textContent = "Actor: " + actor.fullname;
    cloneTemplate.querySelector(".image").addEventListener("click", () => showDetails(actor));
    container.appendChild(cloneTemplate);
  });
}

document.querySelector("#popup button").addEventListener("click", closePopup);

function closePopup() {
  document.querySelector("#popup").style.display = "none";
}

function showDetails(detailsActor) {
  console.log("popup open");

  const popup = document.querySelector("#popup");
  popup.style.display = "block";
  popup.querySelector(".fullname").textContent = "Actor: " + detailsActor.fullname;
  popup.querySelector(".movie").textContent = "Movie: " + detailsActor.movie;
}
