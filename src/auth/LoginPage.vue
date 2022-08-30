<template>
<div class="row d-flex justify-content-center">
    <div class="col-xl-4 col-lg-5 ">
    <div class="card card-container">
      <img
        id="profile-img"
        src="../assets/profile.png" 
        class="profile-img-card"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="username">Username:</label>
          <Field name="username" type="text" class="form-control" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <div class="text-center">
          <button class="btn btn-success btn-lg w-100 " :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
          </div>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: "LoginPage",
    components: {
    
  },
  
}
</script>

<style scoped>

</style>

