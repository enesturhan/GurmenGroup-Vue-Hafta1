
<template>
   <header>CSS Class App</header>
    <div class="container css--class--app">
      <div class="card text-center">
        <ul class="css--palette text-center">
          <li @click="btnRed" :style="{backgroundColor : element[0].color}"></li>
          <li @click="btnGreen" :style="{backgroundColor : element[1].color}"></li>
          <li @click="btnBlue" :style="{backgroundColor : element[2].color}"></li>
        </ul>
        <div class="result-box backColor" :class="showclass">
        </div>
      </div>
    </div>
</template>
<style>
.backColor{
  background-color: rebeccapurple;
}
</style>

<script >

export default {

  data(){
    return {

      element: [
              {color: "red", selected: false, pointer:"auto"},
              {color: "green", selected: false, pointer:"auto"},
              {color: "blue", selected: false, pointer:"auto"}
              ],
    };
  },
  methods:{
    btnRed(){
         this.element[0].selected= true;
            this.element[1].selected= false;
            this.element[2].selected= false;
            this.element[0].pointer= "none";
            this.element[1].pointer= "auto";
            this.element[2].pointer= "auto";
    },
    btnGreen(){
        this.element[0].selected= false;
            this.element[1].selected= true;
            this.element[2].selected= false;
            this.element[0].pointer= "auto";
            this.element[1].pointer= "none";
            this.element[2].pointer= "auto";
    },
    btnBlue(){
            this.element[0].selected= false;
            this.element[1].selected= false;
            this.element[2].selected= true;
            this.element[0].pointer= "auto";
            this.element[1].pointer= "auto";
            this.element[2].pointer= "none";
    }
  },

  computed :{

    showclass(){
      return {red: this.element[0].selected, green: this.element[1].selected, blue:this.element[2].selected};
    }
  }
}
</script>
