document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    document.getElementById("message").textContent = "Enviando...";
    document.getElementById("message").style.display = "block";
    document.getElementById("submit-button").disabled = true;

    // Collect the form data
    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
        keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to your Google Apps Script
    fetch(
        "https://script.google.com/macros/s/AKfycbxBRk_J0iWZa6N_uA83oFnOY2trjtV8sUQJwvjCCS3X7k_BEn2oLrIIvzSoWoFHMZZ3lg/exec",
        {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
        }
    )
        .then(function (response) {
            // Check if the request was successful
            if (response) {
                return response; // Assuming your script returns JSON response
            } else {
                throw new Error("Erro ao enviar o formulário.");
            }
        })
        .then(function (data) {
            // Display a success message
            document.getElementById("message").textContent =
                "Enviado com sucesso!";
            document.getElementById("message").style.display = "block";
            document.getElementById("message").style.backgroundColor = "var(--cor3)";
            document.getElementById("message").style.color = "white";
            document.getElementById("submit-button").disabled = false;
            document.getElementById("form").reset();

            setTimeout(function () {
                document.getElementById("message").textContent = "";
                document.getElementById("message").style.display = "none";
            }, 2600);
        })
        .catch(function (error) {
            // Handle errors, you can display an error message here
            console.error(error);
            document.getElementById("message").textContent =
                "Um erro ocorreu ao enviar o formulário. Por favor, tente novamente.";
            document.getElementById("message").style.display = "block";
        });
});