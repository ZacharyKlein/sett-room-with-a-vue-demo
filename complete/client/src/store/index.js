import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authors: [],
    books: []
  },
  mutations: {
    addBook (state, {book}) {
      state.books.push(book)
    },
    addAuthor (state, {author}) {
      state.authors.push(author)
    },
    removeBook (state, {id}) {
      state.books = state.books.filter(b => b.id !== id)
    },
    removeAuthor (state, {id}) {
      state.authors = state.authors.filter(a => a.id !== id)
      state.books = state.books.filter(b => b.author.id !== id)
    },
    setBooks (state, {books}) {
      state.books = books
    },
    setAuthors (state, {authors}) {
      state.authors = authors
    }
  },
  actions: {
    loadAuthors: function ({commit, state}) {
      fetch(`http://localhost:8080/author`)
        .then(r => r.json())
        .then(json => commit('setAuthors', {authors: json}))
        .catch(e => console.warn(e))
    },
    loadBooks: function ({commit, state}) {
      fetch(`http://localhost:8080/book`)
        .then(r => r.json())
        .then(json => commit('setBooks', {books: json}))
        .catch(e => console.warn(e))
    },
    saveBook: function ({commit, state}, {book}) {
      fetch(`http://localhost:8080/book`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(book)
        })
        .then(r => r.json())
        .then(json => commit('addBook', {book: json}))
        .catch(e => console.warn(e))
    },
    saveAuthor: function ({commit, state}, {author}) {
      fetch(`http://localhost:8080/author`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(author)
        })
        .then(r => r.json())
        .then(json => commit('addAuthor', {author: json}))
        .catch(e => console.warn(e))
    },
    deleteBook: function ({commit, state}, {id}) {
      fetch(`http://localhost:8080/book/${id}`,
        {
          method: 'DELETE'
        }).then(response => {
        if (response.status === 204) {
          commit('removeBook', {id})
        }
      })
    },
    deleteAuthor: function ({commit, state}, {id}) {
      fetch(`http://localhost:8080/author/${id}`,
        {
          method: 'DELETE'
        }).then(response => {
        if (response.status === 204) {
          commit('removeAuthor', {id})
        }
      })
    }
  }
})

export default store
