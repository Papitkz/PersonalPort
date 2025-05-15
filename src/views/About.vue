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
          <v-btn  @click="goToHome()" :ripple="false" type="text" width="100">Work</v-btn>
          <v-btn  :ripple="false" type="text" width="100">About</v-btn>
          <v-btn  @click="goToBlog()" :ripple="false" type="text" width="100">Blog</v-btn>
          <v-btn  @click="goToHome()" :ripple="false" type="text" width="100">Contact</v-btn>
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
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToHome()" >Work</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" >About</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToBlog()" >Blog</v-btn>
              <v-btn style="font-family:Suisse !important" variant="text" @click="goToHome()">Contact</v-btn>
            </div>
          </div>
        </transition>
      </div>
      <!-- About Section -->
      <section id="about" class="about-section parallax-section fade-in-section" ref="aboutSection">
        <v-row no-gutters>
          <v-col>
            <div class="d-flex justify-center work-heading-wrapper" :style="{ marginTop: isMobile ? '18vh' : '11vh' }">
              <div class="div-block-26" :style="{ display: isMobile ? '' : 'flex', paddingLeft: isMobile ? 0 : '5%' }">
                <div class="about-heading" :style="{ paddingLeft: isMobile ? 0 : '5%' }">
                  <div class="heading"
                  style="font-family: 'Suisse' !important;"
                    :style="{
                      fontSize: isMobile ? '42px' : '',
                      paddingLeft: isMobile ? '12px' : '20%',
                      paddingRight: isMobile ? '3%' : '15%',
                      lineHeight: isMobile ? 1.1 : ''
                    }">
                    I'm Nicholas Yebra, a product designer currently working at Google Cloud Studio.<br>&zwj;
                    <br>I've been working with design for more than 12 years and had the pleasure to work on companies like, Fjord, Huge, Xp Inc, Toptal, Creditas, Loft among others.
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </section>

      <!-- Image Section -->
      <section class="nyebra-section fade-in-section" :style="{
          backgroundImage: `url(${Nyebra})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? '50vh' : '200vh',  
          marginTop: isMobile ? '20vh' : '15vh',
          marginBottom: '15vh'
        }">
      </section>

      <!-- Work History Section -->
       
    <section class="education-section fade-in-section" id="education"
    :style="{ marginBottom: '10vh',  paddingLeft: isMobile ? '11.7px' : '57.6px', paddingRight: isMobile ? '11.7px' : '57.6px',
      marginLeft: isMobile ? 0 : '152.5px',  marginRight: isMobile ? '12px' : '152.5px',  display: 'flex',
      flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row'}">
    <!-- First pair -->
    <div style="flex: 0 0 30%; text-align: left;">
      <h2 style="font-family: 'Suisse' !important;margin-bottom:20px">Work History</h2>
    </div>
    <div style="flex: 0 0 70%; text-align: left;">
      <v-img  src="/Tiktok.jpeg" width="50px"></v-img>
      <h4  style="font-family: 'Suisse'; color: black !important; font-size: clamp(21px, 28px, 28px);">
        Tiktok
      </h4>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        March 2023 - March 2025
      </p>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        Lead, Growth Strategy & GTM 
      </p>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        In my role, I drive ecosystem enablement, where I led a team of 3 analysts in deploying data-driven partnership acquisition and go-to-market strategies. This resulted in a remarkable 700% growth in our customer base.
      </p>
      <hr style="margin-top: 20px;" />
    </div>

    <!-- Second pair -->
    <div  :style="{  flex: '0 0 30%', textAlign: 'left',   marginTop: isMobile ? '20px' : '0' }" >
      <h2 style="font-family: 'Suisse' !important;"></h2>
    </div>
    <div :style="{  flex: '0 0 70%',   textAlign: 'left',  marginTop: isMobile ? '20px' : '0' }">
      <v-img  src="/Doordash.jpeg" width="50px"></v-img>
      <h4  style="font-family: 'Suisse'; color: black !important; font-size: clamp(21px, 28px, 28px);">
        DoorDash
      </h4>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        March 2022 - March 2023
      </p>
      <p  style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        Lead, Product & Platform Partnerships 
      </p>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        My tenure as Lead of Product & Platform Partnerships was a period of significant growth and strategic achievements. In this role, I managed a multi-billion-dollar portfolio, where I successfully closed over 15 large-scale global deals through strategic negotiations.
      </p>
      <hr style="margin-top: 20px;" />
    </div>

    <!-- Third pair -->
    <div :style="{  flex: '0 0 30%', textAlign: 'left',  marginTop: isMobile ? '20px' : '0' }">
      <h2 style="font-family: 'Suisse' !important;"></h2>
    </div>
    <div  :style="{  flex: '0 0 70%',  textAlign: 'left',  marginTop: isMobile ? '20px' : '0'}">
      <v-img  src="/Google.jpeg" width="50px"></v-img>
      <h4 style="font-family: 'Suisse'; color: black !important; font-size: clamp(21px, 28px, 28px);">
        Google
      </h4>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        April 2016 - March 2022
      </p>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        Senior Manager, Strategy & Operations, Google Cloud Partnerships 
      </p>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        As the Senior Manager of Google Cloud Marketplace Apps, I played a pivotal role in creating joint product strategies and processes with external partners, crafting systems, tools, and workflows that propelled efficiency, competitiveness, and global market growth.
      </p>
      <hr style="margin-top: 20px;" />
    </div>

    <!-- Fourth pair -->
    <div  :style="{  flex: '0 0 30%',   textAlign: 'left',  marginTop: isMobile ? '20px' : '0'}">
      <h2 style="font-family: 'Suisse' !important;"></h2>
    </div>
    <div  :style="{  flex: '0 0 70%',  textAlign: 'left', marginTop: isMobile ? '20px' : '0'}">
      <v-img  src="/Adhawk.jpeg" width="50px"></v-img>
      <h4 style="font-family: 'Suisse'; color: black !important; font-size: clamp(21px, 28px, 28px);">
        AdHawk Inc
      </h4>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        Septermber 2015 - March 2016
      </p>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        Head of Growth 
      </p>
      <p style="font-family: 'Suisse'; color: black !important; font-size: clamp(14px, 14px, 14px); margin-top:8px;">
        No Details
      </p>
      <hr style="margin-top: 20px" />
    </div>
  </section>


  <section   id="contact"  class="section contact-section parallax-section fade-in-section" 
        ref="contactSection"  style="background:#232326"
        :style="[  { 'padding-left': isMobile ? '0' : '10%', 'padding-right': isMobile ? '0' : '10%' },   ]" >
        <v-parallax  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  height="100vh"
          class="gradient-parallax"  color="#1e1f24">
          <v-container fill-height>
            <v-row align="start"   class="contact-top-row"    style="height: calc(100% - 120px);" >
              <v-col  cols="12" md="8"  class="contact-thanks">
                <p
                  class="color-ivory contact-text"
                  :style="{  letterSpacing: '0.12px',  textAlign: 'left',  transition: 'font-size 0.5s ease-out, opacity 1s ease',}">
                  Thanks for visit.
                </p>
              </v-col>

              <!-- Right column: Contact and Social -->
              <v-col  cols="12"   md="4"  class="contact-details" >
                <div>
                  <h2 class="contact-heading"  style="margin-bottom: 1.5rem;">Contact</h2>
                  <p class="contact-text" style="margin-bottom: 1.5rem;">
                    For work inquiries feel free to get in touch with me<br />
                    <a href="mailto:nickyebra@gmail.com" class="contact-email" >
                      nickyebra@gmail.com
                    </a>
                  </p>
                </div>
                <br/>
                <div>
                  <h2 class="contact-heading">Social</h2>
                  <v-row class="mt-2" style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                      </v-row>
                      <v-row class="contact-social-link" style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                        <v-col>
                          <v-icon >mdi-instagram</v-icon> Instagram
                        </v-col>
                      </v-row>
                      <v-row class="contact-social-link" style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                        <v-col>
                          <v-icon>mdi-linkedin</v-icon>LinkedIn
                        </v-col>
                      </v-row>
                      <v-row class="contact-social-link" style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                        <v-col>
                          <v-icon>mdi-facebook</v-icon>Facebook
                        </v-col>
                      </v-row>
                      <v-row class="contact-social-link" style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                        <v-col>
                          <v-icon>mdi-twitter</v-icon>Twitter
                        </v-col>
                      </v-row>
                </div>
              </v-col>
            </v-row>

            <!-- Footer large text -->
            <v-row  class="contact-footer-row"  align="center" justify="start"  style="position: absolute; bottom: 0; left: 0; right: 0; padding-left: 3%;">
              <v-col cols="12" class="text-left">
                <p class="contact-footer-text">Let's talk</p>
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
import Nyebra from '../../public/nyebra.jpg'


export default {
  name: 'AboutWithEducation',
  data() {
    return {
      isMobile: false,
      showMenu: false,
      Nyebra,
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
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    navigateTo(sectionId) {
      this.showMenu = false
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768
    },
    goToHome() {
      this.$router.push('/')
    },
    goToBlog(){
      this.$router.push('/blog')
    },
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
    }
  },

  setup() {
    useHead({
      title: 'Nick Yebra | About',
      meta: [
        { name: 'description', content: 'About' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } 
      ]
    })
  }
}
</script>

<style scoped>
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

/* Section base styles */
.section {
  width: 100%; /* FIX: was 100vw */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  user-select: none;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  transition: background 0.3s ease;
  will-change: background;
  box-sizing: border-box; /* prevent overflow by padding */
}

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


.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.6s ease;
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
  width: auto; 
}

.heading {
  font-family: 'Suisse', sans-serif;
  color: #333;
  font-size: 84px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.06em;
}

.nyebra-section {
  width: 100%;
}

.about-section {
  color: #333;
  justify-content: center;
  text-align: start;
}

.education-section {
  background-color: #fff;
  color: #111;
  min-height: 60vh;

}

/* Contact Section */

/* CONTACT section */
.contact-section {
  color: black;
  font-size: 4rem;
}

.gradient-parallax {
  color: #fffbe9;
  font-family: 'Suisse', sans-serif;
}

.contact-text {
  font-size: clamp(21px, 2vw, 22px);
  line-height: 1.3;
  color: white !important;

}

.contact-heading {
  font-size: clamp(24px, 2.5vw, 28px);
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white !important;

}

.contact-email {
  color: white !important;

  text-decoration: underline;
  cursor: pointer;
}

.contact-email:hover {
  color: #00aaff !important;
}

.contact-social-link {
  font-size: clamp(20px, 2vw, 22px);
  color: white !important;

  cursor: pointer;
  transition: color 0.3s ease;
}

.contact-social-link:hover {
  color: #00aaff !important;
}

.contact-footer-text {
  font-weight: 400;
  font-size: clamp(24px, 12vw, 140px);
  color: white !important;
  user-select: none;
  margin-bottom: 0.2em;
  font-family: 'Suisse', sans-serif;
}
</style>

<style lang="scss">
@import "../assets/fonts/fonts.css";
@font-face {
  font-family: "Suisse";
  src: url("../assets/font/fonnts.com-Suisse_Intl_Regular.ttf") format("opentype");
  font-style: normal;
}


</style>
