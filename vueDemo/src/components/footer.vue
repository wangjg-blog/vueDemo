<template>
  <div m-role="UIBottomBar">
    <div class="UIBottomBarRoom">
        <div m-role="cell" m-align="center" m-layout="fit" m-mode="x-equal" class="menu-bottom" id="channel-1">
            <div v-for="(index , todo) in todos" @click="navTab(index)" m-role="cell" m-mode="y" m-align="center" :class="{active:todo.isActive}" class="tab-link"> 
                <div m-role="cell"><i :class="'icon-b icon-menu-'+(index+1)"></i></div>
                <div m-role="cell" class="font-11">{{todo.text}}</div>
            </div> 
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  props: {
    
  },
  data:function(){
      return{
          todos: [
            { text: '首页',isActive:true},
            { text: '精选理财',isActive:false },
            { text: '基金超市',isActive:false },
            { text: '我的',isActive:false }
          ]
      }
  },
  computed: {

  },
  methods: {
    navTab: function (index) {
      for(var i=0;i<this.todos.length;i++){
        this.todos[i].isActive=false;
      }
      this.todos[index].isActive=true;   
    }
  }
}
</script>

<style>

</style>
