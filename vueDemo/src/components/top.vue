<template>
  <div m-role="UINavigationBar" class="indexBar" style="display: block;" >
      <div class="UINavigationBarRoom {{scrolledAddClass}}">
          <div m-role="left" style="width:1.2rem;">
          </div>
          <div m-role="title" m-href="search.html">
              <div class="discover-searchbar">
                  <div m-role="cell" m-layout="fit" class="search-box">
                      <input maxlength="" type="text" value="" placeholder="你要找的都在这里" readonly>
                      <div m-icon="search"></div>
                  </div>
              </div>
          </div>
          <div m-role="right" style="width:1.2rem;">
              <div m-role="cell" class="letter" m-href="news-list.html" style="display: none;">
                  <span class="letter-num" style="display: none;"></span>
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
          scrolledAddClass: null
      }
  },
  ready () {
      window.addEventListener('scroll', this.handleScroll);
  },
  computed: {

  },
  methods: {
    handleScroll () {
      this.scrolledAddClass = window.scrollY > 0 ? (window.scrollY > 100 ? "search-col2" : "search-col1") : "";
    }
  }
}
</script>

<style>

</style>
