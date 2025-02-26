function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}

document.getElementById("customForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    let params = new URLSearchParams(formData).toString();
    let googleFormURL = "https://docs.google.com/forms/d/e/1SsDv3Os0qwtbGkKRvBJwDEYYnDDpnffRmn-hbWjPFqw/formResponse";

    fetch(googleFormURL, {
        method: "POST",
        body: params,
        mode: "no-cors"
    }).then(() => {
        alert("Formulário enviado!");
    }).catch(() => {
        alert("Erro ao enviar.");
    });
});
