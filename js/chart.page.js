var ChartPage = function () {
  return {};
};

ChartPage.JS = (function () {
  return {
    init() {
      this.drawBarChart();
      this.drawDonutChart();
    },
    drawDonutChart() {
      const ctx02 = document.getElementById("chart02").getContext("2d");
      const data = {
        labels: ["iOS", "Android", "Others"],
        datasets: [
          {
            label: "Visitor Devices",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      const config = {
        type: "doughnut",
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                textStrokeWidth: 1,
                font: {
                  size: 19,
                },
              },
            },
          },
        },
      };
      const myChart02 = new Chart(ctx02, config);
    },
    drawBarChart() {
      const ctx01 = document.getElementById("chart01").getContext("2d");

      const labelBar = ["Jan", "Feb", "Mar", "Apr", "May"];
      const dataBar = {
        labels: labelBar,
        datasets: [
          {
            label: "Unique Visit Per Month",
            data: [65, 59, 80, 81, 56],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 205, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(54, 162, 235, 0.6)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
            ],
            borderWidth: 1,
          },
        ],
      };
      const configBar = {
        type: "bar",
        data: dataBar,
        options: {
          plugins: {
            legend: {
              labels: {
                textStrokeWidth: 1,
                font: {
                  size: 18,
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                textStrokeWidth: 1,
                font: {
                  size: 18,
                },
              },
            },
            x: {
              ticks: {
                font: {
                  size: 18,
                },
              },
            },
          },
        },
      };

      const myChart01 = new Chart(ctx01, configBar);
    },
  };
})();

(function () {
  $(document).ready(function () {
    ChartPage.JS.init();
  });
})();
