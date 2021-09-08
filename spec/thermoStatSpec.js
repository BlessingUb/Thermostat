describe('thermoStat', function() {
  let thermostat;

  beforeEach(() => {
    thermostat = new thermoStat;
  })
  it('starts with a temperature of 20', function() {
    expect(thermostat.currentTemp).toEqual(20)
  })

  it('increases temp temperature with up()',() => {
    thermostat.up()
    expect(thermostat.currentTemp).toEqual(thermoStat.START_TEMPERATURE + 1)
  })

  it('decreases temperature with down()', () => {
    thermostat.down()
    expect(thermostat.currentTemp).toEqual(thermoStat.START_TEMPERATURE - 1)
  })

  it('temperature cannot decrease beyond 10', () => {
    minimumTemp = thermoStat.MINIMUM_TEMPERATURE
    for (let i = 0; i < 11; i++) { 
      thermostat.down()
    }
    expect(thermostat.currentTemp).not.toBeLessThan(minimumTemp)
  })

  it('has a maximum temperature of 25 when in powersave mode', () => {
    powersaveMaxTemp = thermoStat.POWER_SAVE_MAX_TEMP
    for (let i = 0; i < 6; i++){
      thermostat.up()
    }
    expect(thermostat.currentTemp).toEqual(powersaveMaxTemp)
  })
  
  it('has a maximum temperature of 32 when in not in powersave mode', () => {
    MaxTemp = thermoStat.MAX_TEMP
    thermostat.powersave = false
    for (let i = 0; i < 13; i++){
      thermostat.up()
    }
    expect(thermostat.currentTemp).toEqual(MaxTemp)
  }) 

  it('can turn power save off', () => {
    thermostat.switchPowerSaveOff()
    expect(thermostat.powersave).toBe(false)
  })

  it('has pwer save on on default and can turn power save on after it turn off', () => {
    thermostat.switchPowerSaveOn()
    expect(thermostat.powersave).toBe(true)
  })

  it('can reset  to start temperature with reset()', () => {
    thermostat.currentTemp = 22
    thermostat.resetTemp()
    expect(thermostat.currentTemp).toEqual(thermoStat.START_TEMPERATURE)
  })
  
describe('confirms energy usage', () => { 
  it('checks if the usage is low', () => {
    for (i = 0; i < 3; i++) {
      thermostat.down()
    }
    expect(thermostat.energyUsage()).toEqual('low-usage')
  
  })

  it('checks if the usage is medium', () =>{
    expect(thermostat.energyUsage()).toEqual('medium-usage')
  
  })

  it('checks if the usage is high', () =>{
    thermostat.switchPowerSaveOff()
    for (i = 0; i < 6; i++) {
      thermostat.up()
    }
    expect(thermostat.energyUsage()).toEqual('high-usage')
  
  })
}) 
});



