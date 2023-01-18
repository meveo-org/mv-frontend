export const DOUGHNUT_CONFIG = {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [8, 12, 6, 10, 14],
        backgroundColor: [
          "rgba(49, 112, 237, 1.0)",
          "rgba(49, 112, 237, 0.9)",
          "rgba(49, 112, 237, 0.8)",
          "rgba(49, 112, 237, 0.7)",
          "rgba(49, 112, 237, 0.6)"
        ]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "#ffffff",
        font: {
          size: 18,
          weight: "bold"
        }
      }
    },
    legend: {
      display: false
    },
    title: {
      display: false
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      enabled: false
    }
  }
};
