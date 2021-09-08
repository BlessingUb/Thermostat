class thermoStat {
  
  constructor(Temperature = thermoStat.START_TEMPERATURE) {
    this.currentTemp = Temperature
    this.minimumTemp = thermoStat.MINIMUM_TEMPERATURE
    this.powersave = true
    this.medium_usage = thermoStat.MEDIUM_ENERGY_USAGE
    this.high_usage = thermoStat.HIGH_ENERGY_USAGE
  }

  up() {
    if (this.powersave && this.currentTemp < thermoStat.POWER_SAVE_MAX_TEMP) {
      return this.currentTemp++
    }
    else if (!this.powersave && this.currentTemp < thermoStat.MAX_TEMP) {
      return this.currentTemp++
    }

  }

  down() {
    if (this.currentTemp > this.minimumTemp) {
      return this.currentTemp--
    }
  }
  
  switchPowerSaveOff() { 
    return this.powersave = false
  }

  switchPowerSaveOn() { 
    return this.powersave = true
  }

  resetTemp() { 
    return this.currentTemp = thermoStat.START_TEMPERATURE
  }
  
  energyUsage() { 
    if(this.currentTemp < this.medium_usage) {
      return 'low-usage';
    } else if(this.currentTemp <= this.high_usage)
    return 'medium-usage';
    {
      return 'high-usage'
    }
    
  }
  static START_TEMPERATURE = 20;
  static MINIMUM_TEMPERATURE = 10;
  static POWER_SAVE_MAX_TEMP = 25;
  static MAX_TEMP = 32;
  static MEDIUM_ENERGY_USAGE = 18;
  static HIGH_ENERGY_USAGE = 25;
}
