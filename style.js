// Selecionando os elementos da página
const btnWifi = document.getElementById('btn-wifi');
const btnDados = document.getElementById('btn-dados');
const resultado = document.getElementById('resultado-voto');

// Adicionando eventos de clique
btnWifi.addEventListener('click', () => {
    resultado.textContent = "Boa escolha! O Wi-Fi costuma ser mais estável para downloads. 🌐";
});

btnDados.addEventListener('click', () => {
    resultado.textContent = "Praticidade em primeiro lugar! Os dados móveis te salvam na rua. 📱";
});