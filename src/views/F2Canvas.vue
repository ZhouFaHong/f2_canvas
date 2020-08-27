<template>
  <div class="f2_canvas">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Geometry />
    <Month/>
    <Percent />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Percent from '@/components/Percent.vue'
import Month from '@/components/Month.vue'
import Geometry from '@/components/Geometry.vue'

export default {
  name: 'F2Canvas',
  components: {
    Geometry,
    Month,
    Percent,
  }
}
</script>