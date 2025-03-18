function mostrarAviso(mensagem) {
    const aviso = document.getElementById("aviso");
    aviso.textContent = mensagem;
    aviso.style.display = "block"; // Mostra o aviso
    setTimeout(() => {
        aviso.style.display = "none"; // Oculta o aviso após 3 segundos
    }, 3000);
}

function converterDeBinario() {
    let binario = document.getElementById("binario").value;
    if (!/^[01]*$/.test(binario)) {
        mostrarAviso("Digite apenas 0 ou 1 no campo binário.");
        document.getElementById("binario").value = binario.replace(/[^01]/g, '');
        return;
    }

    let decimal = parseInt(binario, 2);
    document.getElementById("octal").value = decimal.toString(8);
    document.getElementById("decimal").value = decimal;
    document.getElementById("hexadecimal").value = decimal.toString(16).toUpperCase();
}

function converterDeOctal() {
    let octal = document.getElementById("octal").value;
    if (!/^[0-7]*$/.test(octal)) {
        mostrarAviso("Digite apenas números de 0 a 7 no campo octal.");
        document.getElementById("octal").value = octal.replace(/[^0-7]/g, '');
        return;
    }

    let decimal = parseInt(octal, 8);
    document.getElementById("binario").value = decimal.toString(2);
    document.getElementById("decimal").value = decimal;
    document.getElementById("hexadecimal").value = decimal.toString(16).toUpperCase();
}

function converterDeDecimal() {
    let decimal = document.getElementById("decimal").value;
    if (!/^\d*$/.test(decimal)) {
        mostrarAviso("Digite apenas números inteiros no campo decimal.");
        document.getElementById("decimal").value = decimal.replace(/[^\d]/g, '');
        return;
    }

    decimal = parseInt(decimal, 10);
    document.getElementById("binario").value = decimal.toString(2);
    document.getElementById("octal").value = decimal.toString(8);
    document.getElementById("hexadecimal").value = decimal.toString(16).toUpperCase();
}

function converterDeHexadecimal() {
    let hexadecimal = document.getElementById("hexadecimal").value;
    if (!/^[0-9A-Fa-f]*$/.test(hexadecimal)) {
        mostrarAviso("Digite apenas números de 0-9 ou letras A-F no campo hexadecimal.");
        document.getElementById("hexadecimal").value = hexadecimal.replace(/[^0-9A-Fa-f]/g, '');
        return;
    }

    let decimal = parseInt(hexadecimal, 16);
    document.getElementById("binario").value = decimal.toString(2);
    document.getElementById("octal").value = decimal.toString(8);
    document.getElementById("decimal").value = decimal;
}