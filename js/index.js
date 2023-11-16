function InserirValores() 
{
    const { valorBasicoA, valorStandardA, valorPremiumA } = OperadoraA();
    const { valorBasicoB, valorStandardB, valorPremiumB } = OperadoraB();

    document.getElementById('valorBasicoA').innerHTML = valorBasicoA.toFixed(2);
    document.getElementById('valorBasicoB').innerHTML = valorBasicoB.toFixed(2);
    document.getElementById('valorStandardA').innerHTML = valorStandardA.toFixed(2);
    document.getElementById('valorStandardB').innerHTML = valorStandardB.toFixed(2);
    document.getElementById('valorPremiumA').innerHTML = valorPremiumA.toFixed(2);
    document.getElementById('valorPremiumB').innerHTML = valorPremiumB.toFixed(2);

    IndicacaoBasico(valorBasicoA, valorBasicoB);
    IndicacaoStandard(valorStandardA, valorStandardB);
    IndicacaoPremium(valorPremiumA, valorPremiumB);
}

function IndicacaoBasico(planoBasicoA, planoBasicoB) 
{
    if(isNaN(planoBasicoA) || isNaN(planoBasicoB))
    {
        document.getElementById('indicacaoBasicoA').innerHTML = "Impossível calcular";
        document.getElementById('indicacaoBasicoB').innerHTML = "Impossível calcular";
        return ;
    }
    if(planoBasicoA <= planoBasicoB) 
    {
        document.getElementById('indicacaoBasicoA').innerHTML = "Mais indicado";
        document.getElementById('indicacaoBasicoB').innerHTML = "Menos indicado";
    } else 
    {
        document.getElementById('indicacaoBasicoB').innerHTML = "Mais indicado";
        document.getElementById('indicacaoBasicoA').innerHTML = "Menos indicado";
    }
}

function IndicacaoStandard(planoStandardA, planoStandardB) 
{
    if(isNaN(planoStandardA) || isNaN(planoStandardB))
    {
        document.getElementById('indicacaoStandardA').innerHTML = "Impossível calcular";
        document.getElementById('indicacaoStandardB').innerHTML = "Impossível calcular";
        return ;
    }
    if(planoStandardA <= planoStandardB) 
    {
        document.getElementById('indicacaoStandardA').innerHTML = "Mais indicado";
        document.getElementById('indicacaoStandardB').innerHTML = "Menos indicado";
        
    } else 
    {
        document.getElementById('indicacaoStandardB').innerHTML = "Mais indicado";
        document.getElementById('indicacaoStandardA').innerHTML = "Menos indicado";
    }
}

function IndicacaoPremium(planoPremiumA, planoPremiumB) 
{
    if(isNaN(planoPremiumA) || isNaN(planoPremiumB)) 
    {
        document.getElementById('indicacaoPremiumA').innerHTML = "Impossível calcular";
        document.getElementById('indicacaoPremiumB').innerHTML = "Impossível calcular";
        return ;
    }

    if(planoPremiumA <= planoPremiumB) 
    {
        document.getElementById('indicacaoPremiumA').innerHTML = "Mais indicado";
        document.getElementById('indicacaoPremiumB').innerHTML = "Menos indicado";
        
    } else 
    {
        document.getElementById('indicacaoPremiumB').innerHTML = "Mais indicado";
        document.getElementById('indicacaoPremiumA').innerHTML = "Menos indicado";
    }
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
    const idade = document.getElementById('idade').value;
    
    
    const valorBasicoA = 100 + (idade * 10 * (imc / 10));
    const valorStandardA = (150 + (idade * 15)) * (imc / 10);
    const valorPremiumA = (200 - (imc * 10) + (idade * 20)) * (imc / 10);
    
    return { valorBasicoA, valorStandardA, valorPremiumA };
}

function CalcularIMC() 
{
    const alturaCm = document.getElementById('alturaCm').value;
    const pesoKg = document.getElementById('pesoKg').value;

    
    const alturaM = alturaCm / 100;
    const imc = pesoKg / (alturaM * alturaM);
    
    return Number(imc.toFixed(1));
}
