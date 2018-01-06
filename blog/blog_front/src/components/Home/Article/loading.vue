<template>
  
</template>
<script>
import action_type from '../../../store/action_type'
import {mapState,mapActions} from 'vuex'
const {DEFAULTDATA} = action_type
export default {
  name:'index',
  data () {
      return {
          loading: ''
      }
  },
  mounted() {
      this.defaultData(this)
      this.openFullScreen2()
  },
  methods: {
      ...mapActions({
          defaultData: DEFAULTDATA.actions
      }),
      openFullScreen2() {
        this.loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255,255,255)'
        })
      }
  }
}
</script>
