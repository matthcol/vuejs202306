<script lang="tsx">

export default {
  props:{
    title: String,
    year: Number,
    duration: Number
  },
  setup(props) {
    // use an array to return multiple root nodes
    return () =>  <div>{props.title}</div>
  }
}
</script>