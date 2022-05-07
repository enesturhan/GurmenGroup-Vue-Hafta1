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
        {id: 3, header: "Bookmark3", description: "Açıklama 3", link:"https://www.lipsum.com/", clicked:false},
        {id: 4, header: "Bookmark4", description: "Açıklama 4", link:"https://www.lipsum.com/", clicked:false},
        {id: 5, header: "Bookmark5", description: "Açıklama 5", link:"https://www.lipsum.com/", clicked:false},
        {id: 6, header: "Bookmark6", description: "Açıklama 6", link:"https://www.lipsum.com/", clicked:false},
        {id: 7, header: "Bookmark7", description: "Açıklama 7", link:"https://www.lipsum.com/", clicked:false},
        {id: 8, header: "Bookmark8", description: "Açıklama 8", link:"https://www.lipsum.com/", clicked:false},
        {id: 9, header: "Bookmark9", description: "Açıklama 9", link:"https://www.lipsum.com/", clicked:false},
        {id: 10, header: "Bookmark10", description: "Açıklama 10", link:"https://www.lipsum.com/", clicked:false},
        {id: 11, header: "Bookmark11", description: "Açıklama 11", link:"https://www.lipsum.com/", clicked:false},
        {id: 12, header: "Bookmark12", description: "Açıklama12", link:"https://www.lipsum.com/", clicked:false}

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