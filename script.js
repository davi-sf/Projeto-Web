const pegaLinks = document.querySelectorAll(".lang-link")

var texts = {
  en: {
    linkedin: "Check out my LinkedIn",
    resume: "Download my resume",
    github: "Check out my Github",
    contact: "Contact me",
    name: "Davi Soares",
  },

  "pt-br": {
    linkedin: "Conheça meu LinkedIn",
    resume: "Conheça meu currículo",
    github: "Conheça meu Github",
    contact: "Fale comigo",
  },
}

pegaLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    var lang = link.getAttribute("language")
    mudaTexto(lang)
    if (lang === "en") {
      var resumeLink = document.querySelector(
        "a[href='https://drive.google.com/file/d/1Dx30i4pSqNmEpkCYjJ5hbx5fOjH_ix_D/view?usp=sharing']"
      )
      resumeLink.href =
        "https://drive.google.com/file/d/1F5zDq6nJoXHw3UirjeSMce9sAFnxEMo-/view?usp=sharing"
    }
  })
})

function mudaTexto(lang) {
  var elementos = document.querySelectorAll("[data-lang]")
  elementos.forEach(function (element) {
    var key = element.getAttribute("data-lang")
    element.innerText = texts[lang][key]
  })
}

mudaTexto("pt-br")
