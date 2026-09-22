// Footer Details
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static weather inputs (matches static content in HTML)
const temperature = 9; // °C
const windSpeed = 10;  // km/h

// 1-line function returning wind chill calculation (Metric °C)
const calculateWindChill = (temp, speed) =>
  (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Call ONLY if temp <= 10°C and wind speed > 4.8 km/h
const chillSpan = document.querySelector("#chill");

if (temperature <= 10 && windSpeed > 4.8) {
  chillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  chillSpan.textContent = "N/A";
}