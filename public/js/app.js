const container = document.querySelector(".container")
const teddy = [
  { name: "Chocolate1", image: "images/amul.jpg" },
  { name: "Chocolate2", image: "images/bounty.jpeg" },
  { name: "Chocolate3", image: "images/galaxy.jpeg" },
  { name: "Chocolate4", image: "images/kinder.jpeg" },
  { name: "Chocolate5", image: "images/mandm.jpeg" },
  { name: "Chocolate6", image: "images/snickers.jpeg" },

]
const showTeddy = () => {
    let output = ""
    teddy.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Buy</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showTeddy)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
