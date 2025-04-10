// script.js
document.getElementById("searchBtn").addEventListener("click", function() {
    const city = document.getElementById("city").value;
  
    const apiKey = "b2b4f9e9612fe2d5013d42953e4f6d1a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Cidade não encontrada");
        }
        return response.json();
      })
      .then(data => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
          <h2>Clima em ${data.name}</h2>
          <p>Temperatura: ${data.main.temp} °C</p>
          <p>Condição: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        document.getElementById("result").innerHTML = `<p>${error.message}</p>`;
      });
  });
  