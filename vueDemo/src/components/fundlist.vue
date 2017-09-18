<template>
  <div m-role="cell" class="choice-fund" m-mode="y">
      <div m-role="cell" m-valign="middle" class="font-15 m-color-6 choice-fund-head">
        <span>精选基金</span>
        <span class="more-infor" m-href="/pages/fund-list.html">更多..</span>
      </div>

      <div m-role="cell" m-mode="x" class="new-pro">
        <div m-role="cell" class="new-pro-logo" m-valign="middle" m-align="center">
          <div m-role="cell" m-mode="y" m-align="center" class="choice-fund-num">
            <div m-role="cell" class="font-21 m-color-red font-bold" style="margin-top: 0.3rem">

              <span>
            <span class="font-38">2</span>.
              <span>32%</span>
              </span>
            </div>
            <div m-role="cell" class="font-12 m-color-9">月涨跌</div>
          </div>
        </div>
        <div m-role="cell" m-mode="y" m-valign="middle" class="pro_left" m-layout="fit" m-href="fund-detail://163412">
          <div m-role="cell" m-mode="x">
            <div m-role="cell" class="font-15 m-color-1">轻资产</div>
            <div m-role="cell" class="font-11 m-color-6 home-fundtype">混合型</div>
          </div>
          <div m-role="cell" class="font-11 m-color-red" m-margin="1 0 1 0">转债投资首选,攻守兼备的现金奶牛</div>
          <div m-role="cell" m-mode="x" class="fund-trait" m-margin="1 0 0 0" style="display:flex;flex-wrap:wrap;">
            <div m-role="cell" m-margin="0 1 1 0" class="font-11 m-color-9 pro-border">中高风险</div>
            <div m-role="cell" m-margin="0 1 1 0" class="font-11 m-color-9 pro-border">均衡配置</div>
          </div>
        </div>
      </div>
      <div m-role="cell" m-mode="x" class="new-pro">
        <div m-role="cell" class="new-pro-logo" m-valign="middle" m-align="center">

          <div m-role="cell" m-mode="y" m-align="center" class="choice-fund-num">
            <div m-role="cell" class="font-21 m-color-red font-bold" style="margin-top: 0.3rem">

              <span>
            <span class="font-38">14</span>.
              <span>89%</span>
              </span>
            </div>
            <div m-role="cell" class="font-12 m-color-9">2年涨跌</div>
          </div>
        </div>
        <div m-role="cell" m-mode="y" m-valign="middle" class="pro_left" m-layout="fit" m-href="fund-detail://163407">
          <div m-role="cell" m-mode="x">
            <div m-role="cell" class="font-15 m-color-1">300</div>
            <div m-role="cell" class="font-11 m-color-6 home-fundtype">指数型</div>
          </div>
          <div m-role="cell" class="font-11 m-color-red" m-margin="1 0 1 0">经典好指数，定投必备</div>
          <div m-role="cell" m-mode="x" class="fund-trait" m-margin="1 0 0 0" style="display:flex;flex-wrap:wrap;">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'my-fundList',
  props: {
   
  },
  data:function(){
      return{
        
      }
  },
  computed: {

  },
  methods: {
    navTab: function (index) {
        
    }
  }
}
</script>

<style>

</style>
