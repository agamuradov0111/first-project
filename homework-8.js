const person = {
  name: "Нурмухаммет",
  surname: "Агамырадов",
  age: 19,
  weight: 60,
  country: "Туркменистан",
  city: "Керки",
  email: "agamuradov.0111@gmail.com",
  job: "Студент"

}


const car = {
  mark: "Lexus",
  model: "ES",
  year: 2005,
  color: "Серый",
  transmission: "Автомат"
}

car.owner = person


function addMaxSpeed(car) {
  if(!!car.maxSpeed) {
    car.maxSpeed = 250
  }
  console.log(car)
}


function showProperty(object,property) {
  console.log(object[property])
}

showProperty(car, "mark")
showProperty(car, "model")
showProperty(car, "year")


const products = [
  'Milk',
  'Cheese',
  'Apple',
  'Bread',
  'Chocolate'
]

console.log(products)


const books = [{
  title: "Три основы",
  author: "Мухаммад ибн Абд аль Ваххаб",
  year: 1740,
  color: "Зеленый",
  genre: "Акыда"
},
{
  title: "Не грусти",
  author: "Аид аль-Карни",
  year: 2002,
  color: "Белый",
  genre: "Духовная"
},
{
  title: "Cахих аль-Бухари",
  author: "Аль-Бухари",
  year: 846,
  color: "Красный",
  genre: "Литература"
}
]

books.push({
  title: "Богатый папа, бедный папа",
  author: "Роберт Кийосаки",
  year: 1997,
  color: "Фиолетовый",
  genre: "Финансы"
})

console.log(books)


const robertBooks = [{
  title: "Школа бизнеса",
  author: "Роберт Кийосаки",
  year: 2001,
  color: "Зеленый",
  genre: "Финансы"
}]
console.log(robertBooks)

const allBooks =
[...books, ...robertBooks]

console.log(allBooks)


const newBooks = allBooks.map(book => ({...book, isRare: book.year < 2000 ? true : false}))
newBooks.forEach(book => {
  if (book.isRare) {
    console.log(`Книга "${book.title}" является редкой`)
  } else {
    console.log(`Книга "${book.title}" не является редкой`)
  }
})


