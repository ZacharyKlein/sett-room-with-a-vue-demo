<template>
  <table class="book-list">
    <thead>
      <td>Title</td>
      <td>Pages</td>
      <td>Author</td>
      <td></td>
    </thead>
    <tbody>
    <book :book="book" :deleteBook="deleteBook" :key="book.id" v-for="book in books" />
    </tbody>
  </table>
</template>
<script>
import Book from './Book.vue'
import {mapActions} from 'vuex'

export default {
  name: 'book-list',
  methods: {
    ...mapActions([
      'deleteBook'
    ])
  },
  computed: {
    books: {
      get () { return this.$store.state.books },
      set (books) { this.$store.commit('setBooks', {books}) }
    }
  },
  components: {
    book: Book
  }
}
</script>

<style scoped>
  .book-list {
    clear:both;
    min-width: 1000px
  }
</style>
