// Inizializza EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Es: "74SjfLdfkl3_aSDF2"

// Gestione form
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    company: document.getElementById("company").value,
    message: document.getElementById("message").value
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(() => {
      formMessage.innerText = "Messaggio inviato con successo! Ti ricontatterò al più presto.";
      formMessage.classList.remove("hidden");
      formMessage.classList.add("text-green-400");
      form.reset();
    })
    .catch(() => {
      formMessage.innerText = "Errore nell’invio. Riprova tra poco.";
      formMessage.classList.remove("hidden");
      formMessage.classList.add("text-red-400");
    });

    console.log("EmailJS caricato correttamente!");
});
