<template>
    
      <form>
          <v-text-field
            
              label="Auther Name"
              required
              v-model="showData.auther_name"
            ></v-text-field>

            <v-text-field
            
              label="name"
              required
              v-model="showData.name"
             
            ></v-text-field>
            <v-text-field
            
              label="description"
              required
              v-model="showData.description"
             
            ></v-text-field>
                <v-btn   @click="updateProduct(showData.id)">
                    update
                </v-btn>
         

      </form>
</template>
<script>
import axios from "axios";

export default {
  name: "ViewProduct",
  data: () => ({
    show: false,
    id: "",
    showData: {
      auther_name: "",
      name: "",
      description: "",
     
    },
  }),
  mounted() {
    this.id = this.$route.params.id;
    this.showProduct();
  },
  methods: {
     async updateProduct(id) {
      let formData = new FormData();
      formData.append("auther_name", this.showData.auther_name);
      formData.append("name", this.showData.name);
      formData.append("description", this.showData.description);
     
      await axios
        .post(`products/${id}`, formData)
        .then((resp) => {
          this.dialog = false;
          this.$toastr.success(resp.data.message, "Success", { timeOut: 2000 });
          this.$router.push('/dashboard');


        })
        .catch((error) => {
          this.$toastr.error(error.response.data.message, "Error", {
            timeOut: 2000,
          });
        });
    },
    async showProduct() {
      await axios
        .get(`products/${this.id}`)
        .then((resp) => {
            console.log("resp",resp.data.data)
          this.showData = resp.data.data;
        })
        .catch((error) => {
          this.$toastr.error(error.response.data.message, "Error", {
            timeOut: 2000,
          });
        });
    },
  },
};
</script>

