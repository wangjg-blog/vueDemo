<template>
  <div m-role="UINavigationBar" class="indexBar">
        <div class="UINavigationBarRoom" style="background:#157fd0;">
            <div m-role="left" style="width:1.5rem">
                <div m-size="min" m-role="UIButton" m-href="" id="backBtn">
                    <i class="icon icon-go-back"></i>
                </div>
            </div>
            <div m-role="title">
                <div m-role="cell" m-mode="y" m-align="center">
                    <div m-role="cell" class="font-15" id="fundname"></div>
                    <div m-role="cell" class="font-12">
                      <span m-margin="0 1 0 0" id="fundcode"></span>
                      <span id="fundstate"></span>
                    </div>
                </div>
            </div>
            <div m-role="right" style="width:1.5rem">
        <div m-role="UIButton" m-size="min" style="padding-right:0px;">
          <div class="navicon navicon5" style="margin-bottom:2px;display:none" id="share-btn"></div>
        </div>
        <div m-role="UIButton" m-size="min" style="padding-left:0px;" id="fav-btn">
          <div class="fund-fav-item" ></div>
        </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my-header',
  props: {
    
  },
  data:function(){
      return{
         
      }
  },
  ready () {
   
  },
  computed: {

  },
  methods: {
   
  }
}
</script>

<style>

</style>
