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
          <v-btn :ripple="false" type="text" width="100">Blog</v-btn>
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

    <section class="blog-hero fade-in-section" :style="{marginTop: isMobile ? '10vh' : '12vh',}">
      <div class="blog-hero-left">
        <div class="blog-title">Blog</div>
        <div class="blog-drafts">
          <div class="drafts-label">IN MY DRAFTS</div>
          <hr class="drafts-divider" />
          <ul class="drafts-list">
            <li v-for="draft in drafts" :key="draft" class="draft-item">
              <span class="draft-icon">•</span>
              <span :style="{fontSize : isMobile ? '15px' : '19px'}" class="draft-title">{{ draft }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="blog-hero-right">
        <div class="latest-label">LATEST ARTICLE</div>
        <div :style="{fontSize : isMobile ? '19px' : '22.5px',paddingRight :isMobile ? '25%' : ''}" class="latest-title">My approach to creative direction for the web</div>
        <div class="latest-date">SEP 16, 2024</div>
        <div class="latest-summary">
          <br v-if="!isMobile">
          <p :style="{fontSize : isMobile ? '15px' : '19px',paddingRight :isMobile ? '2%' : ''}">
            One of the hardest moments in web design is at the beginning, when you're front-loaded with making all the design decisions that make up a site's visual language.
          </p>
          <p :style="{fontSize : isMobile ? '15px' : '19px',paddingRight :isMobile ? '2%' : ''}" class="mt-2">
            You can make designing a website much easier if you prepare ahead of time. Start making design decisions well before you put pixels to paper.
          </p>
        </div>
        <button class="latest-btn">
          KEEP READING
          <span class="arrow">→</span>
        </button>
      </div>
    </section>

    <!-- Browse all articles Section -->
    <section class="browse-section fade-in-section">
      <div class="browse-title">Browse all articles</div>
      <hr class="browse-divider" />
      <div class="browse-grid">
        <div class="browse-article" v-for="article in articles" :key="article.title">
          <div class="browse-date">{{ article.date }}</div>
          <div :style="{fontSize : isMobile ? '19px' : '22.5px',paddingRight :isMobile ? '25%' : ''}" class="browse-headline">{{ article.title }}</div>
          <div :style="{fontSize : isMobile ? '15px' : '19px',paddingRight :isMobile ? '2%' : ''}" class="browse-summary">{{ article.summary }}</div>
          <a class="browse-read" :href="article.link">READ</a>
        </div>
      </div>
    </section>

    <!-- About Jose Section -->
    <section class="about-section fade-in-section">
      <div class="about-img-wrap">
        <img
          class="about-img"
          :src="about.image"
          alt="Jose Ocando"
        />
      </div>
      <div class="about-content">
        <div class="about-title">About Nicholas</div>
        <div class="about-text">
          <p :style="{fontSize : isMobile ? '15px' : '19px',paddingRight :isMobile ? '2%' : ''}">
            I'm a self-taught designer. Around 2013 I started learning design by watching tutorials on YouTube, lynda.com, and later on Skillshare.
          </p>
          <br>
          <p :style="{fontSize : isMobile ? '15px' : '19px',paddingRight :isMobile ? '2%' : ''}">
            Having been educated online, I enjoy giving back by sharing thoughts about the principles I've learned and the systems I've developed.
          </p>
          <p :style="{fontSize : isMobile ? '15px' : '19px',paddingRight :isMobile ? '2%' : ''}">
            Thank you for reading.
          </p>
        </div>
        <div class="about-contact">
          <div class="contact-label">CONTACT ME</div>
          <a :style="{fontSize : isMobile ? '12px' : '19px'}" class="contact-email" href="mailto:nickyebra@gmail.com">nickyebra@gmail.com</a>
        </div>
      </div>
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
            drafts: [
        "How to present website designs",
        "My favorite type foundries",
        "The “Twice Baked Potato” theory"
      ],
      articles: [
        {
          date: 'SEP 16, 2024',
          title: 'My approach to creative direction for the web',
          summary: 'Good creative direction helps you to (1) align with the client and (2) make it easier to make design decisions.',
          link: '#'
        },
        {
          date: 'JUN 25, 2024',
          title: '24 things that make a great marketing website',
          summary: 'I started making websites in 2013. With each project I made mistakes and tried to learn from them. Let me share some of those learnings with you.',
          link: '#'
        }
      ],
      about: {
        image: 'https://media.licdn.com/dms/image/v2/D4E03AQEFn0XHaQVbpQ/profile-displayphoto-shrink_200_200/B4EZbO0HWpHkAk-/0/1747226492366?e=1752710400&v=beta&t=aGj0_DOONrtJcGkCZSCoFa9WlqfYBTw11K27hhGODVQ'
      }
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
    goToBlog(){
      this.$router.push('/blog')
    },

    },
    setup() {
    useHead({
      title: 'Nick Yebra | Blog',
      meta: [
        { name: 'description', content: 'Blog' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } 
      ]
    })
  }
    

}
</script>


<style scoped>
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
  height: 37%;
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



.blog-section{
  color: #333;
  justify-content: center;
  text-align: start;
}

.blog-root {
  background: #f5f6f1;
  min-height: 100vh;
  font-family: 'Suisse' !important ;
  color: #23231e;
}

/* --- Blog Hero --- */
.blog-hero {
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 8vh 4vw 7vh 4vw; */
  display: grid;
  grid-template-columns: 1.1fr 1.4fr;
  gap: 7vw;
  align-items: start;
}
.blog-hero-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.blog-title {
  font-size: clamp(49px, 10vw, 120px);
  font-weight: 400;
  margin-bottom: 3.5rem;
  font-family: 'Suisse' !important ;
  letter-spacing: -2px;
}
.blog-drafts {
  margin-bottom: 2.5rem;
}
.drafts-label {
  letter-spacing: 1.5px;
  color: #888;
  font-family: 'Suisse' !important ;
  font-size: 13px;
  margin-bottom: 0.5rem;
}
.drafts-divider {
  border: none;
  border-top: 1px solid #d6d6ce;
  margin-bottom: 1.5rem;
}
.drafts-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.draft-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.1rem;
}
.draft-icon {
  font-size: 20px;
  margin-right: 1rem;
  font-family: serif;
}
.draft-title {
  font-family: 'Suisse';
  color: #2d2d2d;
}

/* --- Latest Article --- */
.blog-hero-right {
  display: flex;
  flex-direction: column;
}
.latest-label {
  font-family: 'Suisse' !important ;
  font-size: 13px;
  color: #888;
  background: #f3f3ef;
  border-radius: 8px;
  padding: 2px 12px;
  letter-spacing: 1.5px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  width: fit-content;
  margin-bottom: 1.2rem;
}
.latest-title {
  font-family: 'Suisse' !important ;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #23231e;
}
.latest-date {
  font-family: 'Suisse' !important ;
  font-size: 14px;
  color: #888;
  margin-bottom: 1.5rem;
}
.latest-summary {
  font-family: 'Suisse' !important ;
  font-size: 1.18rem;
  color: #23231e;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}
.latest-btn {
  width: 250px;
  font-family: 'Suisse' !important ;
  font-size: 1rem;
  padding: 0.8em 2.2em 0.8em 1.6em;
  border-radius: 2em;
  border: none;
  background: #f7f7f2;
  color: #23231e;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  cursor: pointer;
  transition: background 0.2s;
  display: inline-flex;
  align-items: center;
}
.latest-btn:hover {
  background: #ecece6;
}
.arrow {
  margin-left: 1em;
  font-size: 1.1em;
}

/* --- Browse all articles --- */
.browse-section {
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 7vh 4vw 6vh 4vw; */
}
.browse-title {
  font-size: clamp(38px, 7vw, 70px);
  font-weight: 400;
  margin-bottom: 2.5rem;
  letter-spacing: -1px;
  font-family: 'Suisse' !important ;
}
.browse-divider {
  border: none;
  border-top: 1px solid #d6d6ce;
  margin-bottom: 3rem;
}
.browse-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4vw;
}
.browse-article {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
}
.browse-date {
  color: #444;
  font-size: 15px;
  letter-spacing: 2px;
  font-family: 'Suisse' !important ;
  margin-bottom: 1.2rem;
}
.browse-headline {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1.1rem;
  color: #23231e;
  font-family: 'Suisse' !important ;
}
.browse-summary {
  font-size: 1.13rem;
  color: #444;
  margin-bottom: 2.1rem;
  line-height: 1.6;
  font-family: 'Suisse' !important ;
}
.browse-read {
  font-size: 14px;
  color: #23231e;
  text-decoration: none;
  font-family: 'Suisse' !important ;
  border-bottom: 1px solid #bbb;
  letter-spacing: 1.5px;
  width: fit-content;
  transition: border-color 0.2s;
}
.browse-read:hover {
  border-color: #23231e;
}

/* --- About Section --- */
.about-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7vh 4vw 10vh 4vw;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 6vw;
  align-items: center;
}
.about-img-wrap {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
}
.about-img {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 6px 34px 0 rgba(0,0,0,0.10);
  display: block;
}
.about-content {
  display: flex;
  flex-direction: column;
}
.about-title {
  font-size: clamp(34px, 5vw, 54px);
  font-weight: 400;
  margin-bottom: 2.2rem;
  letter-spacing: -1px;
  font-family: 'Suisse' !important ;
}
.about-text {
  font-size: 1.25rem;
  color: #444;
  line-height: 1.7;
  margin-bottom: 2.7rem;
  font-family: 'Suisse' !important ;
}
.about-contact {
  font-size: 14px;
  color: #23231e;
  font-family: 'Suisse' !important ;
  letter-spacing: 2px;
}
.contact-label {
  margin-bottom: 0.3rem;
  font-weight: 600;
}
.contact-email {
  color: #23231e;
  text-decoration: none;
  font-size: 1.08em;
  font-family: 'Suisse' !important ;
}

/* --- Responsive --- */
@media (max-width: 900px) {
  .blog-hero {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 6vh 2vw 5vh 2vw;
  }
  .browse-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .about-section {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }
  .about-img-wrap {
    margin-bottom: 2rem;
  }
}
 /* --- Responsive --- */
 @media (max-width: 900px) {
    .blog-hero,
    .browse-section,
    .about-section {
      margin: 0 16px;
    }
    .blog-hero {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      padding: 6vh 0 5vh 0;
    }
    .browse-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .about-section {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    /* Left align About content on mobile */
    .about-content {
      text-align: left;
      align-items: flex-start;
    }
    .about-img-wrap {
      margin-bottom: 2rem;
    }
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
