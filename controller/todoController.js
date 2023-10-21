const { Todo } = require('../models')

class todoController {

static async findAllTodo (req, res) {
  try {
    const todo = await Todo.findAll({
      where: { deletedAt: null },
    })

    if ( !todo ) {
      return res.status(404).json( {message: "Data Tidak Ditemukan"} )
    }
    
    const result = {
        message: "Data Berhasil Ditampilkan",
        data: todo
    }

    res.status(200).json(result)
  } catch (error) {
    console.log(error, `error find all todo`)
    res.status(500).json( {error: 'Internal Server Error'} )
  }
}

static async findById (req, res) {
  try {
  
    const {id} = req.params
    const todo = await Todo.findOne({where: {id}})
  
    if ( !todo ) {
      return res.status(404).json( {message: "Data Tidak Ditemukan"} )
    }

    const result = {
      message: "Data Berhasil Ditampilkan",
      data:todo
    }
    res.status(200).json(result)
  } catch (error) {
    console.log(error, `error find todo`)
    res.status(500).json( {error: 'Internal Server Error'} )
  }
}

static async createTodo (req, res) {
  try {
    const {title} = req.body
    
    const newTodoData = await Todo.create({title:title})

    if ( !newTodoData ) {
      return res.status(404).json( {message: "Data Tidak Ditemukan"} )
    }

    res.status(200).json({status: "OK!", message:"Data Berhasil Ditambahkan", data:{
        id: newTodoData.id,
        title: newTodoData.title,
        createdAt: newTodoData.createdAt,
        updatedAt: newTodoData.updatedAt
      }
    })
  } catch (error) {
    console.log(error, `error create new todo`)
    res.status(500).json( {error: 'Internal Server Error'} )
  }
}

static async updateTodo (req, res) {
  try {
    const {id} = req.params
    const {title} = req.body

    const todo = await Todo.update({title:title}, {where: {id}})

    if ( !todo ) {
      return res.status(404).json( {message: `Data dengan id ${id} tidak ada`} )
    }

    todo.title = title

    res.status(200).json({message: "Data Berhasil di Update", data:{
      id: todo.id,
      title: todo.title,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt
    }
  })

  } catch(error){
    console.log(error, `error update todo`)
    res.status(500).json( {error: 'Internal Server Error'} )
  }
}

static async deleteTodo (req, res) {
  try {
    const {id} = req.params
    const todo =  await Todo.findOne({where: {id}})

    if ( !todo ) {
      return res.status(404).json( {message: `Data dengan id ${id} tidak ada`} )
    }

    await todo.destroy({where: {id}})
    res.status(200).json( {message: `Data Berhasil di Delete (soft delete)`} )

  } catch (error) {
    console.log(error, `error update todo`)
    res.status(500).json( {error: 'Internal Server Error'} )
  }
}

}

module.exports = todoController;