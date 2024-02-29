const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())

const todo = [
  {
    id: 1,
    title: 'Faire les courses',
    done: false,
  },
  {
    id: 2,
    title: 'Faire les courses',
    done: false,
  },
  {
    id: 3,
    title: 'Faire les courses',
    done: false,
  },
  {
    id: 4,
    title: 'Faire les courses',
    done: false,
  },
  {
    id: 5,
    title: 'Faire les courses',
    done: false,
  },
  {
    id: 6,
    title: 'Faire les courses',
    done: false,
  },
]

app.get('/', (req, res) => {
  res.json(todo)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server indra started on http://localhost:3000')
})
