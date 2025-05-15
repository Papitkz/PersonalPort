<template>
    <div>
     <v-container fluid class="pa-0" style="position: relative;">
       <router-view />
       <div v-if="!isMobile">
         <v-toolbar style="background-color:transparent;padding-top:20px">
         <v-spacer/><v-spacer/>
         <v-spacer/><v-spacer/>
         <v-spacer/>
         <v-toolbar-items  style=" font-family: 'Suisse'; color: black !important;">
           <v-btn @click="goToHome()" :ripple="false" type="text" width="100">Work</v-btn>
           <v-btn @click="goToAbout()" :ripple="false" type="text" width="100">About</v-btn>
           <v-btn   :ripple="false" type="text" width="100">Blog</v-btn>
           <v-btn :ripple="false" type="text" width="100">Contact</v-btn>
         </v-toolbar-items>
         <v-spacer/>
       </v-toolbar>
       </div>
       <div v-if="isMobile">
           <label class="container mr-3 mt-3" style="padding:15px;position:fixed;right:0;top:0;z-index:2000;">
           <input type="checkbox" @change="toggleMenu" />
           <div class="checkmark">
             <span></span><span></span><span></span>
           </div>
         </label>
 
         <!-- Slide-in mobile menu -->
         <transition name="slide-fade">
           <div v-if="showMenu" class="mobile-menu" @click.self="toggleMenu">
             <div class="menu-content">
               <v-btn text @click="goToHome()" >Work</v-btn>
               <v-btn text @click="goToAbout()">About</v-btn>
               <v-btn text >Blog</v-btn>
               <v-btn text @click="navigateTo('contact')">Contact</v-btn>
             </div>
           </div>
         </transition>
        </div>
       </v-container>
     </div>
 </template>
 
 <script>
 import { useHead } from '@vueuse/head'
 
 export default {
     data() {
         return {
             isMobile: false,
             showMenu: false,
         }
     },
     created() {
     this.checkIsMobile()
     window.addEventListener('resize', this.checkIsMobile)
     },
 
     beforeUnmount() {
         window.removeEventListener('resize', this.checkIsMobile)
     },
 
     mounted() {
         this.checkIsMobile()
         window.addEventListener("scroll", this.handleScroll, { passive: true })
         this.observeFadeInSections()
     },
     methods: {
     observeFadeInSections() {
       const faders = document.querySelectorAll('.fade-in-section')
       const options = { threshold: 0.15 }
 
       const appearOnScroll = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
           if (!entry.isIntersecting) return
           entry.target.classList.add('is-visible')
           observer.unobserve(entry.target)
         })
       }, options)
 
       faders.forEach(fader => appearOnScroll.observe(fader))
      },
     checkIsMobile() {
       this.isMobile = window.innerWidth <= 768
     },   
     toggleMenu() {
       this.showMenu = !this.showMenu
     },
     goToHome() {
       this.$router.push('/')
     },
     goToAbout() {
       this.$router.push('/about');
     },
 
     },
     setup() {
     useHead({
       title: 'Blog Nick',
       meta: [{ name: 'description', content: 'Blog' },
             { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } 
       ]
     })
   }
     
 
 }
 </script>
 
 
 <style>
 /* MENU ICON */
 .container input {
   position: absolute;
   opacity: 0;
   cursor: pointer;
   height: 0;
   width: 0;
 }
 
 .container {
   display: block;
   position: relative;
   cursor: pointer;
   font-size: 20px;
   user-select: none;
 }
 
 .checkmark {
   position: relative;
   top: 0;
   left: 0;
   height: 1.3em;
   width: 1.3em;
 }
 
 .checkmark span {
   width: 32px;
   height: 2px;
   background-color: rgb(12, 11, 11);
   position: absolute;
   transition: all 0.3s ease-in-out;
   -webkit-transition: all 0.3s ease-in-out;
   -moz-transition: all 0.3s ease-in-out;
   -ms-transition: all 0.3s ease-in-out;
   -o-transition: all 0.3s ease-in-out;
 }
 
 .checkmark span:nth-child(1) {
   top: 10%;
 }
 
 .checkmark span:nth-child(2) {
   top: 50%;
 }
 
 .checkmark span:nth-child(3) {
   top: 90%;
 }
 
 .container input:checked + .checkmark span:nth-child(1) {
   top: 50%;
   transform: translateY(-50%) rotate(45deg);
   -webkit-transform: translateY(-50%) rotate(45deg);
   -moz-transform: translateY(-50%) rotate(45deg);
   -ms-transform: translateY(-50%) rotate(45deg);
   -o-transform: translateY(-50%) rotate(45deg);
 }
 
 .container input:checked + .checkmark span:nth-child(2) {
   top: 50%;
   transform: translateY(-50%) rotate(-45deg);
   -webkit-transform: translateY(-50%) rotate(-45deg);
   -moz-transform: translateY(-50%) rotate(-45deg);
   -ms-transform: translateY(-50%) rotate(-45deg);
   -o-transform: translateY(-50%) rotate(-45deg);
 }
 
 .container input:checked + .checkmark span:nth-child(3) {
   transform: translateX(-50px);
   -webkit-transform: translateX(-50px);
   -moz-transform: translateX(-50px);
   -ms-transform: translateX(-50px);
   -o-transform: translateX(-50px);
   opacity: 0;
 }
 
 /* MENU  */
 .mobile-menu {
   position: fixed;
   top: 0;
   right: 0;
   width: 75%;
   height: 100%;
   background: white;
   z-index: 1999;
   box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
   display: flex;
   justify-content: center;
   align-items: center;
 }
 
 .menu-content {
   display: flex;
   flex-direction: column;
   gap: 20px;
   font-family: 'Suisse';
   text-align: center;
 }
 
 .menu-content .v-btn {
   font-size: 20px;
   color: #111 !important;
 }
 /* animation */
 .fade-in-section {
   opacity: 0;
   transform: translateY(20px);
   transition: opacity 1s ease-out, transform 1s ease-out;
 }
 .fade-in-section.is-visible {
   opacity: 1;
   transform: translateY(0);
 }
 
 .slide-fade-enter-active, .slide-fade-leave-active {
   transition: all 0.3s ease;
 }
 .slide-fade-enter-from, .slide-fade-leave-to {
   opacity: 0;
   transform: translateX(100%);
 }
 
 
 </style>
 
 <style lang="scss">
 @import "../assets/fonts/fonts.css";
 @font-face {
   font-family: "Suisse";
   src: url("../src/assets/font/fonnts.com-Suisse_Intl_Regular.ttf") format("opentype");
   font-style: normal;
 }
 </style>
 