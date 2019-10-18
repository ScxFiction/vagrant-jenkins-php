<template>
  <b-card>
    <b-card-header header="JOBS">

    </b-card-header>
    <b-card-body>
    <div class="row">
        <div class="col mb-3">
            <div class="text-right">
                <b-link class="btn btn-success" to="/jobs/new"><i class="fa fa-plus"></i> New Job</b-link>
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
      :total-rows="rows">
      <template v-slot:cell(edit)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="right"
        aria-controls="my-table">
    </b-pagination>
    </b-card-body>
  </b-card>
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
        },
        {
          key: "edit",
          label: "",
          sortable: false,
          colType: "button"
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
        let data = resp.data.jobs;
        data.forEach(element => {
          element['edit'] = '<a href="#">'+ element['name'] +'<a/>';
        });

        this.items = resp.data.jobs;
      });
    }
  }
};
</script>