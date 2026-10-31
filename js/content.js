/* ROUTINE WEBSITE UPDATES: edit this file, then commit your changes on GitHub. */
window.PORTFOLIO_CONTENT = {
  contact: {
    email: "divyakotia04@gmail.com",
    linkedin: "https://www.linkedin.com/in/dkotia/",
    github: "https://github.com/DivyaKotia"
  },
  projects: [
    {
      title: "Indian Energy Sector Stock Market Analysis",
      description: "Building a reproducible MySQL workflow for historical daily stock data across 25 Indian energy-sector companies. The project covers database design, raw-to-staging preparation, data-quality validation and an expanding set of company- and industry-level analyses.",
      technologies: ["MySQL", "SQL", "CTEs", "Window functions", "Data quality"],
      metric: "124K+",
      metricLabel: "Daily observations",
      url: "https://github.com/DivyaKotia/Indian-Energy-Sector-Stock-Market-Analysis-using-SQL",
      linkLabel: "View repository",
      status: "Ongoing"
    },
    {
      title: "ESG Drivers of Energy Companies’ Revenue",
      description: "Analysed ESG indicators across Indian energy companies using regression modelling and diagnostic checks. Iterative variable reduction using VIF diagnostics and elimination improved adjusted R-squared from 0.818 to 0.842, while making the model more interpretable.",
      technologies: ["Python", "R", "Regression", "VIF diagnostics", "ESG"],
      metric: "0.842",
      metricLabel: "Final adjusted R²",
      url: "https://github.com/DivyaKotia/Projects/tree/4db5813ffb754a1f8cb7dd5acee60f58d08b3208/ESG%20Drivers%20of%20Energy%20Companies%E2%80%99%20Revenue%20-%20Regression%20Analysis",
      linkLabel: "View repository",
      status: "Completed"
    },
    {
      title: "LSTM vs ARIMA — Indian Energy Sector Forecasting",
      description: "Benchmarked deep-learning and statistical time-series approaches across 21 Indian energy companies and 9 sub-sectors. The analysis evaluated forecast errors and investigated unusual train-test error patterns in three Adani Group stocks.",
      technologies: ["Python", "LSTM", "ARIMA / SARIMA", "Time series", "Model evaluation"],
      metric: "2–10%",
      metricLabel: "Test MAPE for most firms",
      url: "https://github.com/DivyaKotia/Model-for-Price-Discovery-of-Energy-Companies-Stocks",
      linkLabel: "View repository",
      status: "Completed"
    }
  ]
};
