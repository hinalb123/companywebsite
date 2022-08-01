<template>
      <v-app>
            <v-container>
                  <h2 class="mt-2">Register Form</h2>
                  <form>
                        <v-text-field v-model="RegisterData.name" label="Name"  :error-messages="nameErrors" required @input="$v.RegisterData.name.$touch()"
          @blur="$v.RegisterData.name.$touch()"></v-text-field>
                        <br>
                        <v-text-field v-model="RegisterData.email" label="Email"  :error-messages="emailErrors" required @input="$v.RegisterData.email.$touch()"
          @blur="$v.RegisterData.email.$touch()" ></v-text-field>
                        <br>
                        <v-text-field  type="password" v-model="RegisterData.password" label="password" :error-messages="passwordErrors"  required
          @input="$v.RegisterData.password.$touch()"
          @blur="$v.RegisterData.password.$touch()"></v-text-field>
                        <br>
                        <v-btn value="register" @click="submit"> Register</v-btn>
                        <v-btn @click="clear" value="clear">Clear</v-btn>
                  </form>
            </v-container>
      </v-app>

</template>
<script>    
import axios from 'axios'
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength, email } from "vuelidate/lib/validators";
export default {
      name: "RegisterWorld",
      mixins: [validationMixin],

      validations: {
      RegisterData : {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            password: { required, minLength: minLength(8) }
      }
      },
      data: () => ({
            RegisterData: {
                  name: "",
                  email: "",
                  password: "",
            }
      }),
        computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.RegisterData.name.$dirty) return errors;
      !this.$v.RegisterData.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.RegisterData.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.RegisterData.email.$dirty) return errors;
      !this.$v.RegisterData.email.email && errors.push("Must be valid e-mail");
      !this.$v.RegisterData.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      !this.$v.RegisterData.password.minLength &&
        errors.push("Password should be at 8 characters long");
      if (!this.$v.RegisterData.password.$dirty) return errors;
      !this.$v.RegisterData.password.required && errors.push("Password is required.");
      return errors;
    }
  },
      methods: {
            async submit() {
                  this.$v.$touch();
                  await axios.post('register', this.RegisterData);
                  console.log(this.RegisterData);
                  this.$router.push('/login');
            },
            clear() {
                  this.$v.$reset();
                  this.RegisterData = "";
            },
      }
}
</script>