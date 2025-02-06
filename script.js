let display = document.getElementById('display');

function adicionar(valor) {
    display.value += valor;
}

function limparTudo() {
    display.value = '';
}

function limpar() {
    display.value = '';
}

function deletar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}
