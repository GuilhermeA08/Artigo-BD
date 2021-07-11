(async () => {
  // Select dados
  const chart_line2 = await Select_chart_line();

  let teste = chart_line2.map((elemento) => parseInt(elemento.confirmados));
  let teste2 = chart_line2.map((elemento) => parseInt(elemento.curados));
  let teste3 = chart_line2.map((elemento) => parseInt(elemento.obitos));

  const config = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Confirmados',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          data: teste,
        },
        {
          label: 'Curados',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          data: teste2,
        },
        {
          label: 'Mortes',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          data: teste3,
        },
      ],
    },
    options: {},
  };

  var myChart = new Chart(document.getElementById('myChart'), config);

  //Chart bar
  var ctx = document.getElementById('myChart2');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['teste', 'ola', '1', '2', 4, 5],
      datasets: [
        {
          label: 'Dataset 1',
          data: [1, 2, 3, 4, 5, 6],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 1)',
        },
        {
          label: 'Dataset 2',
          data: [7, 6, 4, 2, 5, 8],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });
})();
