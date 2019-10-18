<template>
  <div class="p-3">
    <div class="row">
      <div class="col text-right">
        <span v-if="show" class="text-success mr-5">Copied!</span>
        <b-button type="submit" v-clipboard:copy="xml" v-clipboard:success="onCopy" variant="secondary">
          <i class="fa fa-copy"></i> Copy/Paste
        </b-button>
      </div>
    </div>
    <div class="row">
      <div class="col mt-3">
        <pre>{{ xml }}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    paramXml: String('')
  },
  data() {
    return {
      xml: "",
      show: Boolean(false)
    };
  },
  mounted() {
   this.xml = this.paramXml
  },
  methods: {
    onCopy() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 3000);
    }
  }
};
</script>
<style>
pre {
  background-color: #F7F7F7;
  padding: 10px;
  border: 1px solid #5A6268;
}
</style>
