<template>

<header>Bet Coupon App</header>
    <div class="container">
      <div class="bet--coupon--app d-flex justify-content-between align-items-start">

 
      </div>
      </div>
    
</template>


<script>
import KuponList from "@/components/KuponList";

export default {
  components: {
    KuponList
 
},


data() {
    return  {
      provideData : {
        competitions: [
       {id: 1, host: "Galata", oppenent:"Fenerbahçe", time:"20:30", ratio1: {msRate1:"1.50",result:1, selected: false}, ratio0:{msRate0:"2.14", result:0, selected: false}, ratio2:{msRate2:"2.50", result:2, selected: false}},
      
       
      ],
    
      },
   
    };
  },
}