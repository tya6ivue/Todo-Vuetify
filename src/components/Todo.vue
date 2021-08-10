

<template>
  <v-app>
    <h1>Enter Todo</h1>
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
        @click="handleAddItems((AddMessage = true))"
        class="ml-16 mb-10"
        dark
        color="indigo"
        :disabled="!newItems || newItems.trim().length === 0"
      >
        <v-icon dark> mdi-plus </v-icon></v-btn
      >
    </span>

    <ul class="list">
      <v-list-item v-for="(item, index) in UpdItems" :key="index">
        <v-list-item-content class="red--text font-family: monospace">
          {{ index }}
        </v-list-item-content>

        <v-list-item-content v-if="!item.isEdit">
          <v-list-item-title v-text="item.name"> </v-list-item-title>
        </v-list-item-content>

        <v-text-field
          v-if="item.isEdit"
          v-model="EditTask"
          label="Edit Task"
        ></v-text-field>

        <v-list-item-icon v-if="item.isEdit">
          <v-icon
            color="primary"
            v-on:click="saveTask(index, (EditMessage = true))"
            :disabled="!EditTask || EditTask.trim().length === 0"
            >mdi-content-save</v-icon
          >
        </v-list-item-icon>
        <v-list-item-icon v-if="!item.isEdit">
          <v-icon color="primary" v-on:click="editTask(index)"
            >mdi-pencil</v-icon
          >
        </v-list-item-icon>

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
      <v-snackbar v-model="AddMessage">
        {{ AddedText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="AddMessage = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <div class="text-center">
      <v-snackbar v-model="EditMessage">
        {{ UpdatedText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="AddMessage = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "todo",

  data() {
    return {
      EditTask: "",
      loading: false,
      DeletedText: "Your data is successfully Deleted ",
      AddedText: "Your data is  successfully Added ",
      UpdatedText: "Your data is  successfully Edit ",
      newItems: "",
      snackbar: "",
      AddMessage: "",
      EditMessage: "",
    };
  },

  computed: {
    UpdItems() {
      return this.$store.state.todo.items;
    },

    ...mapState("todo", ["items"]),
  },

  methods: {
    ...mapActions("todo", ["addItems"]),
    ...mapActions("todo", ["toEdit"]),
    ...mapActions("todo", ["updatenewItems"]),

    editTask(index) {
      this.toEdit(index);
      this.EditTask = this.items[index].name;
    },
    saveTask(index) {
      this.updatenewItems({ index: index, newItems: this.EditTask });
    },

    handleAddItems() {
      if (this.newItems && this.newItems.trim().length > 0) {
        this.addItems({
          AddMessage: true,
          isEdit: false,
          name: this.newItems,
          id: this.items.length + 1,
        });
      }
      this.newItems = "";
    },

    deleteTask(id) {
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

