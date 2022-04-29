<template>
<div class="card">
          <div class="user--action--container">
            <div class="form-group">
              <label>Kursun Adı</label>
              <input v-model="courseName" type="text" id="courseName"/>
            </div>
            <button @click="addCourseItem(courseName)" class="btn-primary">   Kurs    Ekle</button>
          </div>
        </div>
</template>


<script>



export default {
    props: {
        addCourseItem: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            courseName: null,
        }
    }
}
</script>