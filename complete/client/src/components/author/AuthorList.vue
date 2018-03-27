<template>
  <table class="author-list">
    <thead>
    <td>Name</td>
    <td>Books</td>
    <td></td>
    </thead>
    <tbody>
    <author v-for="author in authors" v-bind="{author, deleteAuthor}" :key="author.id" />
    </tbody>
  </table>
</template>
<script>
import Author from './Author.vue'
import {mapActions} from 'vuex'

export default {
  name: 'author-list',
  methods: {
    ...mapActions([
      'deleteAuthor'
    ])
  },
  computed: {
    authors: {
      get () { return this.$store.state.authors },
      set (authors) { this.$store.commit('setAuthors', {authors}) }
    }
  },
  components: {'author': Author}
}
</script>

<style scoped>
  .author-list {
    clear: both;
    min-width: 1000px
  }
</style>
