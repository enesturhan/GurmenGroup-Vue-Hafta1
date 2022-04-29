<template>

  <header>Class List App</header>
    <div class="container">
      <div class="class--list--app">
        <div class="card">
          <ul class="class-list">
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxes[0].id" v-model="checkBoxes[0].checked"/>
                <span>Background Color</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxes[1].id" v-model="checkBoxes[1].checked"/>
                <span>Border</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxes[2].id" v-model="checkBoxes[2].checked"/>
                <span>Border Radius</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxes[3].id" v-model="checkBoxList[3].checked"/>
                <span>Color</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxes[4].id" v-model="checkBoxList[4].checked"/>
                <span>Font Bold</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxes[5].id" v-model="checkBoxList[5].checked"/>
                <span>Font Italic</span>
              </label>
            </li>
          </ul>

          <textarea rows="5" cols="70" :class="StyleClasses">
          </textarea>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
        data(){
          return {
            checkBoxes: [
              {id: 1, checked: false,},
              {id: 2, checked: false,},
              {id: 3, checked: false,},
              {id: 4, checked: false,},
              {id: 5, checked: false,},
              {id: 6, checked: false,}
            ],
          };
        },

        computed : {
          StyleClasses(){
            return {
            classBackground: this.checkBoxes[0].checked, 
            classBorder: this.checkBoxes[1].checked,
            classBorderRadius: this.checkBoxes[2].checked,
            classColor: this.checkBoxes[3].checked,
            classFontBold: this.checkBoxes[4].checked,
            classFontItalic: this.checkBoxes[5].checked
            }
          }
        }
  }
</script>

<style>
.textareaBackground{
  background-color: rebeccapurple;
}
.textareaBorder{
  border: 5px solid black;
}
.textareaBorderRadius{
  border-radius: 20px;
}
.textareaColor {
  color: red;
}
.textareaFontBold {
  font-weight: bold;
}
.textareaFontItalic{
  font-style: italic;
}
</style>