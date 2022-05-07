<template>
<div class="card mb-10 comment--item">
          <p>
             {{comment.content}} 
          </p>
          <div class="action--button--container text-right mt-10">
            <button @click="Updatelike(comment)" class="btn-sm btn-success" :id="comment" :key="comment">Beğendim ({{ comment.likeCount }})</button>
            <button @click="Updatedislike(comment)" class="btn-sm btn-danger" :id="comment" :key="comment">Beğenmedim ({{ comment.dislikeCount }})</button>
          </div>
        </div>
</template>

<script>
 export default {
 
     props : ["comment"],
     inject: ["provideData"],
    methods: {
        Updatelike(comment){
         
            comment.likeCount++;
           
        },
        Updatedislike(comment){
            comment.dislikeCount++;
        }
    }
 }
</script>