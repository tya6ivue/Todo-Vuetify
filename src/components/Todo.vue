

<template>
  <v-app>
    <h1 class="text">Enter Todo</h1>
    <span>
      <v-text-field
        font-family:
        monospace
        placeholder="Type here"
        clearable
        flat
        solo-inverted
        class="mx-16"
        v-model="newItems"
      ></v-text-field>

      <v-btn
        depressed
        @click="handleAddItems((Addsnackbar = true))"
        class="ml-16 mb-10"
        dark
        color="indigo"
        :disabled="!newItems || newItems.trim().length === 0"
      >
        <v-icon dark> mdi-plus </v-icon></v-btn
      >
    </span>

    <ul class="list">
      <v-list-item class="box" v-for="(item, index) in UpdItems" :key="index">
        <v-list-item-content
          id="table"
          class="red--text font-family: monospace"
        >
          {{ index }}
        </v-list-item-content>

        <v-list-item-content v-if="!item.isEdit">
          <v-list-item-title v-text="item.name"> </v-list-item-title>
        </v-list-item-content>

        <v-text-field
          v-if="item.isEdit"
          v-model="eTask"
          label="Edit Task"
        ></v-text-field>

        <v-list-item-icon v-if="item.isEdit">
          <v-icon
            color="primary"
            v-on:click="saveTask(index, (Editsnackbar = true))"
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
      <v-snackbar v-model="Addsnackbar">
        {{ AddedText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="Addsnackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <div class="text-center">
      <v-snackbar v-model="Editsnackbar">
        {{ UpdatedText }}

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
import { mapState, mapActions } from "vuex";
export default {
  name: "todo",

  data() {
    return {
      eTask: "",
      // loading3: false,
      loading: false,
      DeletedText: "Your data is successfully Deleted ",
      AddedText: "Your data is  successfully Added ",
      UpdatedText: "Your data is  successfully Edit ",
      newItems: "",
      snackbar: "",
      Addsnackbar: "",
      Editsnackbar: "",
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
      this.eTask = this.items[index].name;
    },
    saveTask(index) {
      this.updatenewItems({ index: index, newItems: this.eTask });
    },

    handleAddItems() {
      if (this.newItems && this.newItems.trim().length > 0) {
        {
          this.addItems({
            Addsnackbar: true,
            isEdit: false,
            name: this.newItems,
            id: this.items.length + 1,
          });
        }
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