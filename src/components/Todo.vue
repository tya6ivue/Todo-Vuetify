

<template>
    <div>
        <input  type="text" placeholder="type here"  v-model="newItems" >
        
        <v-btn @click="addItems" class="button" :disabled="newItems.length === 0">Add</v-btn>
        <ul class="list">
            <li  v-for="(item, index) in items" :key="index" :class="{completed: item.completed}">
                 <!-- <input type="checkbox" class="list-item-toggle" @click="toggleComplete(item)">  -->
                 <!-- <span class="text-h1">{{item.name}}</span> -->
                <span class="text-h1">{{item.name}}</span>
                <button  @click="deleteTask(index)">X</button>
            </li>
            
        </ul>
     <v-btn @click="SubmitData">Submit</v-btn>
     
    </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      newItems: "",

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
    // toggleComplete(item) {
    //     item.completed != item.completed
    // },
    deleteTask(index) {
      this.items.splice(index, 1);
    },
    SubmitData() {
        alert("eef")
    }
  },
};
</script>

<style scoped>
.button {
  color: red;
  background-color: blue;
}
.list-item-toggle {
  border: 1px solid #e8e8e8;
  border-radius: 999px;
  height: 21px;
  width: 21px;
  margin-right: 16px;
}
button:disabled {
  background: #e70707;
  color: #555;
  box-shadow: none;
}
</style>