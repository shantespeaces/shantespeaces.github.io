<template>
  <section id="sticky-about">
    <section class="about">
      <div class="heading-container" id="about">
        <h2 class="heading">About Me</h2>
      </div>
      <div class="text-container container">
        <div class="quote-container d-flex">
          <q class="mini">
            Empowering digital journeys through a blend of creativity, technical
            prowess, and an unyielding thirst for knowledge, I strive to bridge
            the gap between design and functionality, crafting captivating user
            experiences one pixel at a time.
          </q>
          <button @click="toggleFullText">
            <p>{{ showFull ? "read less" : "read more" }}</p>
          </button>
        </div>
        <p class="full" :class="{ 'show-full': showFull }">
          My mission? By staying at the forefront of emerging technologies and
          design trends, I strive to transform static concepts into dynamic,
          immersive digital environments that resonate with users on a profound
          level. Through this dedication to continuous learning and innovation,
          I empower myself to craft visually stunning and highly functional web
          interfaces that leave a lasting impression on every visitor.
        </p>
      </div>
      <div class="skills container">
        <h4>Technical Skills</h4>
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="row"
          @click="toggleSkill(index)"
        >
          <div class="skills-title-container col-xl-12">
            <h5 class="gold">{{ skill.title }}</h5>
          </div>
          <div class="test">
            <div
              class="d-flex flex-wrap justify-content-between"
              v-show="showSkills[index]"
              :class="{ hidden: !showSkills[index] }"
            >
              <div
                v-for="(item, itemIndex) in skill.items"
                :key="itemIndex"
                class="col-auto d-flex skills-item"
              >
                <template v-if="item.icon">
                  <img
                    :src="item.icon"
                    class="icon"
                    :alt="item.name + ' Icon'"
                  />
                </template>
                <template v-else>
                  <span class="bullet">&#8226;</span>
                </template>
                <p class="skill">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="education container">
        <h4>Professional Development and Education</h4>
        <div
          v-for="(education, educIndex) in educations"
          :key="educIndex"
          @click="toggleDescription(educIndex)"
        >
          <div
            class="skills-title-container d-flex justify-content-between row"
          >
            <h5 class="gold col-xl-10 col-lg-9 col-md-8 col-sm-7">
              {{ education.title }}
            </h5>
            <p class="year gold col-xl-2 col-lg-3 col-md-4 col-sm-5">
              {{ education.year }}
            </p>
          </div>
          <ul v-show="showDescription[educIndex]">
            <li
              v-for="(description, descIndex) in education.description"
              :key="descIndex"
              class="col-xl-12"
            >
              {{ description }}
            </li>
          </ul>
        </div>
      </div>
      <div class="download d-flex justify-content-center">
        <button @click="downloadDocument('shante_nicolaides_resume_en.pdf')">
          <p>Download CV</p>
        </button>
        <button @click="downloadDocument('shante_nicolaides_resume_fr.pdf')">
          <p>Télécharger CV</p>
        </button>
      </div>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";

const downloadDocument = (fileName) => {
  const documentUrl = `${import.meta.env.BASE_URL}documents/${fileName}`;
  const link = document.createElement("a");
  link.href = documentUrl;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const showFull = ref(false);

const toggleFullText = () => {
  showFull.value = !showFull.value;
};

// Define arrays for each skill
const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: "/images/skills/js.png" },
      { name: "TypeScript", icon: "/images/skills/typescript.png" },
      { name: "PHP", icon: "/images/skills/php.png" },
      { name: "HTML", icon: "/images/skills/html5.png" },
      { name: "CSS", icon: "/images/skills/css3.png" },
      { name: "Sass", icon: "/images/skills/sass.png" },
      { name: "SQL", icon: "/images/skills/database.png" },
    ],
  },
  {
    title: "Libraries",
    items: [
      { name: "React", icon: "/images/skills/atom.png" },
      { name: "Vues.Js", icon: "images/skills/vuejs.png" },
      { name: "Angular", icon: "/images/skills/angular.png" },
    ],
  },
  {
    title: "Graphic Editors",
    items: [
      { name: "Adobe XD (Xd)", icon: "/images/skills/xd.png" },
      { name: "Photoshop (Ps)", icon: "/images/skills/ps.png" },
      { name: "Illustrator (Ai)", icon: "/images/skills/ai.png" },
      { name: "Premiere Pro (Pr)", icon: "/images/skills/premiere.png" },
      { name: "Figma", icon: "/images/skills/figma.png" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Laravel", icon: "images/skills/laravel.png" },
      { name: "Node.js", icon: "images/skills/nodejs.png" },
      { name: "MVC Architecture", icon: "images/skills/mvc.png" },
      { name: "Bootstrap", icon: "images/skills/bootstrap.png" },
    ],
  },
  {
    title: "Project Management",
    items: [
      { name: "ClickUp", icon: "/images/skills/clickup.png" },
      { name: "SourceTree", icon: "/images/skills/sourcetree.png" },
      { name: "Git", icon: "/images/skills/git.png" },
      { name: "GitHub", icon: "/images/skills/github.png" },
    ],
  },
  {
    title: "Other items",
    items: [
      { name: "MySQL" },
      { name: "AWS" },
      { name: "FileZilla" },
      { name: "NPM" },
      { name: "Artisan" },
      { name: "WordPress" },
      { name: "Visual Studio Code" },
      { name: "Responsive Design " },
    ],
  },
];

// Combine all arrays into one

//education

const educations = [
  {
    title: "Udemy | Angular",
    year: "2024 - Present",
    description: [
      "Gain hands-on experience in building dynamic, responsive web applications using Angular framework.",
      "Improve awareness of Angular concepts, such as components, services, routing, and form handling, along with integrating RESTful APIs for seamless data exchange in web applications.",
    ],
  },
  {
    title: "Cégep Saint-Jérôme, QC | Web Programming and Design AEC",
    year: "2023",
    description: [
      "Enhanced knowledge of web development fundamentals, including front-end and back-end programming, web design principles, and User Experience (UX) optimization.",
      "Improved proficiency in web technologies and programming languages; gained experience creating and deploying responsive, user-centered websites and applications while leveraging modern web design tools and techniques.",
    ],
  },
  {
    title: "Concordia University, QC | Bachelors of Sociology",
    year: "2012",
    description: ["Bachelors of Sociology (GPA: 3.98 with Honors)"],
  },
];
const showDescription = ref([]);
const showSkills = ref([]);

const toggleDescription = (index) => {
  showDescription.value[index] = !showDescription.value[index];
};

const toggleSkill = (index) => {
  console.log("Toggling skill with index:", index);
  // Toggle the visibility state
  showSkills.value[index] = !showSkills.value[index];
  console.log("Updated showSkills:", showSkills.value);
};

// Initialize showDescription and showSkillss arrays with false for each item
// (Define a reactive variable to track the visibility state)
const initializeShowData = () => {
  showDescription.value = new Array(educations.length).fill(false);
  showSkills.value = new Array(skills.length).fill(false);
  console.log("Initial showSkills:", showSkills.value);
};

initializeShowData();
</script>
<style>
/* ABOUT */
/* #sticky-about {
  bottom: 0;
  position: sticky;
  position: -webkit-sticky;
} */

section.about {
  background-color: #fffdf6;
  z-index: 500;
}
section.about h2 {
  padding-top: 4em;
  background-color: #fcf4ed;
  margin-left: 5em;
  padding-left: 1rem;
  padding-bottom: 1rem;
  position: relative;
}

h2.heading {
  color: black;
}
.text-container {
  padding-bottom: 5em;
}
.quote-container {
  margin-top: 5em;
  margin-bottom: 5em;
}
.quote-container button {
  display: none;
}
.quote-container button {
  position: relative;
  border: solid 3px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  background-color: transparent;
}

.quote-container button p {
  margin-top: 0.6em;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
  text-decoration: none;
  position: relative;
  z-index: 1;
}
.quote-container button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #fcf4ed;
  transform-origin: bottom;
  transition: height 0.3s ease-in;
}

.quote-container button:hover::after {
  height: 100%;
}

p.full {
  margin-bottom: 0;
}

q.mini,
p.full {
  font-size: 1.3rem;
  letter-spacing: 1px;
  line-height: 2;
}

/* EDUCATION AND SKILLS */
.icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
/* ::marker {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  content: "•";
} */

.skills.container,
.education.container {
  padding-bottom: 5em;
  padding-left: 0;
  padding-right: 0;
}
.skills.container h5,
.education.container h5,
.skills.container h4,
.education.container h4,
p.year {
  font-family: "Poiret One", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}
.skills.container h4,
.education.container h4 {
  font-size: 2rem;
  padding-bottom: 1em;
}
.skills.container h5,
.education.container h5,
p.year {
  font-size: 1.3rem;
  padding-top: 0.5rem;
  transition: font-size 0.5s;
}
.skills.container h5:hover,
.education.container h5:hover {
  font-size: 1.35rem;
}
p.skill {
  padding-left: 0.5em;
  margin: 0em;
}
.skills-item {
  margin-bottom: 1em;
  margin-top: 1em;
}

li {
  line-height: 2;
}
.hidden {
  display: none !important;
}
.skills .row,
.education .row {
  cursor: pointer;
}
.skills-title-container {
  background-color: #fcf4ed;
  margin-bottom: 1em;
}
.gold {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  padding-left: 1em;
}
/* DOWNLOAD BUTTON */

.download button {
  position: relative;
  border: solid 2px;
  border-image: var(--goldToRightDark) 1;
  border-image-slice: 1;
  background-color: transparent;
  padding: 1em;
  cursor: pointer;
  margin-bottom: 5em;
  margin-right: 1em;
  margin-left: 1em;
}

.download button p {
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
  text-decoration: none;
  position: relative;
  z-index: 1;
  margin-bottom: 0;
}

.download button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #fcf4ed;
  transform-origin: bottom;
  transition: height 0.3s ease-in;
}

.download button:hover::after {
  height: 100%;
}
@media screen and (max-width: 1200px) {
  section.about h2 {
    margin-left: 5em;
  }

  /* #sticky-about {
    top: -160px;
  } */
  q.mini,
  p.full {
    font-size: 1.3rem;
    line-height: 2;
  }
}
@media screen and (max-width: 992px) {
  section.about h2 {
    margin-left: 2.5em;
  }

  #sticky-about {
    top: -150px;
  }
  q.mini,
  p.full {
    font-size: 1.2rem;
    line-height: 2;
  }
}
@media screen and (max-width: 768px) {
  section.about h2 {
    margin-left: 1.5em;
  }

  q.mini,
  p.full {
    font-size: 1.2rem;
    line-height: 2;
  }
}
@media screen and (max-width: 576px) {
  /* #sticky-about {
    top: -600px;
  } */
  .download {
    flex-direction: column;
    margin-bottom: 4em;
  }
  .download button {
    margin-bottom: 1em;
  }
  .text-container,
  .skills.container,
  .education.container {
    padding-left: 1em;
    padding-right: 1em;
  }
  section.about h2 {
    padding-top: 3em;
    margin: 0;
    text-align: center;
  }
  q.mini,
  p.full,
  p.skill,
  .education li {
    font-size: 1.2rem;
  }
  .full {
    display: none;
  }

  .show-full {
    display: block;
    line-height: 2;
  }

  .quote-container {
    display: flex;
    flex-direction: column;
  }
  .quote-container button {
    display: block;
    margin-top: 3em;
  }
}

@media screen and (max-width: 360px) {
  q.mini,
  p.full {
    font-size: 1.2rem;
  }

  .quote-container button p {
    font-size: 1.6rem;
  }
}
</style>
