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
         <v-btn @click="goToBlog()"  :ripple="false" type="text" width="100">Blog</v-btn>
         <v-btn @click="goToHome()" :ripple="false" type="text" width="100">Contact</v-btn>
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
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToHome()">Work</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToAbout()">About</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToBlog()">Blog</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToHome()">Contact</v-btn>
            </div>
          </div>
        </transition>
      </div>
      

      <section :style="{ marginTop: isMobile ? '15vh' : '' }">
          <div :style="{minHeight: isMobile ? '50vh' : '100vh'}" class="d-flex justify-center" style=" background: #eaeaea;">
              <v-img @click="goToHome()"  :height="isMobile ? '48vh' : '98vh'"   src="/Google.png"></v-img>
          </div>
      </section>

      <section  :style="{   paddingLeft: isMobile ? '12px' : '0',  paddingRight: isMobile ? '12px' : '0', }">
        <div style="min-height:100vh; background: #fff;" :style="{paddingLeft : isMobile ? '' : '12%',
        paddingRight : isMobile ? '' : '12%',paddingTop:isMobile ? '5vh' : '5%'}">
          <h1 class="heading"  style="font-family:Suisse !important;font-weight:400;" :style="{fontSize : isMobile ? '42px' : '84px'}"> Google</h1>
         <br v-if="isMobile"/>
          <v-row no-gutters style="border-bottom:0.5px solid #d3d3d3;padding-bottom:1.5%;text-align:start" v-if="!isMobile">
            <v-col style="font-family: 'Suisse'" cols="12" md="6">Project</v-col>
            <v-col style="font-family: 'Suisse'" cols="12" md="6">About</v-col>
          </v-row>
          <v-row no-gutters :style="{paddingTop: isMobile ? '0' : '6%'}" >
            <v-col cols="12" md="6" v-if="!isMobile">
              <div class="paragraph-1 grey" style="font-family:Suisse !important;color: #a0a0a0 ;font-size: 16px;">Role
                <br>Product design
                <br>Interaction design
                <br>Prototyping
                <br>Design system<br>
                <br>
                <br>Team
                <br>1 Design director
                <br>2 Interaction designers
                <br>2 Product designers<br>
              </div>
            </v-col>
            <v-col  cols="12" md="6">
              <div>
                <p style="font-family:Suisse !important;color: #333 ;font-size: 16px;line-height: 1.6em;font-weight:400">
                  Avianca is the flagship of a group of eight Latin American airlines, whose operations are combined to function as one airline using a codesharing system. Avianca is the largest airline in Colombia and second largest in Latin America, after LATAM of Brazil-Chile.  
                </p>
                <br>
                <p style="font-family:Suisse !important;color: #333 ;font-size: 16px;line-height: 1.6em;">
                  We built this system on the shoulders of others. There are many principles of aesthetics, design, communication and psychology that our system uses inherently as a matter of what we know is good design.
                </p>
              </div>
            </v-col>
          </v-row>
        </div>
      </section >


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
     title: 'About Google',
     meta: [{ name: 'description', content: 'Google' },
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

.slide-fade-enter-active, .slide-fade-leave-active {
transition: all 0.6s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
opacity: 0;
transform: translateY(-100%);
}

.mobile-menu {
  padding-top: 15% !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 35%; /* or 100vh for full screen */
  background: white;
  z-index: 1999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-content {
display: flex;
flex-direction: column; /* stack buttons vertically */
align-items: flex-end;  /* align buttons to the right */
gap: 10px;              /* optional spacing between buttons */
width: 100%;            /* take full width of mobile-menu */
padding-right: 10px;    /* optional right padding */
}
.menu-content v-btn {
width: auto; /* or set a fixed width if preferred */
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
/* SECOND SECTION */
.heading {
    font-family: Suisseintl, sans-serif;
    color: #333;
    line-height: 1em;
    font-weight: 400;
    letter-spacing: -.06em;
    margin-bottom: 5% !important;
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
