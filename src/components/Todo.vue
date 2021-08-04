

<template>
  <v-app>
    <h1>Enter Todo</h1>
    <span>
      <v-text-field
        placeholder="Type here"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        v-model="newItems"
      ></v-text-field>

      <div>
        <v-btn
          @click="addItems"
          class="mx-10"
          fab
          dark
          color="indigo"
          :disabled="newItems.length === 0"
        >
          <v-icon dark> mdi-plus </v-icon></v-btn
        >sortFunction
      </div>
    </span>
    {{ sortFunc() }}

    <ul class="list">
      <v-list-item v-for="(item, index) in sortFunction" :key="index">
        <v-list-item-content class="red--text">
          {{ item.name }}
        </v-list-item-content>
        <v-btn
          @click="deleteTask(index)"
          :loading="loading"
          class="ma-1"
          color="purple darken-3"
          plain
        >
          Delete
        </v-btn>
      </v-list-item>
    </ul>

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
import { mapState, mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "todo",

  data() {
    return {
      loading3: false,
      loading: false,
      items: this.$store.state.items,
      text: "Your data is sussesfully added",
      newItems: [],
      snackbar: "",
    };
  },

  Computed: {
    ...mapState(["items"]),

    ...mapMutations(["addItems"]),
    ...mapGetters([sortFunction]),
  },

  methods: {
    addItems: function () {
      this.$store.dispatch("addItems");
      this.newItems = "";
    },
    deleteTask(index) {
      console.log(index);
      this.items.splice(index, 1);
      console.log(this.items);
    },
  },
};
</script>


<style scoped>
.dfer {
  margin-left: 10px;
}
</style>