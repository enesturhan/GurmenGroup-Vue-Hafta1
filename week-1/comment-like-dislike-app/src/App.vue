<template>
 <header>Comment Like/Dislike App</header>
    <div class="container">
      <div class="comment--like--dislike--app">

        <AppComment :like="like" :dislike="dislike" v-for="comment in provideData.comments" :key="comment.id" :comment="comment"/>


      </div>
    </div>
</template>

<script>

import AppComment from "./components/appComment.vue";

export default {
components : {
    AppComment
},
  data(){
    return {
      provideData: {
      comments: [
        {id: 1, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint", likeCount: 0, dislikeCount: 0},
        {id: 2, content: "perferendis delectus? Nostrum corporis, quod voluptates quis", likeCount: 0, dislikeCount: 0},
        {id: 3, content: "consequuntur eveniet beatae dolor aperiam ad.", likeCount: 0, dislikeCount: 0},
      ]
      }
    };
  },
  provide(){
    return {
      provideData: this.provideData.comments
    }
  },
}
</script>