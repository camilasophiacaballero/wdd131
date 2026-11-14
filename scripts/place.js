// Footer

document.getElementById("year").textContent =
  `© ${new Date().getFullYear()} | Camila Sophia Caballero | Honduras`;

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

// Weather Data

const temperature = 8;
const windSpeed = 10;

// Wind Chill Function

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Display Wind Chill

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
