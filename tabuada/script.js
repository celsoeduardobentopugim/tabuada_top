
function proucurarTabuada() {
    const numero = document.getElementById('numero').value;
    const tabuadaDiv = document.getElementById('tabuada');

    tabuadaDiv.innerHTML = ''; // Limpa o conteúdo anterior

    if (numero === '') {
        tabuadaDiv.innerHTML = '<div>Por favor, digite um número.</div>';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const linha = document.createElement('div');
        linha.textContent = `${numero} x ${i} = ${resultado}`;
        tabuadaDiv.appendChild(linha);
    }
}
