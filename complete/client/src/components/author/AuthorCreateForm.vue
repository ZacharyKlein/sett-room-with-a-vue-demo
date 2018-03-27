<template>
  <div class="form">
    <div class="title cell">
      <label>Name</label>
      <input v-model="author.name" type="text" ref="authorName">
    </div>

    <div class="save cell">
      <button @click="submitNewAuthor()">Add Author</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      author: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'saveAuthor'
    ]),
    submitNewAuthor: function () {
      this.saveAuthor({author: this.author})
      this.author = {name: ''}
      this.$refs.authorName.focus()
    }
  }
}
</script>

<style scoped>

  .cell {
    width: 500px;
    float: left
  }

  .save {

  }

</style>
