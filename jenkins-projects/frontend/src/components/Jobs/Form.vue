<template>
  <div class="p-3">
    <b-form @submit.stop.prevent="onSubmit">
        <!-- Actions -->
        <div class="row">
          <div class="col text-left">
            <b-link class="btn btn-secondary" to="/"><i class="fa fa-backward"></i> Back</b-link>
          </div>
          <div class="col text-right">
            <b-button type="submit" variant="success"><i class="fa fa-save"></i> Save</b-button>
          </div>
        </div>
        <fieldset class="mt-3">
        <legend>Configuration</legend>
        <!-- Form -->
        <div class="row mt-3">
          <!-- Pdepend -->
          <div class="col">
            <b-form-group label="PHP Depend" label-for="pdepend">
              <b-form-input
                name="pdepend"
                v-model="$v.form.pdepend.$model"
                id="pdepend"
                :state="$v.form.pdepend.$dirty ? !$v.form.pdepend.$error : null"
                placeholder="Enter path"
              ></b-form-input>
              <b-form-invalid-feedback id="pdepend-feedback">This field is required</b-form-invalid-feedback>
            </b-form-group>
          </div>
          <!-- PHPCPD -->
          <div class="col">
            <b-form-group label="PHP Copy/Paste Detector" label-for="phpcpd">
              <b-form-input
                name="phpcpd"
                v-model="$v.form.phpcpd.$model"
                id="phpcpd"
                :state="$v.form.phpcpd.$dirty ? !$v.form.phpcpd.$error : null"
                placeholder="Enter path"
              ></b-form-input>
              <b-form-invalid-feedback id="phpcpd-feedback">This field is required</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>
        <div class="row mt-3">
          <!-- PHPCS -->
          <div class="col">
            <b-form-group label="PHP CODESNIFFER" label-for="phpcs">
              <b-form-input
                name="phpcs"
                v-model="$v.form.phpcs.$model"
                id="phpcs"
                :state="$v.form.phpcs.$dirty ? !$v.form.phpcs.$error : null"
                placeholder="Enter path"
              ></b-form-input>
              <b-form-invalid-feedback id="phpcs-feedback">This field is required</b-form-invalid-feedback>
            </b-form-group>
          </div>
          <!-- PHPDox -->
          <div class="col">
            <b-form-group label="PHP Documentation Generator" label-for="phpdox">
              <b-form-input
                name="phpdox"
                v-model="$v.form.phpdox.$model"
                :state="$v.form.phpdox.$dirty ? !$v.form.phpdox.$error : null"
                id="phpdox"
                placeholder="Enter path"
              ></b-form-input>
              <b-form-invalid-feedback id="phpdox-feedback">This field is required</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>
        <div class="row mt-3">
          <!-- PHPLOC -->
          <div class="col">
            <b-form-group label="PHPLOC" label-for="phploc">
              <b-form-input
                name="phploc"
                :state="$v.form.phploc.$dirty ? !$v.form.phploc.$error : null"
                v-model="$v.form.phploc.$model"
                id="phploc"
                placeholder="Enter path"
              ></b-form-input>
              <b-form-invalid-feedback id="phpdox-feedback">This field is required</b-form-invalid-feedback>
            </b-form-group>
          </div>
          <!-- PHPMD -->
          <div class="col">
            <b-form-group label="PHP Mess Detector" label-for="phpmd">
              <b-form-input
                name="phpmd"
                :state="$v.form.phpmd.$dirty ? !$v.form.phpmd.$error : null"
                v-model="$v.form.phpmd.$model"
                id="phpmd"
                placeholder="Enter path"
              ></b-form-input>
              <b-form-invalid-feedback id="phpmd-feedback">This field is required</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>
        <div class="row mt-3">
          <!-- PHPUNIT -->
          <div class="col-6">
            <b-form-group label="PHPUNIT" label-for="phpunit">
              <b-form-input
                name="phpunit"
                :state="$v.form.phpunit.$dirty ? !$v.form.phpunit.$error : null"
                v-model="$v.form.phpunit.$model"
                id="phpunit"
                placeholder="Enter path"
              ></b-form-input>
              <b-form-invalid-feedback id="phpunit-feedback">This field is required</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>
      </fieldset>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        pdepend: "",
        phpcpd: "",
        phpcs: "",
        phpdox: "",
        phploc: "",
        phpmd: "",
        phpunit: ""
      }
    };
  },
  validations: {
    form: {
      pdepend: {
        required
      },
      phpcpd: {
        required
      },
      phpcs: {
        required
      },
      phpdox: {
        required
      },
      phploc: {
        required
      },
      phpmd: {
        required
      },
      phpunit: {
        required
      }
    }
  },
  methods: {
    onSubmit(evt) {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      evt.preventDefault();

      axios.post("http://localhost:8000/api/create-xml", this.form).then( resp => {
        this.$emit('create-xml', resp.data);
      });
    }
  }
};
</script>