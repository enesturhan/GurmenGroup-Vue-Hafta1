<template>
<header>Bookmark App</header>

    <div class="container">
      <div class="bookmark--app--container">
        
        <AppBookmark v-for="item in provideData.Bookmarks" :key="item.id" :item="item"/>

      </div>
    </div>
</template>

<script>
import appBookmark from "@/components/appBookmark"
import AppBookmark from "./components/appBookmark.vue";

export default {
  data(){
    return {
      provideData : {
        Bookmarks: [
        {id: 1, header: "Bookmark1", description: "Açıklama 1", link:"https://www.lipsum.com/", clicked:false},
        {id: 2, header: "Bookmark2", description: "Açıklama 2", link:"https://www.lipsum.com/", clicked:false},
        {id: 3, header: "Bookmark3", description: "Açıklama 3", link:"https://www.lipsum.com/", clicked:false}
      ]
      }
    };
  },
  components: {
    appBookmark,
    AppBookmark
},

    provide() {
      return {
        provideData: this.provideData,
        removeBookmark: this.removeBookmark
      }
    },

    methods: {
      removeBookmark(item){
        this.provideData.Bookmarks = this.provideData.Bookmarks.filter((b) => b != item);
      }
    }
}
</script>