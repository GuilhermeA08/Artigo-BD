(async () => {

  //Chart Line

  // Select dados
  const chart_line2 = await Select_chart_line();

  let teste = chart_line2.map(elemento => parseInt(elemento.confirmados))
  console.log(teste);

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets:
      [
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
          data: [0, 2, 5, 7, 20, 30, 45],
        },
        {
          label: 'Mortes',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          data: [0, 10, 15, 2, 20, 30, 45],
        }

      ]

  };


  const config = {
    type: 'line',
    data,
    options: {}
  };




  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  //Chart bar
  var ctx = document.getElementById('myChart2');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Infectados por mês',
        data: [33, 19, 43, 50, 27, 39],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  // Chart Donout

  var myChart = new Chart(
    document.getElementById('myChart3'), {
    type: 'doughnut',
    data: {
      labels: [
        'Hospitalizados',
        'Isolamento',
        'Curados',
        'Obitos'
      ],
      datasets: [{
        label: 'CONFIRMADOS',
        data: [3, 41, 440, 11],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(153, 102, 255)'
        ],
        hoverOffset: 4
      }]
    }
  }
  );



})();