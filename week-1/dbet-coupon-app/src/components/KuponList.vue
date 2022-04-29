<script>
import KuponItem from "@/components/KuponItem";
export default {
  inject: ["provideData"],
    components: {
        KuponItem
    }
}
</script>

<template>

          <div class="card my-coupon">
            <div class="card--header">
 <h4>Kuponum</h4>
            </div>
            <KuponItem v-for="item in provideData.coupons" :key="item.id" :item="item"/>
          </div>
</template>
