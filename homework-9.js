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

function findElement(array, i) {
  if (typeof i !== 'string') {
    return 'Некорректные выходные данные'
  } 
  return array.includes(i)
}
console.log(findElement(things, 'Кровать'))
console.log(findElement(things, 1))


function reverseArray(array) {
  return array.reverse()
}
console.log(reverseArray(things))
console.log(reverseArray(numbers))


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


const emailWithCom = postComments.filter(comment => comment.email.includes('.com'))
console.log(emailWithCom)


const emailComments = postComments.map(item => item.email)
console.log(emailComments)


const commentsToString = emailComments.join(',')
console.log(commentsToString)


const commentsToString2 = emailComments.toString()
console.log(commentsToString2)
