<template>
  <div>
    <v-container fluid class="pa-0" style="position: relative; overflow-x: hidden;">

      <!-- Burger menu button floated right -->
      <label class="bar" for="check">
        <input type="checkbox" id="check" />
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </label>

      <!-- Sections with parallax backgrounds -->
      <section 
        id="work" 
        class="section work-section parallax-section" 
        ref="workSection"
        :style="parallaxStyles.work"
      >
        <v-row>
          <v-col>
            <div 
              class="d-flex justify-center work-heading-wrapper" 
              :style="{ marginTop: isMobile ? '5vh' : '25vh' }"
            >
              <div class="wrap-top-home">
                <div class="work-heading">
                  <h1 style="font-family:Suisse !important" class="line">I'm a product</h1>
                  <h1 style="font-family:Suisse !important" class="line">designer</h1>
                  <h1 style="font-family:Suisse !important" class="line">based in brazil</h1>
                </div>
              </div>
            </div>

            <div class="work-image-container d-flex justify-center" :style="{ marginTop: isMobile ? '3vh' : '10vh' }">
              <img 
                src="https://wallpapers.com/images/hd/office-background-radf1ashpkt1ri23.jpg" 
                alt="Static description" 
                class="work-image"
              />
            </div>
          </v-col>
        </v-row>
      </section>

      <section 
        id="about" 
        class="section about-section parallax-section" 
        ref="aboutSection"
        :style="parallaxStyles.about"
      >
        <h1>ABOUT</h1>
      </section>

      <section 
        id="blog" 
        class="section blog-section parallax-section" 
        ref="blogSection"
        :style="parallaxStyles.blog"
      >
        <h1>BLOG</h1>
      </section>

      <section 
        id="contact" 
        class="section contact-section parallax-section" 
        ref="contactSection"
        :style="parallaxStyles.contact"
      >
        <h1>CONTACT</h1>
      </section>

      <!-- Optional: Show if mobile -->
      <div class="mobile-indicator" v-if="isMobile">
        <p>Mobile device detected</p>
      </div>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      parallaxStyles: {
        work: {},
        about: {},
        blog: {},
        contact: {},
      },
      ticking: false,
    };
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener("resize", this.checkIsMobile);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll(); // initialize parallax positions on load
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkIsMobile);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768; // mobile breakpoint
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

      // Helper to calculate parallax offset for a section
      const calcOffset = (el, speed = 0.5) => {
        if (!el) return 'center';
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate percentage the element is from the viewport top
        const percentFromTop = rect.top / windowHeight;
        // Calculate offset for background position Y
        // The higher speed, the more parallax effect
        const offset = percentFromTop * speed * 100;
        return `center ${50 + offset}%`;
      };

      this.parallaxStyles.work = {
        backgroundPosition: calcOffset(this.$refs.workSection, 0.3),
      };
      this.parallaxStyles.about = {
        backgroundPosition: calcOffset(this.$refs.aboutSection, 0.5),
      };
      this.parallaxStyles.blog = {
        backgroundPosition: calcOffset(this.$refs.blogSection, 0.4),
      };
      this.parallaxStyles.contact = {
        backgroundPosition: calcOffset(this.$refs.contactSection, 0.6),
      };
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');

/* Hide the checkbox input */
input[type="checkbox"] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}

/* Burger menu styles */
.bar {
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 50px;
  height: 40px;
  z-index: 1000;
}

.bar span {
  position: absolute;
  width: 45px;
  height: 7px;
  background: #222422;
  border-radius: 100px;
  display: inline-block;
  transition: 0.3s ease;
  left: 0;
}

.bar span.top {
  top: 0;
}

.bar span.middle {
  top: 17px;
}

.bar span.bottom {
  bottom: 0;
}

input[type="checkbox"]:checked ~ span.top {
  transform: rotate(45deg);
  transform-origin: top left;
  width: 48px;
  left: 5px;
}

input[type="checkbox"]:checked ~ span.bottom {
  transform: rotate(-45deg);
  transform-origin: top left;
  width: 48px;
  bottom: -1px;
  box-shadow: 0 0 10px #495057;
}

input[type="checkbox"]:checked ~ span.middle {
  transform: translateX(-20px);
  opacity: 0;
}

/* Section base styles */
.section {
  width: 100vw; /* Full viewport width */
  min-height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  user-select: none;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-position 0.2s ease-out;
  will-change: background-position;
}

/* Parallax section base */
.parallax-section {
  /* fallback background color */
  background-color: #ccc;
}

/* WORK section styles */
.work-section {
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80');
  color: #111;
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;     /* center vertically */
  padding-left: 20px;  /* horizontal padding */
  padding-right: 20px; /* horizontal padding */
  margin-top: 0;
  transform: translateY(-10px);
}

/* Wrap-top-home remains same */
.wrap-top-home {
  display: flex; /* Use flexbox to center the content */
  justify-content: center; /* Center the content horizontally */
  width: 100%;
  max-width: 1200px; /* max width for readability */
  margin: 0 auto; /* center horizontally */
}

.work-heading {
  max-width: 700px; /* limit width for justified text */
  text-align: justify; /* justify text */
  position: relative; /* for pseudo-element */
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

/* Image container */
.work-image-container {
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.work-image {
  max-width: 95%;
  height: 95%;
  border-radius: 0px; /* optional */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* optional */
  display: block;
  margin-bottom: 5%;
}

/* Animate lines with staggered delay */
.work-heading .line:nth-child(1) {
  animation-delay: 0.2s;
}
.work-heading .line:nth-child(2) {
  animation-delay: 0.5s;
}
.work-heading .line:nth-child(3) {
  animation-delay: 0.8s;
}

/* Animation keyframes */
@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ABOUT section */
.about-section {
  background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80');
  color: white;
  font-size: 4rem;
  justify-content: center;
  text-align: center;
}

/* BLOG section */
.blog-section {
  background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80');
  color: #111;
  font-size: 4rem;
  justify-content: center;
  text-align: center;
}

/* CONTACT section */
.contact-section {
  background-image: url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80');
  color: white;
  font-size: 4rem;
  justify-content: center;
  text-align: center;
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

/* Responsive font size */
@media (max-width: 768px) {
  .work-section {
    padding-left: 15px;
    padding-right: 15px;
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


</style>

<style lang="scss">
@import "./assets/fonts/fonts.css";

@font-face {
  font-family: "Suisse";
  src: url("../src/assets/font/fonnts.com-Suisse_Intl_Regular.ttf") format("opentype");
  font-style: normal;
}
</style>
