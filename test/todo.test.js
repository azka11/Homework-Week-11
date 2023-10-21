const app = require('../app.js')
const request = require('supertest')

test('find all todos', (done) => {
    request(app)
    .get('/todo')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
     expect(response.body.message).toBe("Data Berhasil Ditampilkan")
     done()
    })
    .catch(done)
})

test('find by id', (done) => {
    const id = 1
    const title = "Title 1"

    request(app)
    .get(`/todo/${id}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Data Berhasil Ditampilkan")
        expect(response.body.data.id).toBe(id)
        expect(response.body.data.title).toBe(title)
        done()
    })
    .catch(done)
})

test('create new todo', (done) => {
    const newTodoData = {
        title: "New Todo",
    }

    request(app)
    .post(`/todo`)
    .send(newTodoData)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Data Berhasil Ditambahkan")
        expect(response.body.data.title).toBe(newTodoData.title)
        done()
    })
    .catch(done)
})

test('update todo', (done) => {
    const id = 15
    const updateTodo = { 
        title: "Title 15"
    }

    request(app)
    .put(`/todo/${id}`)
    .send(updateTodo)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Data Berhasil di Update")
        expect(response.body.data.title).toBe(updateTodo.title)
        done()
    })
    .catch(done)
})

test('soft delete todo', (done) => {
    const id = 8

    request(app)
    .delete(`/todo/${id}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Data Berhasil di Delete (soft delete)")
        done()
    })
    .catch(done)
})