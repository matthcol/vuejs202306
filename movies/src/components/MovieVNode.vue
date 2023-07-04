<script lang="ts">
import { h } from 'vue'

export default {
  props:{
    title: String,
    year: Number,
    duration: Number
  },
  setup(props) {
    // use an array to return multiple root nodes
    return () =>  h('div', { 'class': 'greetings'}, [
        h('h1', {'class':'green'}, props.title),
        h('ul', [
            h('li', [ 
                'year: ', 
                props.year < 2000 ?  props.year % 100:  props.year
            ]),
            h('li', [ 
                'duration: ', 
                props.duration ?? 'unknown '
            ])
        ])
    ]
    )
  }
}
</script>