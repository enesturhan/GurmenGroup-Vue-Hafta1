<template>
<div class="card mb-10 comment--item">
          <p>
             {{comment.content}} 
          </p>
          <div class="action--button--container text-right mt-10">
            <button @click="like(comment)" class="btn-sm btn-success" :id="comment" :key="comment">Beğendim ({{ comment.like }})</button>
            <button @click="dislike(comment)" class="btn-sm btn-danger" :id="comment" :key="comment">Beğenmedim ({{ comment.dislike }})</button>
          </div>
        </div>
</template>

<script>
 export default {
    //  props : ["comment", "like","dislike"],
     props : ["comment"],
     inject: ["provideData"],
    methods: {
        like(comment){
         
            comment.like++;
           
        },
        dislike(comment){
            comment.dislike++;
        }
    }
 }
</script>