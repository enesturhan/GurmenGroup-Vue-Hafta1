<script>
export default {
  props: ["item"]
}
</script>

<template>
<div class="card--body">


              <div class="coupon-item">
                <div class="w-100 mb-5 d-flex justify-content-between align-items-center">
                  <span class="font-weight-bold">{{item.host}} x {{item.oppenent}}</span>
                  <span class="font-weight-bold text-info">{{item.ratio}}</span>
                </div>
                <div class="w-100 d-flex justify-content-between align-items-center">
                  <small class="mt-5">Maç Sonucu : <span class="font-weight-bold">{{item.result}}</span></small>
                  <small class="text-muted">Saat : {{item.time}}</small>
                </div>
              </div>
            </div>

</template>

