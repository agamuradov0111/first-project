import { postComments } from './comments.js'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const results = numbers.filter(num => num > 4)

console.log(results)


const things = [
  'Кровать',
  'Шкаф',
  'Телефон',
  'Книга',
  'Шлем'
]
const thing = things.includes('Книга')

console.log(thing)


const reverseNumbers = numbers.toReversed()
console.log(reverseNumbers)

const reverseThings = things.toReversed()
console.log(reverseThings)


const changedComments = postComments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  }
})

console.log(changedComments)


const idAndName = postComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  }
})
console.log(idAndName)


const changedWithInvalid = postComments.map(comment => ({...comment, isInvalid: comment.body.length > 180 ? true : false}))
changedWithInvalid.forEach(comment => {
  if (comment.isInvalid) {
    console.log(`Комментарий с id ${comment.id} является недействительным`)
  } else {
    console.log(`Комментарий с id ${comment.id} является действительным`)
  }
})

