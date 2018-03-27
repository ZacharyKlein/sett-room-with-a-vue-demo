<template>
  <div>
    <h1>Books</h1>
    <book-create-form />
    <br/><hr/>
    <book-list />
  </div>
</template>

<script>
import BookCreateForm from './BookCreateForm'
import BookList from './BookList'
import {mapActions} from 'vuex'

export default {
  name: 'book-view',
  components: {
    BookList, BookCreateForm
  },
  methods: {
    ...mapActions([
      'loadBooks'
    ])
  },
  created: function () {
    this.loadBooks()
  }
}
</script>

<style scoped>
  div {
    width: 1000px;
    margin: 0 auto;
  }
</style>
