<template>
  <div class="navbar flex_center">
    <div class="navbar_container">
      <div class="logo">
        <a @click="$router.push('/')">
          <img src="" alt="logo">
        </a>
      </div>
      <div class="links flex_center">
        <div class="navbar_center">
          <a @click="$router.push('/')">Home</a>
          <a @click="$router.push('/catalog')">Catalog</a>
          <a @click="$router.push('/shares')">Shares</a>
          <a @click="$router.push('/about')">About us</a>
          <a @click="$router.push('/contact')">Contacts</a>
        </div>
        <div class="navbar_left">
              <a href=""><img src="../icons/search.svg" alt="search"></a>
              <a @click="$router.push('/cart')">
                <img src="../icons/cart.svg" alt="">
              </a>
              <!-- <a @click="$router.push('/user')">
                <img src="" alt="user">
              </a> -->
              <button class="navbar_btn" @click="showDialog">
                Вход
              </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogIn from '@/components/LogIn.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
export default {
  components: {
    LogIn, MyDialog
  },
  data(){
    return {
      selectedSort: '',
      searchQuery:'',
    }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    showDialog() {
            this.dialogVisible = true
    },
  },
}
</script>


<style scoped>
.navbar {
  height: 100px;
  background-color: #F8F8FB;
}

.navbar_container{
  display: flex;
  align-items: center;
  padding: 15px 0;
  width: 1200px;
}

.links{
  width: 100%;
}

.navbar_center{
  margin: auto;
}
.navbar_center a{
  margin-right: 40px;
}

.navbar_left{
  margin-left: auto;
}
.navbar_left a{
  margin-right: 24px;
}

.flex_center{
  display: flex;
  justify-content: center;

}
a {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  cursor:pointer;
}
.navbar_btn {
  width: 93px;
  height: 44px;
  background: #2B2B2B;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #A5A5A5;
  border: none;
  cursor: pointer;
}
</style>
