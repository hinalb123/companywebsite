<template>
<v-app>
    <v-container>
            <h2 class="mt-2">Login Form</h2>

    <form>
        <!-- email<input type="text" v-model="LoginData.email"> -->
          <v-text-field
              :error-messages="emailErrors"
              label="Email"
              required
              v-model="LoginData.email"
              @input="$v.LoginData.email.$touch()"
              @blur="$v.LoginData.email.$touch()"
            ></v-text-field>
       
        <!-- password <input type="text" v-model="LoginData.password"> -->
          <v-text-field
             :error-messages="passwordErrors"
              label="Password"
              type="password"
              required
              v-model="LoginData.password"
              @input="$v.LoginData.password.$touch()"
              @blur="$v.LoginData.password.$touch()"
            ></v-text-field>

                  <v-btn  @click.prevent="submit">
                    Login
                </v-btn>
        <!-- <button value="login" >Login</button> -->
    </form>
      </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";

import { required, minLength, email } from "vuelidate/lib/validators";

export default{
    name: "LoginWorld",
  mixins: [validationMixin],

  validations: {
    LoginData: {
      email: { required, email },
      password: { required, minLength: minLength(8) },
    },
  },
    data: () => ({
      LoginData: {
      email: "",
      password: "",
    },

  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.LoginData.email.$dirty) return errors;
      !this.$v.LoginData.email.email && errors.push("Must be valid e-mail");
      !this.$v.LoginData.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      !this.$v.LoginData.password.minLength &&
        errors.push("Password should be at 8 characters long");
      if (!this.$v.LoginData.password.$dirty) return errors;
      !this.$v.LoginData.password.required &&
        errors.push("Password is required.");
      return errors;
    },
  },
 
  methods:{
     async submit() {
    //   alert("sds")
    this.$v.$touch();

    console.log(this.LoginData)
      await axios.post("login", this.LoginData)

        .then((res) => {
            localStorage.setItem('token',res.data.data.token);
            localStorage.setItem('userInfo',res.data.data.userInfo);
            console.log(res.data.data.userInfo);
            this.$toastr.success(res.data.message, 'Success', {timeOut: 2000});
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.data.token;
            console.log(res.data.data.token);
            console.log("success");
            this.$router.push({path: 'dashboard'});
        }).catch((error) => {
            this.$toastr.error(error.response.data.message, 'Error', {timeOut: 2000});
        });
    },

  }
}
</script>