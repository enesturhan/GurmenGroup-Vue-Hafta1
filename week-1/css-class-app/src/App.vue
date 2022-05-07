<template>


    <header>CSS Class App</header>
    <div class="container css--class--app">
      <div class="card text-center">
        <ul class="css--palette text-center">
          <li @click="clickedForRed" :style="{backgroundColor : colorItems[0].color}"></li>
          <li @click="clickedForGreen" :style="{backgroundColor : colorItems[1].color}"></li>
          <li @click="clickedForBlue" :style="{backgroundColor : colorItems[2].color}"></li>
        </ul>
        <div class="result-box bgColor" :class="changeBackground">
        </div>
      </div>
    </div>
  <!-- </body> -->
</template>

<style>
.bgColor{
  background-color: blue;
}
</style>

<script>

    export default {
        data(){
          return {

            colorItems: [
              {color: "purple", selected: false},
              {color: "white", selected: false},
              {color: "black", selected: false}
              ],
          };
        },
        methods: {
          changePurple(){

            this.colorItems[0].selected= true;
            this.colorItems[1].selected= false;
            this.colorItems[2].selected= false;
        
          },
          changeWhite(){

            this.colorItems[0].selected= false;
            this.colorItems[1].selected= true;
            this.colorItems[2].selected= false;
           
          },
          changeBlack(){
            this.colorItems[0].selected= false;
            this.colorItems[1].selected= false;
            this.colorItems[2].selected= true;
         
          }
        },
        computed : {
        changeBackground(){
          
            return {red: this.colorItems[0].selected, green: this.colorItems[1].selected, blue:this.colorItems[2].selected};
        }
    }
    }
</script>




