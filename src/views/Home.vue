<template>
  <div>
    <v-container fluid class="pa-0" style="position: relative;">

      <router-view />

      
       <div v-if="!isMobile">
        <v-toolbar style="background-color:transparent;padding-top:20px">
           <v-spacer/><v-spacer/><v-spacer/><v-spacer/> <v-spacer/>
         <v-toolbar-items  style=" font-family: 'Suisse'; color: black !important;">
           <v-btn :ripple="false" type="text" width="100">Work</v-btn>
           <v-btn @click="goToAbout()" :ripple="false" type="text" width="100">About</v-btn>
           <v-btn @click="goToBlog()"  :ripple="false" type="text" width="100">Blog</v-btn>
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
          <transition name="slide-fade">
            <div v-if="showMenu" class="mobile-menu" @click.self="toggleMenu">
              <div class="menu-content">
                <v-btn style="font-family:Suisse !important" variant="text" >Work</v-btn>
                <v-btn style="font-family:Suisse !important" variant="text" @click="goToAbout()">About</v-btn>
                <v-btn style="font-family:Suisse !important" variant="text" @click="goToBlog()">Blog</v-btn>
                <v-btn style="font-family:Suisse !important" variant="text" @click="navigateTo('contact')">Contact</v-btn>
              </div>
            </div>
          </transition>
       </div>


      <!-- Work Section -->
      <section  id="work"  class="section work-section parallax-section fade-in-section" :class="{ visible: visibleSections.work }"
        ref="workSection"  :style="parallaxStyles.work">
        <v-row no-gutters>
          <v-col>
            <div class="d-flex justify-center work-heading-wrapper" :style="{ marginTop: isMobile ? '5vh' : '15vh' }">
              <div class="wrap-top-home" :style="{display : isMobile ? '' : 'flex'}">
                <div class="work-heading">
                  <h1 :style="{fontSize : isMobile ? '42px': '', paddingLeft: isMobile ? '12px': ''}" style="font-family:Suisse !important" class="line">I'm a product</h1>
                  <h1 :style="{fontSize : isMobile ? '42px': '', paddingLeft: isMobile ? '12px': ''}" style="font-family:Suisse !important" class="line">designer</h1>
                  <h1 :style="{fontSize : isMobile ? '42px': '', paddingLeft: isMobile ? '12px': ''}" style="font-family:Suisse !important" class="line">based in brazil</h1>
                </div>
              </div>
            </div>
            <div  class="work-image-container d-flex justify-center" :class="{ 'mobile-full': isMobile }" :style="{ marginTop: isMobile ? '3vh' : '15vh', marginBottom: isMobile ? '3vh' : '10vh' }">
              <img  src="https://wallpapers.com/images/hd/office-background-radf1ashpkt1ri23.jpg"   alt="Static description"
                class="work-image" :class="{ 'work-image-mobile': isMobile }" />
            </div>
          </v-col>
        </v-row>
      </section>

      <!-- About Section -->
      <section  id="about"  class="section about-section parallax-section fade-in-section"   :class="{ visible: visibleSections.about }"
        ref="aboutSection"   :style="[ { 'padding-left': isMobile ? 0 : '10%', 'padding-right': isMobile ? 0 : '10%' }, parallaxStyles.about ]">
        <v-parallax src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" height="100vh" class="gradient-parallax">
          <v-container style="height: 100%;">
            <v-row align="start" style="height: calc(100% - 120px);">
              <v-col cols="12" md="4">
                <p class="color-ivory"  style=" font-family: 'Suisse'; color: black !important;font-size: clamp(21px, 2vw, 22px)"
                  :style="{ letterSpacing: '0.12px', textAlign: 'left',  transition: 'font-size 0.5s ease-out', transition: 'opacity 1s ease'}">
                  About
                </p>
              </v-col>
              <v-col cols="12" md="4" :class="!isMobile ? 'mt-n5' : ''">
                <p class="color-ivory"   style="  font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)"
                  :style="{ letterSpacing: '0.12px',  textAlign: 'left',  transition: 'font-size 0.5s ease-out',  transition: 'opacity 1s ease'  }">
                  <v-row>
                    <v-col>
                      <h1 :style="{ 'font-size': isMobile ? 'clamp(21px, 42px, 42px)' : 'clamp(21px, 85px, 100px)' }">
                        12+</h1>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col :style="{ 'font-size': isMobile ? 'clamp(16px, 16px, 16px)' : 'clamp(16px, 16px, 16px)' }">
                      Years of experience
                      <hr :class="isMobile ? 'mt-5' : 'mt-12'" />
                    </v-col>
                  </v-row>
                  <v-row style :style="{ marginTop: isMobile ? '6%' : '15%' }">
                    <v-col :style="{ 'font-size': isMobile ? 'clamp(16px, 16px, 16px)' : 'clamp(16px, 16px, 16px)' }">
                        I'm constantly searching for innovative ideas in order to deliver what is the best in terms of
                        interaction and user experience. Also I relish the opportunity to be involved in projects at the
                        concept stage where I can introduce my ideas and help to shape the course of projects from start to
                        end.
                      </v-col>
                    </v-row>
                  </p>
                </v-col>
                <v-col cols="12" md="4" :class="!isMobile ? 'mt-n5' : ''" >
                  <p class="color-ivory"  style=" font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)"
                    :style="{ letterSpacing: '0.12px',   textAlign: 'left',  transition: 'font-size 0.5s ease-out', transition: 'opacity 1s ease'  }">
                    <v-row>
                      <v-col :style="{ 'font-size': isMobile ? 'clamp(21px, 42px, 42px)' : 'clamp(21px, 85px, 100px)' }">
                        08
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col :style="{ 'font-size': isMobile ? 'clamp(16px, 16px, 16px)' : 'clamp(16px, 16px, 16px)' }">
                        Cities I've lived
                        <hr :class="isMobile ? 'mt-5' : 'mt-12'" />
                      </v-col>
                    </v-row>
                    <v-row :style="{ marginTop: isMobile ? '6%' : '15%' }">
                      <v-col :style="{ 'font-size': isMobile ? 'clamp(16px, 16px, 16px)' : 'clamp(16px, 16px, 16px)' }">
                        I'm capable of presenting and discussing my ideas and designs with clients and I have the great
                          ability of communicate with my team and colleagues . I'm dedicated and hardworking designer and
                          always try to improve my techniques and continue to learn new skills.
                        </v-col>
                    </v-row>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
      </section>

      <!-- selected Section-->
      <section  id="selectedworks"   class="selectedworks-section parallax-section fade-in-section"   :class="{ visible: visibleSections.selectedworks }"
          ref="selectedSection" :style="[  { paddingBottom : isMobile ? '0' : '10vh' , 'padding-left': isMobile ? '0' : '10%', 'padding-right': isMobile ? '0' : '10%' },  parallaxStyles.selectedworks  ]">
          <div class="selectedworks-header" :style="{ marginTop: isMobile ? '10vh' : '5vh', paddingTop: isMobile ? '3vh' : '5vh'  }" >
            <h1 style="font-family:Suisse !important" :style="{fontSize : isMobile ? '42px' : '9em'}">Selected works<br />2016–2025</h1>
            <div v-if="!isMobile" class="down-arrow">
  
                <v-card style="border-radius: 50%;" color="#eee">
                  <v-card-text>
                    <v-img style="padding:4px" width="2120" src="https://d33wubrfki0l68.cloudfront.net/74eecb8f4da0c6848b3c3386ae6f11e2dd49a7f0/617b5/images/group-115.svg"></v-img>
                  </v-card-text>
                </v-card>
            </div>
          </div>

            <div class="selectedworks-content" :style="{ marginTop: isMobile ? '5vh' : '10vh' }">
              <div class="project-info" style="display: grid; grid-template-rows: auto auto 1fr;"
              :style="isMobile ? { order: 1, marginTop: '1rem' ,minWidth: isMobile ? '100%' : ''} : { display: 'grid', gridTemplateRows: 'auto auto 1fr', }">
                <span class="project-number" v-if="!isMobile">01</span>
                <h2 @click="goToTiktok()"   style="font-family:Suisse !important; color:#333; font-weight:400" :style="{ fontSize: isMobile ? '42px' : '4em',marginTop: isMobile ? '' : '15vh' }">
                  Tiktok
                </h2>
                <span   v-if="!isMobile" style="border-bottom:1px solid grey;align-self: end;font-family:Suisse !important; color:#333;">WEBSITE  <div style="float:right" class="wrap-arrow mb-4"><img  @click="goToTiktok()"   src="https://d33wubrfki0l68.cloudfront.net/a3ad9e89e316f78243933090ff265a5f550ac6cc/51f88/images/vector-1.svg" loading="lazy" alt=""></div></span>
              <hr v-if="isMobile"/>
              </div>
              <div  class="project-image">
                <img  @click="goToTiktok()"    src="../../public/Tiktok.png" alt="Cvc Travel Agent Website" />
              </div>
            </div>

            <div class="selectedworks-content">
              <div class="project-info" style="display: grid; grid-template-rows: auto auto 1fr;"
              :style="isMobile ? { order: 1, marginTop: '1rem' , minWidth: isMobile ? '100%' : '' } : { display: 'grid', gridTemplateRows: 'auto auto 1fr' }">
                <span class="project-number" v-if="!isMobile">02</span>
                <h2 @click="goToGoogle()" style="font-family:Suisse !important; color:#333; font-weight:400" :style="{ fontSize: isMobile ? '42px' : '4em',marginTop: isMobile ? '' : '15vh' }">
                  Google 
                </h2>
                
                <span  v-if="!isMobile" style="border-bottom:1px solid grey; align-self: end;font-family:Suisse !important; color:#333;">WEBSITE <div style="float:right" class="wrap-arrow mb-4"><img @click="goToGoogle()" src="https://d33wubrfki0l68.cloudfront.net/a3ad9e89e316f78243933090ff265a5f550ac6cc/51f88/images/vector-1.svg" loading="lazy" alt=""></div></span>
                <hr v-if="isMobile"/>
              </div>
              <div class="project-image">
                <img @click="goToGoogle()" src="../../public/Google.png" alt="Cvc Travel Agent Website" />
              </div>
            </div>
        </section>

      <!-- Capabilties Section-->
        <section  id="capabilities" ref="capabilitiesSection" class="section Capabilities-section parallax-section fade-in-section"
        :class="{ visible: visibleSections.capabilities }"
        :style="[  { 'padding-left': isMobile ? '0' : '10%', 'padding-right': isMobile ? '0' : '10%' },  parallaxStyles.capabilities  ]" >
        <v-parallax  style="background-color: #232326 !important;"  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  height="auto"  class="gradient-parallax"
          color="#111" >
          <v-container fluid>
            <v-row >
              <v-col>
                <h3 class="section-title">Capabilities & Process</h3>
              </v-col>
            </v-row>
            <hr class="mt-4"/>

            <v-row class="keyword-row">
              <v-col cols="12">
                <h2 style="line-height: 0.8em;" :style="{textAlign : 'start', fontSize: !isMobile ? '9em' : '3em' }" class="keyword">User experience</h2>
                <h2 style="line-height: 0.8em;" :style="{textAlign : 'start', fontSize: !isMobile ? '9em' : '3em' }" class="keyword">Strategy</h2>
                <h2 style="line-height: 0.8em;" :style="{textAlign : 'start', fontSize: !isMobile ? '9em' : '3em' }" class="keyword">User interface</h2>
                <h2 style="line-height: 0.8em;" :style="{textAlign : 'start', fontSize: !isMobile ? '9em' : '3em' }" class="keyword">Leadership</h2>
              </v-col>
            </v-row>
            <br v-if="isMobile"/>
            <br v-if="isMobile"/>
            <br v-if="isMobile"/>
            <br v-if="isMobile"/>
             <v-row  :class="!isMobile ? 'mt-desktop' : ''">
              <v-col cols="12" md="4" lg="4"></v-col>
              <v-col cols="12" md="4" lg="4" class="concept-block" :style="{marginTop : isMobile ? '5vh': ''}">
                <h3 class="concept-title" :style="{ 'font-size': isMobile ? 'clamp(28px, 28px, 28px)' : 'clamp(28px, 28px, 28px)' }">Human-centric</h3>
                <p style="font-family:Suisse !important;font-weight:400;letter-spacing: 0.8px;"  :style="{marginTop : isMobile ? '5vh': '',paddingRight : !isMobile ? '78px' : '',  'font-size': isMobile ? 'clamp(16px, 16px, 16px)' : 'clamp(16px, 16px, 16px)'}" class="concept-desc">
                  No matter what the context, all design activity is social in nature, and any social innovation will bring us back to the human-centric point of view.
                </p>
              </v-col>
              <v-col cols="12" md="4" lg="4" class="concept-block" :style="{marginTop : isMobile ? '5vh': ''}">
                <h3 class="concept-title" :style="{ 'font-size': isMobile ? 'clamp(28px, 28px, 28px)' : 'clamp(28px, 28px, 28px)' }">The tangibility rule</h3>
                <p style="font-family:Suisse !important;font-weight:400;letter-spacing: 0.8px;"  :style="{marginTop : isMobile ? '5vh': '',paddingRight : !isMobile ? '78px' : '',  'font-size': isMobile ? 'clamp(16px, 16px, 16px)' : 'clamp(16px, 16px, 16px)'}" class="concept-desc">
                  Making ideas tangible in the form of prototypes enables people to communicate more effectively throughout the design process.
                </p>
              </v-col>
            </v-row>
            <br/>
            <v-row  :class="!isMobile ? 'mt-desktop' : ''">
                <v-col cols="12" md="6" lg="4" class="concept-block" :style="{marginTop : isMobile ? '5vh': ''}">
                <h3 class="concept-title" :style="{ 'font-size': isMobile ? 'clamp(28px, 28px, 28px)' : 'clamp(28px, 28px, 28px)' }">All design is a redesign</h3>
                <p style="font-family:Suisse !important;font-weight:400;letter-spacing: 0.8px;"  :style="{marginTop : isMobile ? '5vh': '',paddingRight : !isMobile ? '78px' : '',  'font-size': isMobile ? 'clamp(16px, 16px, 16px)' : 'clamp(16px, 16px, 16px)'}" class="concept-desc">
                  While technology and social circumstances may change and evolve, basic human needs remain unchanged. Essentially only redesign the means of fulfilling these needs or reaching desired outcomes
                </p>
              </v-col>
              <v-col cols="12" md="6" lg="4" class="concept-block" :style="{marginTop : isMobile ? '5vh': ''}">
                <h3 class="concept-title" :style="{ 'font-size': isMobile ? 'clamp(28px, 28px, 28px)' : 'clamp(28px, 28px, 28px)' }">Business driven</h3>
                <p style="font-family:Suisse !important;font-weight:400;letter-spacing: 0.8px;"  :style="{marginTop : isMobile ? '5vh': '',paddingRight : !isMobile ? '78px' : '',  'font-size': isMobile ? 'clamp(16px, 16px, 16px)' : 'clamp(16px, 16px, 16px)'}" class="concept-desc">
                  Measure business success and transform customer experience  in fact is a matter to be able to connect and communicate with stakeholders in order to understand the most important business needs
                </p>
              </v-col>
              <v-col cols="12" md="4" lg="4"></v-col>
            </v-row>
             <v-row  :class="!isMobile ? 'mt-desktop1' : ''">
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <!-- Contact Section -->
  
      <section   id="contact"  class="section contact-section parallax-section fade-in-section" :class="{ visible: visibleSections.contact }"
        ref="contactSection" 
        :style="[  { 'padding-left': isMobile ? '0' : '10%', 'padding-right': isMobile ? '0' : '10%' },  parallaxStyles.contact  ]" >
        <v-parallax style="background-color: #fff !important;"   src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  height="100vh"
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
                          <v-icon @click="goToInstagram()" >mdi-instagram</v-icon> Instagram
                        </v-col>
                      </v-row>
                      <v-row class="contact-social-link" style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,">
                        <v-col>
                          <v-icon @click="goToLinkedin()">mdi-linkedin</v-icon>LinkedIn
                        </v-col>
                      </v-row>
                      <v-row class="contact-social-link" style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,">
                        <v-col>
                          <v-icon @click="gotoFacebook()">mdi-facebook</v-icon>Facebook
                        </v-col>
                      </v-row>
                      <v-row class="contact-social-link" style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,">
                        <v-col>
                          <v-icon >mdi-twitter</v-icon>Twitter
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

export default {
  data() {
    return {
      showMenu: false,
      isMobile: false,
      parallaxStyles: {
        work: {},
        about: {},
        blog: {},
        contact: {},
        capabilities:{},
        selectedworks:{}
      },
      visibleSections: {
        work: false,
        about: false,
        blog: false,
        contact: false,
        capabilities:false,
        selectedworks:false
      },
      ticking: false,
      observer: null,
      socialLinks: [
        { name: "Instagram", icon: "mdi-instagram", url: "https://instagram.com/yourprofile" },
        { name: "LinkedIn", icon: "mdi-linkedin", url: "https://linkedin.com/in/yourprofile" },
        { name: "Facebook", icon: "mdi-facebook", url: "https://facebook.com/yourprofile" },
        { name: "Twitter", icon: "mdi-twitter", url: "https://twitter.com/yourprofile" },
      ],
    };
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener("resize", this.checkIsMobile);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll(); // initialize parallax positions on load
    this.initIntersectionObserver();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkIsMobile);
    window.removeEventListener("scroll", this.handleScroll);
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    gotoGithub(){
    window.open('https://github.com/nyebra19', '_blank');
    },
    gotoFacebook(){
    window.open('https://web.facebook.com/nick.yebra', '_blank');
    },
    goToInstagram() {
    window.open('https://www.instagram.com/nyebra/?hl=en', '_blank');
    },
    goToLinkedin() {
      window.open('https://www.linkedin.com/in/nicholas-yebra', '_blank');
    },
    goToGoogle(){
      this.$router.push('/Google')
    },
    goToTiktok(){
      this.$router.push('/Tiktok')
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    goToAbout() {
      this.$router.push('/about');
    },
    goToBlog(){
      this.$router.push('/blog')
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    handleScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateParallax();
          this.ticking = false;
        });
        this.ticking = true;
      }
    },
    updateParallax() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      

      // Calculate parallax offset for a section's background color gradient
      const calcColorOffset = (el, speed = 0.3) => {
        if (!el) return '0%';
        const rect = el.getBoundingClientRect();
        const percent = Math.min(Math.max(rect.top / windowHeight, -1), 1);
        return `${50 + percent * speed * 50}%`;
      };

      this.parallaxStyles.work = {
        background: `#fff`,
      };
      this.parallaxStyles.about = {
        background: `#fff`,
      };
      this.parallaxStyles.selectedworks = {
        background: `#fff`,
      };
      this.parallaxStyles.capabilities = {
        background: `#232326`,
      };
      this.parallaxStyles.contact = {
        background: `#fff`,
      };
    },
    initIntersectionObserver() {
      this.observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              if (id && id in this.visibleSections) {
                this.visibleSections[id] = true;
                
              }
            }
          });
        },
        {
          threshold: 0.1,
        }
      );
      ['workSection', 'aboutSection', 'blogSection', 'contactSection' , 'capabilitiesSection', 'selectedSection'].forEach(refName => {
        if (this.$refs[refName]) {
          this.observer.observe(this.$refs[refName]);
        }
      });
    },
  },
  setup() {
    useHead({
      title: 'Nick Yebra | Portfolio',
      meta: [
        { name: 'description', content: 'About' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } 
      ],
    })
  },
};
</script>

<style scoped>
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

/* WORK section styles */
.work-section {
  color: #111;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 0;
  transform: translateY(-10px);
}

/* Wrap-top-home remains same */
.wrap-top-home {
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.work-heading {
  max-width: 700px;
  text-align: justify;
  position: relative;
  display: block;
}

.work-heading::after {
  content: "";
  display: inline-block;
  width: 100%;
}

.work-heading .line {
  display: block;
  font-weight: bold;
  font-size: 5em;
  line-height: 0.8;
  color: #333;
  margin: 0 0 0.3em 0;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideIn 0.8s forwards;
  letter-spacing: -0.03em;
  text-transform: none;
  word-break: break-word;
}

/* Animate lines with staggered delay */
.work-heading .line:nth-child(1) { animation-delay: 0.2s; }
.work-heading .line:nth-child(2) { animation-delay: 0.5s; }
.work-heading .line:nth-child(3) { animation-delay: 0.8s; }

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Image container */
.work-image-container {
  width: 90%;
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;
}
.work-image {
  max-width: 95%;
  height: 95%;
  border-radius: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: block;
  margin-bottom: 5%;
  object-fit: cover;
}
.work-image-mobile {
  width: 100% !important; /* FIX: was 94vw */
  max-width: 100% !important;
  height: auto !important;
  border-radius: 0;
  margin-left: 0 !important; /* FIX: was negative margin */
  margin-right: 0 !important;
  box-shadow: none;
}
.mobile-full {
  width: 94% !important; /* FIX: was 95vw */
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* ABOUT section */
.about-section {
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 4rem;
  justify-content: center;
  text-align: center;
}

/* Selectedworks */
.selectedworks -section {
  color: white;
  font-size: 4rem;
}

.selectedworks-section {
  background: #fafafa;
  min-height: 200vh;
}

.selectedworks-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}

.selectedworks-header h1 {
  font-family: Suisseintl, sans-serif;
    line-height: 1.1em;
    font-weight: 400;
    letter-spacing: -.06em;
    color: #333;
}

.down-arrow {
  width: 156px;
  height: 156px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.down-arrow::after {
  content: '';
  border-width: 0 3px 3px 0;
  display: inline-block;
}

.selectedworks-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.project-info {
  flex: 1;
  min-width: 300px;
}

.project-number {
  font-size: 1rem;
  color: #888;
  display: block;
}

.project-info h2 {
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0 0 24px 0;
  line-height: 1.1;
}

.project-type {
  font-size: 0.9rem;
  color: #aaa;
  letter-spacing: 2px;
}

.project-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image img {
  max-width: 100%;
  max-height: 60vh;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  border-radius: 16px;
  background: #eaeaea;
}

.project-info {
  height: 60vh; 
}

.project-image img {
  transition: transform 0.3s ease;
  will-change: transform;
}

.project-image img:hover {
  transform: scale(1.05);
}
@media (hover: hover) and (pointer: fine) {
  .project-image img {
    transition: transform 0.3s ease;
  }

  .project-image img:hover {
    transform: scale(1.05);
  }
}


/* CAPABILITIES SECTION */
.Capabilities -section {
  color: white;
  font-size: 4rem;
}
.section-title {
  font-family: 'Suisse', sans-serif;
  color: #fff;
}

/* Fade in */
.fade-in-section {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1), transform 1s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: opacity, transform;
}
.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile indicator */
.mobile-indicator {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 1rem;
  z-index: 1000;
}


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
  color: black !important;
}

.contact-heading {
  font-size: clamp(24px, 2.5vw, 28px);
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: black !important;

}

.contact-email {
  color: black !important;
  text-decoration: underline;
  cursor: pointer;
}

.contact-email:hover {
  color: #00aaff !important;
}

.contact-social-link {
  font-size: clamp(20px, 2vw, 22px);
  color: black !important;
  cursor: pointer;
  transition: color 0.3s ease;
}

.contact-social-link:hover {
  color: #00aaff !important;
}

.contact-footer-text {
  font-weight: 400;
  font-size: clamp(24px, 12vw, 140px);
  color: black !important;
  user-select: none;
  margin-bottom: 0.2em;
  font-family: 'Suisse', sans-serif;
}


.divider {
  margin: 2rem auto;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 50%;
}

.keyword-row {
  margin-top: 2rem;
}

.keyword {
  font-family: 'Suisse', sans-serif;
  font-size: clamp(2.5rem, 6vw, 9rem);
  line-height: 1.1em;
  letter-spacing: -0.05em;
  color: #fff;
  margin: 0.5em 0;
}

.mt-desktop {
  margin-top: 100px;
}
.mt-desktop1 {
  margin-top: 150px;
}

.concept-block {
  padding: 1rem;
  text-align: left;
}

.concept-title {
  font-family: 'Suisse', sans-serif;
  font-size: clamp(1.25rem, 1.5vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.5px;
  color: #fff;
  margin-bottom: 1rem;
}

.concept-desc {
  font-family: 'Suisse', sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  line-height: 1.7em;
  letter-spacing: -0.5px;
  color: rgba(255, 255, 255, 0.85);
}

.wrap-arrow {
    display: flex;
    width: 3em;
    height: 3em;
    padding-top: 10px;
    padding-bottom: 10px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 80px;
    background-color: #333;
}

/* Responsive font size and image */
@media (max-width: 768px) {
  .work-section {
    padding-left: 0;
    padding-right: 0;
  }
  .work-heading-wrapper {
    margin-top: 5vh !important;
  }
  .work-heading {
    max-width: 90vw;
  }
  .work-heading .line {
    font-size: 14vw;
  }
  .about-section,
  .blog-section,
  .contact-section {
    font-size: 2.5rem;
    padding: 0 10px;
  }
}


/* Responsive adjustments */
@media (max-width: 900px) {
  .contact-footer-text {
    font-size: clamp(24px, 10vw, 60px);
    color: black !important;
    position: static !important;
    margin-top: 40px;
    user-select: text;
  }

  .contact-top-row {
    height: auto !important;
  }

  .contact-details {
    margin-top: 2rem;
  }
}
@media (max-width: 900px) {
  .selectedworks-content {
    flex-direction: column;
    gap: 32px;
    padding: 40px 4vw 0 4vw;
  }
  .selectedworks-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 0 4vw;
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
