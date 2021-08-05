

<template>
  <v-app>
    <h1 class="text">Enter Todo</h1>
    <span>
      <v-text-field
        placeholder="Type here"
        clearable
        flat
        solo-inverted
        class="mx-16"
        v-model="newItems"
      ></v-text-field>

      <v-btn
        depressed
        @click="addItems((Addsnackbar = true))"
        class="ml-16 mb-10"
        dark
        color="indigo"
        :disabled="newItems.length === 0"
      >
        <v-icon dark> mdi-plus </v-icon></v-btn
      >
    </span>

    <ul class="list">
      <v-list-item class="box" v-for="(item, index) in sortFunc()" :key="index">
        <v-list-item-content id="table" class="red--text">
          {{ item.name }}
        </v-list-item-content>

        <v-btn class="mx-2" fab outlined large color="cyan">
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>

        <v-btn
          @click="deleteTask(item.id), (snackbar = true)"
          :loading="loading"
          class="ma-1"
          color="primary"
          plain
        >
          Delete
        </v-btn>
      </v-list-item>
    </ul>

    <div class="text-center">
      <v-snackbar v-model="snackbar">
        {{ DeletedText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <div class="text-center">
      <v-snackbar v-model="Addsnackbar">
        {{ AddedText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="Addsnackbar = false">
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
      DeletedText: "Your data is successfully Deleted ",
      AddedText: "Your data is  successfully Added ",
      newItems: [],
      snackbar: "",
      Addsnackbar: "",
    };
  },

  Computed: {
    ...mapState(["items"]),

    ...mapMutations(["addItems"]),
    ...mapGetters(["sortFunc"]),
  },

  methods: {
    addItems() {
      console.log("eefreg");
      this.$store.state.items.push({
        name: this.newItems,
        id: this.sortFunc.length + 1,
      });

      this.newItems = "";
    },
    sortFunc() {
      console.log("dfrgr");
      return this.$store.state.items.slice().sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      });
    },
    deleteTask(id) {
      console.log(this.items.length);
      var i = 0;
      var rindex = 0;
      for (i = 0; i < this.items.length; i++) {
        if (this.items[i].id == id) {
          rindex = i;
        }
      }
      this.items.splice(rindex, 1);
    },
  },
};
</script>


<style scoped>
.box {
  max-width: 600px;
  border: 1px solid rebeccapurple;
  margin: auto;
}
.input {
  max-width: 50%;
  margin-left: 16px;
}
.text {
  text-align: center;
}
</style>