<template>
    <div class="bookmark-item">
          <div class="header">
            <h3>{{item.title}}</h3>
            <button @click="removeBookmark(item)" class="btn-sm btn-danger">Kaydı Sil</button>
          </div>
          <p class="mt-20 mb-20">{{item.description}}</p>
          <button @click="directLink(item)" class="btn-primary btn-sm" id="item.id">Göster</button>
        </div>
</template>

<script>
export default {
    data(){
    },
    methods: {
        directLink(item){
       
            window.open(item.link,"_blank");
        }
    },
    props : ["item"],
    inject : ["provideData", "removeBookmark"]
}
</script>