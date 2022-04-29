<template>
<header>Kurs Planlaması</header>
    <div class="container">
      <div class="course--planner-app--container">
        
        <AppAddCourse :addCourseItem="addCourseItem"/>
        <AppCourseList/>
        
        <div class="mt-10">
        <div v-if="uncompleted>0">
          <small >Daha İzlenecek {{ uncompleted }} adet kursunuz var.</small>
          <br>
          </div>
          <small v-if="completed>0">Daha İzlenmiş {{ completed }} adet kursunuz var.</small>
        </div>
           </div>
    </div>
</template>
        
  
<script>

import AppAddCourse from "@/components/AppAddCourse";
import AppCourseList from ".@/components/AppCourseList";

  export default {
  components: {
    
    AppCourseList,
    AppAddCourse
},
    data() {
    return  {

      provideData : {
        CourseList: [
       {id: 1, text: "Vue.js", checked:true},
       {id: 2, text: "React.js", checked:false}
      ],
      
      }
    };
  },

  provide(){
    return {
      provideData: this.provideData
    };
  },
  methods: {
    addCourseItem(item){
      //console.log(this.provideData.todoList);
      this.provideData.CourseList.push({
        id: new Date().getTime(),
        text: item,
        checked: false
      });
    }
  },
  computed: {
    uncompleted(){
      return this.provideData.CourseList.filter((c) => !c.checked).length;
    },
    completed(){
      return this.provideData.CourseList.filter((c) => c.checked).length;
    }
  }
  }
</script>