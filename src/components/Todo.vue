

<template>
  <v-app>
    <h1>Enter Todo</h1>
    <span>
      <v-text-field
        placeholder="Type here"
        v-model="newItems"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Add"
      ></v-text-field>

      <v-btn
        @click="addItems"
        class="mx-2"
        fab
        dark
        color="indigo"
        :disabled="newItems.length === 0"
      >
        <v-icon dark> mdi-plus </v-icon></v-btn
      >
    </span>

    <ul class="list">
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-content class="blue--text">
          {{ item.name }}
        </v-list-item-content>
        <v-btn
          @click="deleteTask(index)"
          :loading="loading"
          class="ma-1"
          color="red"
          plain
          >Delete</v-btn
        >
      </v-list-item>
    </ul>
    <!-- <v-footer>
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="SubmitData"
      >
        Upload
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>
    </v-footer> -->

    <div class="text-center">
      <v-btn dark color="red darken-2" @click="snackbar = true">
        Upload
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>

      <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      newItems: "",
      loading3: false,
      loading: false,
      snackbar: "",
      text: "Your data is sussesfully added",

      items: [
        { id: 1, name: "Jack", completed: true },
        { id: 2, name: "Nick", completed: false },
        { id: 3, name: "Thomash", completed: false },
      ],
    };
  },
  methods: {
    addItems() {
      this.items.push({
        id: this.items.length + 1,
        name: this.newItems,
        completed: false,
      });
      console.log("rgg");
      this.newItems = "";
    },

    deleteTask(index) {
      this.items.splice(index, 1);
    },
    // SubmitData() {
    //   alert(this.items[1].name);
    // },
  },
};
</script>


<style scoped>
.dfer {
  margin-left: 10px;
}
</style>