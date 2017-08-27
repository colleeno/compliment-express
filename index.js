const express = require('express')
const app = express()

app.listen(4000, () => {
  console.log("app listening on port 4000")
})

app.set("view engine", "hbs")

app.get('/', (req,res) => {
  compliment = random(compliments)
  color = random(colors)
  // res.send(random(compliments))
  res.render('welcome', {compliment, color})
})

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function random (array) {
  return item = array[Math.floor(Math.random() * array.length)]
  console.log(item)
}
