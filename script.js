function calcular() {
    var homens = parseInt(document.getElementById('homens').value) || 0;
    var mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    var criancas = parseInt(document.getElementById('criancas').value) || 0;

    var carne = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    var frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    var linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    var refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    var cerveja = (homens * 0.8) + (mulheres * 0.5);

    document.getElementById('resultado').innerHTML = `
        <h3>Quantidade de Ingredientes:</h3>
        <p>Carne Bovina: ${carne.toFixed(2)} kg</p>
        <p>Frango: ${frango.toFixed(2)} kg</p>
        <p>Linguiça: ${linguica.toFixed(2)} kg</p>
        <p>Refrigerante: ${refrigerante.toFixed(2)} litros</p>
        <p>Cerveja: ${cerveja.toFixed(2)} litros</p>
    `;
}
