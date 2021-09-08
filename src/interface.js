document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#currentTemp').innerText = thermostat.currentTemp
  } 
  const thermostat = new thermoStat();
  updateTemperature();

  document.querySelector('#currentTemp-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  });
  
  document.querySelector('#currentTemp-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#currentTemp-reset').addEventListener('click', () => {
    thermostat.resetTemp();
    updateTemperature();
  });

  document.querySelector('#powersaveOff').addEventListener('click', () => {
    thermostat.switchPowerSaveOff();
    updateTemperature();
  });

  document.querySelector('#powersaveOn').addEventListener('click', () => {
    thermostat.switchPowerSaveOn();
    updateTemperature();
  });
});
