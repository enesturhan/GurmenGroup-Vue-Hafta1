<template>
            <li v-if="!courseItem.checked" class="course-item list-item bg-danger">
              <span>{{courseItem.text}}</span>
              <input type="checkbox" :id="item.id" v-model="courseItem.checked"/>
            </li>
            <li v-else-if="courseItem.checked" class="course-item list-item bg-success">
              <span>{{courseItem.text}}</span>
              <input type="checkbox" :id="item.id" v-model="item.checked"/>
            </li>
</template>

<script>
export default {
    props: ["courseItem"]
}
</script>

<!-- Burada course itemler ayrı ayrı component olmalıdır cünkü tekrar eden yapımız course itemleridir.
 -->