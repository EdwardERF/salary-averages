// Main functions

function getAverageSalary() {
  let sumSalary = 0;

  for (let i = 0; i < professions.length; i++) {
    sumSalary += parseInt(professions[i][1]);
  }

  return (sumSalary / professions.length).toFixed(0);
}


function getBestPaid() {
  let bestPaid = 0;

  for (let i = 0; i < professions.length; i++) {
    if (bestPaid < professions[i][1]) {
      bestPaid = professions[i][1];
    }
  }

  return bestPaid;
}


function getWorstPaid() {
  let worstPaid = professions[0][1];

  for (let i = 0; i < professions.length; i++) {
    if (worstPaid > professions[i][1]) {
      worstPaid = professions[i][1];
    }
  }

  return worstPaid;
}

function getMedianSalary() {
  let median;
  let lista = [];

  for (let i = 0; i < professions.length; i++) {
    lista.push(professions[i][1]);
  }

  let sortedLista = lista.sort((a, b) => a - b);

  const listaLenght = parseInt(sortedLista.length / 2);
  
  if (esPar(sortedLista.length)) {
    const element1 = sortedLista[listaLenght - 1];
    const element2 = sortedLista[listaLenght];

    const avgElements = getAverageSalary(element1, element2);

    median = avgElements;
  } else {
    median = sortedLista[listaLenght];
  }

  return median;
}

function getStatisticInfo() {
  createParagraphById("average-salary-info", getAverageSalary());
  createParagraphById("best-paid-profession", getBestPaid());
  createParagraphById("worst-paid-profession", getWorstPaid());
  createParagraphById("median-salary", getMedianSalary());
}