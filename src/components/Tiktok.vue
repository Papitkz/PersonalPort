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
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToHome()">Work</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToAbout()">About</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToBlog()">Blog</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" @click="navigateTo('contact')">Contact</v-btn>
            </div>
          </div>
        </transition>
      </div>
  
        <!-- Project Image Section -->
        <section :style="{ marginTop: isMobile ? '5vh' : '15vh' }">
          <div class="project-image">
            <img @click="goToTiktok" src="/Tiktok.png" alt="Tiktok Travel Agent Website" />
          </div>
        </section>
  
        <!-- Project Info Section -->
        <section
          class="section first-section parallax-section fade-in-section"
          :style="{
            paddingLeft: isMobile ? '0' : '10%',
            paddingRight: isMobile ? '0' : '10%',
            
          }"
        >
          <v-parallax
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            color="#f8f7f5"
          >
            <v-container fluid class="avianca-container">
              <!-- Title -->
              <h1 class="avianca-title" style="font-family:Suisse !important;font-weight:400;" :style="{fontSize : isMobile ? '42px' : 'font-size: 6em;'}">
                Tiktok
              </h1>
  
              <!-- Tabs -->
              <div class="avianca-tabs-row" v-if="!isMobile">
                <v-row>
                    <v-col :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;"    cols="12" md="6">Project</v-col>
                    <v-col :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;padding-left:0"    cols="12" md="6">About</v-col>
                </v-row>
                <!-- <div class="avianca-tab avianca-tab--active">Project</div>
                <div class="avianca-tab">About</div> -->
              </div>
              <div class="avianca-divider"  v-if="!isMobile"></div>
  
              <!-- Grid Layout -->
              <v-row class="avianca-grid" align="start" no-gutters>
                <!-- Left Column: Role & Team -->
                <v-col cols="12" md="6" class="avianca-info" v-if="!isMobile">
                  <div class="avianca-info-block">
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-title">Role</div>
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-item">Product design</div>
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-item">Interaction design</div>
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-item">Prototyping</div>
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-item">Design system</div>
                  </div>
                  <div class="avianca-info-block" style="margin-top: 32px;" v-if="!isMobile">
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-title">Team</div>
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-item">1 Design director</div>
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-item">2 Interaction designers</div>
                    <div :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }" style="font-family:Suisse !important;font-weight:400" class="avianca-info-item">2 Product designers</div>
                  </div>
                </v-col>
                <!-- Right Column: About text -->
                <v-col cols="12" md="6" class="avianca-about">
                  <div class="about-text-wrapper " style="font-family:Suisse !important;text-align:start">
                    <p :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }">
                        Tiktok does everything for a good trip. That is why it works to make this experience the best achievement of its life, through new trends and a wide network of tourism products and services. It is this way of thinking that establishes Tiktok as the largest tour operator in Latin America.
                    </p>
                    <br>
                    <p :style="{ 'font-size': isMobile ? 'clamp(18px, 18px, 18px)' : 'clamp(18px, 18px, 18px)' }">
                        Every week was a cycle: explore, design the flow, refine and check-in with the client. The agile approach applied to design, allowing tech and business work together to deliver feasible solutions. Together we define how the experience should behave and the main roads of the product.
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </section>
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
        this.isMobile = window.innerWidth <= 900
      },
      toggleMenu() {
        this.showMenu = !this.showMenu
      },
      goToHome() {
        this.$router.push('/')
      },
      goToAbout() {
        this.$router.push('/about')
      },
      goToTiktok() {
        window.open('https://www.tiktok.com/', '_blank')
      },
    },
    setup() {
      useHead({
        title: 'Nick Yebra | Tiktok',
        meta: [
          { name: 'description', content: 'Tiktok' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
        ]
      })
    }
  }
  </script>
  
  <style>
  /* Hamburger menu icon */
  /* Hide the default checkbox */
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
  
  /* Mobile menu overlay */
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(.25,.8,.25,1);
  }
  .slide-fade-enter-from, .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
 
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%; /* or 100vh for full screen */
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
  
  /* Fade-in animation */
  .fade-in-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s, transform 1s;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Project image */
  .project-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
  }
  .project-image img {
    max-width: 90vw;
    max-height: 60vh;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    border-radius: 16px;
    background: #eaeaea;
    transition: transform 0.3s;
  }
  .project-image img:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  
  /* Avianca section */
  .avianca-container {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 48px;
    color: #222;
  }
  .avianca-title {
    font-weight: 700;
    font-size: 6.5rem;
    line-height: 1.05;
    margin-bottom: 64px;
    letter-spacing: -0.03em;
  }
  .avianca-tabs-row {
    display: flex;
    gap: 2.5rem;
    font-size: 1rem;
    margin-bottom: 8px;
  }
  .avianca-tab {
    color: #888;
    cursor: pointer;
    font-weight: 400;
    padding-bottom: 8px;
    transition: color 0.2s;
  }
  .avianca-tab--active {
    color: #3d3d3d;
    border-bottom: 2px solid #3d3d3d;
    font-weight: 500;
  }
  .avianca-divider {
    border-bottom: 1px solid #e0dfdc;
    margin-bottom: 48px;
  }
 
  .avianca-info {
    font-size: 1rem;
    color: #666;
    display: flex;
    flex-direction: column;
  }
  .avianca-info-block {
    margin-bottom: 16px;
  }
  .avianca-info-title {
    font-weight: 500;
    color: #444;
    margin-bottom: 4px;
  }
  .avianca-info-item {
    margin-bottom: 2px;
  }
  .avianca-about {
    font-size: 1.09rem;
    color: #333;
    line-height: 1.6;
    max-width: 600px;
  }
  .about-text-wrapper {
    width: 100%;
    max-width: 650px;
    margin-left: auto;
    text-align: justify;
  }
  
  /* Responsive Styles */
  @media (max-width: 900px) {
    .avianca-title {
      font-size: 2.6rem;
    }
    .avianca-tabs-row {
      gap: 1.5rem;
    }
    .avianca-grid {
      display: block;
      gap: 0;
    }
    .avianca-info,
    .avianca-about,
    .about-text-wrapper {
      max-width: 100%;
      margin-left: 0;
      text-align: left;
      margin-bottom: 32px;
    }
    .project-image img {
      max-width: 98vw;
      max-height: 40vh;
    }
  }
  @media (max-width: 600px) {
    .avianca-title {
      font-size: 1.6rem;
      margin-bottom: 32px;
    }
    .avianca-container {
      padding-top: 24px;
    }
    .project-image {
      margin-bottom: 1.2rem;
    }
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
  