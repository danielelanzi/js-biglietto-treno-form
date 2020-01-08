// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
  function() {

    var nomeInput = document.getElementById('nome-utente');
    var nome = nomeInput.value;
    console.log(nome);

    var inputKm = document.getElementById('km');
    var kmDaPercorrere = parseInt(inputKm.value);
    console.log(kmDaPercorrere);

    var fasciaEtaSelect = document.getElementById('fascia-eta');
    var fascia = fasciaEtaSelect.value;
    console.log(fascia);

    var prezzoKm = 0.21;
    var costoBiglietto = prezzoKm * kmDaPercorrere;
    console.log(costoBiglietto);

    var offerta = 'Tariffa Standard';

    if (fascia == 'minorenne') {
      costoBiglietto -= ((costoBiglietto * 20) / 100);
      offerta = 'Sconto Minorenne';


    } else if (fascia == 'over65') {
      costoBiglietto = costoBiglietto - ((costoBiglietto * 40) / 100);
      offerta = 'Sconto Silver';
    }


    var carrozza = Math.floor(Math.random() * 9) + 1;
    var cp = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;

    document.getElementById('nome-passegero').innerHTML = nome;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('offerta').innerHTML = costoBiglietto.toFixed(2);
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = cp;

    var bigliettoDiv = document.getElementById('biglietto');
    bigliettoDiv.classList.remove('hidden');
    bigliettoDiv.classList.add('show');
  }
);

var buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener('click',
  function() {
    var bigliettoDiv = document.getElementById('biglietto');
    bigliettoDiv.classList.remove('show');
    bigliettoDiv.classList.add('hidden');

    document.getElementById('nome-passegero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';
    document.getElementById('nome-utente').value = '';
    document.getElementById('km').value = '';
    document.getElementById('fascia-eta').value = '';
  }
);
