function showWeather(city, temperature) {
  const weather = `Сейчас в ${city} температура - ${temperature} градусов по Цельсию`
  return weather

}
const cityTemperature = showWeather('Sochi', '28')
console.log(cityTemperature)


let lightSpeed = 299792456

function showSpeedLight(lightSpeed) {
  if (lightSpeed > 299792456) {
    console.log('Сверхсветовая скорость')
  }
  else if(lightSpeed === 299792456) {
    console.log('Скорость света')
  }
  else{
    console.log('Субсветовая скорость')
  }
}

showSpeedLight(299792460)


let good = 'desk'
let price = 350

const chekBudget = (currentBudget) => {
  if(currentBudget > price) {
    console.log('Стол приобретён. Спасибо за покупку!')
  }
  else{
    let result = price - currentBudget
    console.log(`Вам не хватает ${result}. Пополните баланс.`)
  }
}
chekBudget(500)