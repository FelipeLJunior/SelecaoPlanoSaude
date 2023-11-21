function InserirValores() 
{
    const { valorBasicoA, valorStandardA, valorPremiumA } = OperadoraA();
    const { valorBasicoB, valorStandardB, valorPremiumB } = OperadoraB();

    Ordenacao(valorBasicoA, valorBasicoB, valorStandardA, valorStandardB, valorPremiumA, valorPremiumB);
}

function Ordenacao(valorBasicoA, valorBasicoB, valorStandardA, valorStandardB, valorPremiumA, valorPremiumB) 
{
    var valores = [
            {nome : "Basico A", valor : valorBasicoA}, 
            {nome : "Basico B", valor : valorBasicoB}, 
            {nome : "Standard A", valor : valorStandardA}, 
            {nome : "Standard B", valor : valorStandardB}, 
            {nome : "Premium A", valor : valorPremiumA},
            {nome : "Premium B", valor : valorPremiumB}
    ]; 

    for(i = 0; i < valores.length; i++)
    {
        for(j = i; j < valores.length; j++)
        {
            if(valores[i].valor > valores[j].valor)
            {
                var receptor = valores[i];
                valores[i] = valores[j];
                valores[j] = receptor;
            }
        }
    }

    document.getElementById('nomePrimeiro').innerHTML = valores[0].nome;
    document.getElementById('nomeSegundo').innerHTML = valores[1].nome;
    document.getElementById('nomeTerceiro').innerHTML = valores[2].nome;
    document.getElementById('nomeQuarto').innerHTML = valores[3].nome;
    document.getElementById('nomeQuinto').innerHTML = valores[4].nome;
    document.getElementById('nomeSexto').innerHTML = valores[5].nome;
    
    document.getElementById('valorPrimeiro').innerHTML = valores[0].valor.toFixed(2);
    document.getElementById('valorSegundo').innerHTML = valores[1].valor.toFixed(2);
    document.getElementById('valorTerceiro').innerHTML = valores[2].valor.toFixed(2);
    document.getElementById('valorQuarto').innerHTML = valores[3].valor.toFixed(2);
    document.getElementById('valorQuinto').innerHTML = valores[4].valor.toFixed(2);
    document.getElementById('valorSexto').innerHTML = valores[5].valor.toFixed(2);

    document.getElementById('indicacaoPrimeiro').innerHTML = "Baritíssimo";
    document.getElementById('indicacaoSegundo').innerHTML = "Barato";
    document.getElementById('indicacaoTerceiro').innerHTML = "Bom";
    document.getElementById('indicacaoQuarto').innerHTML = "Razoável";
    document.getElementById('indicacaoQuinto').innerHTML = "Caro";
    document.getElementById('indicacaoSexto').innerHTML = "Caríssimo";

}

function OperadoraB()
{
    const imc = CalcularIMC();
    const fatorComorbidade = FatorComorbidade(imc);

    const valorBasicoB = 100 + (fatorComorbidade * 10 * (imc / 10));
    const valorStandardB = (150 + (fatorComorbidade * 15)) * (imc / 10);
    const valorPremiumB = (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10);
    
    return { valorBasicoB, valorStandardB, valorPremiumB };
}

function FatorComorbidade(imc)
{
    var fatorComorbidade = 0;

    if(imc < 18,5) 
    {
        fatorComorbidade += 9;
    } else if(imc >= 18,5 && imc <= 24,9)
    {
        fatorComorbidade += 1;
    } else if(imc >= 25 && imc <= 29,9)
    {
        fatorComorbidade += 6;
    } else if(imc >= 30 && imc <= 34,9)
    {
        fatorComorbidade += 10;
    } else if(imc >= 35 && imc <= 39,9)
    {
        fatorComorbidade += 20;
    } else 
    {
        fatorComorbidade += 30;
    }

    return fatorComorbidade;
}

function OperadoraA() 
{
    const imc = CalcularIMC();
    const idade = Number(document.getElementById('idade').value);

    const valorBasicoA = 100 + (idade * 10 * (imc / 10));
    const valorStandardA = (150 + (idade * 15)) * (imc / 10);
    const valorPremiumA = (200 - (imc * 10) + (idade * 20)) * (imc / 10);
    
    return { valorBasicoA, valorStandardA, valorPremiumA };
}

function CalcularIMC() 
{
    const alturaCm = Number(document.getElementById('alturaCm').value);
    const pesoKg = Number(document.getElementById('pesoKg').value);
    
    const alturaM = alturaCm / 100;
    const imc = pesoKg / (alturaM * alturaM);
    
    return Number(imc.toFixed(1));
}
