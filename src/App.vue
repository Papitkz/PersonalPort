<template>
  <div id="app">
    <router-view />
    <button class="scroll-top-btn" @click="scrollToTop" aria-label="Scroll to top">
      ↑
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScrollTopButton',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style>
.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #615d65 0%, #0d1016 100%);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(37, 117, 252, 0.3);
  transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  user-select: none;
}

.scroll-top-btn:hover {
  background: linear-gradient(135deg, #495365 0%, #374291 100%);
  box-shadow: 0 12px 20px rgba(37, 117, 252, 0.6);
  transform: translateY(-4px);
}

.scroll-top-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(9, 134, 196, 0.7)
}
</style>
