<!-- <template>
  <div>
    <h2>Implement jQuery DataTable in Vue Js</h2>
    <table class="table" id="">
      <thead>
        <tr>
          <th>ID</th>
          <th>Auther Name</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
       
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.auther_name }}</td>
        </tr>   
      </tbody>
    </table>
  </div>
</template> -->


<template>
    <div>
    
        <v-data-table :headers="headers" :items="desserts" :search="search" :custom-filter="filterOnlyCapsText">
     
            <template v-slot:top>
                <v-text-field v-model="search" label="Search (UPPER CASE ONLY)" class="mx-4"></v-text-field>
            </template>
                 
          <template v-slot:item.action  ="{ item }">
            <div class="p-2">
              <v-img :src="item.image" :alt="item.image" height="100px"></v-img>
            </div>

                <!-- <button type="submit" @click="deleteItem(item.id)">delete</button> -->
                <v-btn class="ma-2" @click="deleteItem(item.id)">
                    DELETE
                </v-btn>

                <v-btn class="ma-2"   @click="$router.push(`/update/${item.id}`)">
                    EDIT
                </v-btn>
            </template>
        </v-data-table>
      <v-btn class="ma-2" @click="signout">
                    Logout
            </v-btn>
    </div>
          
</template>

<script>
import axios from "axios";

export default {
    name: 'DashboardWorld',
    data() {
        return {
            search: '',

            desserts: [
                {

                },
            ],

            showData: {
                id: "",
                auther_name: "",
                name: "",
                description: "",
                image:""

            },
            name: "",
            dialog: false,
            formTitle: "",
            modalStatus: 0,
        }
    },
    computed: {
        headers() {
            return [
                {
                    text: 'auther_name',
                    align: 'start',
                    sortable: true,
                    value: 'auther_name',
                },
                {
                    text: 'name',
                    value: 'name',
                },
                { text: 'description', value: 'description' },
                { text: 'id', value: 'id' },
                { text: "Image", value: "image", sortable: false },
                { text: "Action", value: "action" },
                

            ]
        },
    },

    async mounted() {
        await this.showAllProducts();

    },
    methods: {
        filterOnlyCapsText(value, search) {
            return value != null &&
                search != null &&
                typeof value === 'string' &&
                value.toString().toLocaleLowerCase().indexOf(search) !== -1
        },
       
    async signout() {
      await axios
        .get("logout")
        .then((resp) => {
          this.$toastr.success(resp.data.message, "Success", { timeOut: 2000 });
          localStorage.removeItem("token");
          localStorage.removeItem("userInfo");
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          this.$toastr.error(error.response.data.message, "Error", {
            timeOut: 2000,
          });
        });
    },

        async showAllProducts() {
            await axios
                .get("products")
                .then((resp) => {


                    this.desserts = resp.data.data;

                })
                .catch((error) => {
                    this.$toastr.error(error.response.data.message, "Error", {
                        timeOut: 2000,
                    });
                });

        },

        async deleteItem(id) {

            await axios
                .delete(`products/${id}`)
                .then((resp) => {

                    this.$toastr.success(resp.data.message, "Success", { timeOut: 2000 });
                    this.showAllProducts();
                })
                .catch((error) => {
                    this.$toastr.error(error.response.data.message, "Error", {

                        timeOut: 2000,
                    });
                });
        },
    },
}


</script>

<style scoped>
.button {
    color: blue;
}
</style>