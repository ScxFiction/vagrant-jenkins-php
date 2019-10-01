<template>
  <div>
    <!-- Actions -->
    <div class="row">
      <div class="col text-left">
        <b-link class="btn btn-secondary" href="/">Back</b-link>
      </div>
      <div class="col text-right">
        <b-link class="btn btn-success" href="/">Save</b-link>
      </div>
    </div>
    <!-- Form -->
    <div class="row mt-3">
    <!-- Pdepend -->
      <div class="col ">
        <b-form-group label="PDepend" label-for="pdepend">
          <b-form-input id="pdepend" placeholder="Enter path" required></b-form-input>
        </b-form-group>
      </div>
      <!-- Pdepend -->
      <div class="col">
        <b-form-group label="phpcpd" label-for="pdepend">
          <b-form-input id="pdepend" placeholder="Enter path" required></b-form-input>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>