<template>
<div class="card card-light mt-20">

          <h3>Kurslar</h3>

          <ul class="list mt-20">
          <AppMyCourse v-for="item in provideData.todoList" :key="item.id" :item="item"/>
          </ul>
        </div>
</template>

<script>
import AppMyCourse from "@/components/AppMyCourse";
export default {
    inject: ["provideData"],
    components: {
        AppMyCourse
    }
}
</script>