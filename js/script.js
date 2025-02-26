function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}

document.getElementById("customForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Pegando os valores dos inputs
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value; // Verifique se este campo existe

    // IDs do Google Forms (use os IDs CORRETOS)
    let formID = "1FAIpQLScHCQGbSFOhUYn7_UrYGdLZKjboSwvNugFq4UeZil9PX68Ncw";
    let entryNome = "entry.822909140";
    let entryEmail = "entry.294210811";
    let entryData = "entry.431940991"; // Remova se não for necessário

    // Criando os dados para envio
    let formData = new URLSearchParams();
    formData.append(entryNome, nome);
    formData.append(entryEmail, email);
    formData.append(entryData, data); // Remova se necessário

    // URL do Google Forms
    let googleFormURL = `https://docs.google.com/forms/d/e/${formID}/formResponse`;

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Data:", data);
    console.log("Enviando para:", googleFormURL);
    console.log("Dados enviados:", formData.toString());

    // Enviar dados usando fetch()
    fetch(googleFormURL, {
        method: "POST",
        body: formData
    }).then(() => {
        document.getElementById("status").textContent = "Formulário enviado com sucesso!";
        document.getElementById("customForm").reset();
    }).catch((error) => {
        console.log("Erro:", error);
        document.getElementById("status").textContent = "Erro ao enviar o formulário.";
    });
});
