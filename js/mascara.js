const inputTelefone = document.getElementById('telefone');

inputTelefone.addEventListener('input', function (e) {
    let telefone = e.target.value;

    // Remove tudo que não for número
    telefone = telefone.replace(/\D/g, '');

    // Limita o número de dígitos em 11 (2 para o DDD e até 9 para o número)
    telefone = telefone.substring(0, 11);

    // Formatação progressiva:
    // Adiciona o parênteses no DDD após os dois primeiros dígitos
    if (telefone.length >= 2) {
        telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2');
    }

    // Formato para números com 8 dígitos (fixos)
    if (telefone.length >= 10) {
        telefone = telefone.replace(/(\d{4})(\d{4})$/, '$1-$2');
    }

    // Formato para números com 9 dígitos (celulares)
    if (telefone.length === 11) {
        telefone = telefone.replace(/(\d{5})(\d{4})$/, '$1-$2');
    }

    // Atualiza o valor do campo de input
    e.target.value = telefone;
});