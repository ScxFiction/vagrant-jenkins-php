<template>
  <div>
    <h2>Jobs</h2>
    <div class="row">
        <div class="col mb-3">
            <div class="text-right">
                <b-link class="btn btn-success" href="/jobs/new">New</b-link>
            </div>
        </div>
    </div>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      :total-rows="rows"
    ></b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="right"
        aria-controls="my-table">
    </b-pagination>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.getJobs();
  },
  data() {
    return {
      fields: [
        {
          key: "color",
          label: 'Status',
          sortable: false
        },
        {
          key: "name",
          sortable: true
        },
        {
          key: "url",
          label: "URL",
          sortable: false
        }
      ],
      perPage: 3,
      currentPage: 1,
      items: []
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  },
  methods: {
    getJobs() {
      var config = {
        headers: { 'Authorization': 'Basic ' + btoa('renato:123456') }
      };
      axios.get("http://192.168.33.13:8080/api/json", config).then(resp => {
        this.items = resp.data.jobs;
      });
    }
  }
};
</script>