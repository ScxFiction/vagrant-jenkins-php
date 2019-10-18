<template>
  <b-card>
    <b-card-header header="New Job"></b-card-header>
    <b-card-body>
      <b-tabs>
        <b-tab title="Form">
          <Form ></Form>
        </b-tab>
        <b-tab title="build.xml">
          <Preview @create-xml="loadXml"></Preview>
        </b-tab>
      </b-tabs>
    </b-card-body>
  </b-card>
</template>

<script>
import Form from "./Form";
import Preview from "./Preview";
export default {
  components: {
    Form,
    Preview
  },
  data() {
    return {
      xml: ''
    }
  },
  methods: {
    loadXml(e) {
      this.xml = e.build;
    }
  }
};
</script>