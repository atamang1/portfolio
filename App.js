// import './App.css';
// import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
// import Layout from './pages/Layout';
// import Home from "./pages/Home";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Contact from "./pages/Contact"; 


/*----------------------------------------------------Home Start---------------------------------------------------------------- */

const Home = ({isAtHome}) => {
  const background = '/images/chen-liu-unsplash.jpg';
  const sectionRef = React.useRef(null); //Reference to the section 
  const firstName="Ashok"; 
  const lastName="Tamang";
  const [isInView, setIsInView] = React.useState(false); 

  React.useEffect(() => {
    //Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; //We only care about the first entry
        if(entry.isIntersecting) {
          setIsInView(true); //Trigger animation when the section comes into view 
        }else {
          setIsInView(false); //Optionally stop animation when out of view
        }
      }, 
      {threshold: 0.5} //Trigger when 50% of the section is in view 
    ); 

    //Start observing the section 
    if(sectionRef.current) {
      observer.observe(sectionRef.current); 
    }

    //Cleanup observer on unmount

    return () => {
      if (sectionRef.current)
      {
        observer.unobserve(sectionRef.current); 
      }
    }
  }, []); 



  return (
      <div className="section-home-container  d-flex p-5 justify-conent-center align-items-center" ref={sectionRef}
        style={{
            minHeight: "100vh"}}>

          <div className="row h-100 w-100">
            <div className="col-md-7">
              <div className="my-name-wrapper">
                <span className="my-name my-first-name">Ashok</span>
                <span className="my-name my-last-name"> Tamang</span>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center">
                <About isAtHome={isAtHome}/>
              </div>
          </div>
        
      </div>
  ) 
}


const About  = ({isAtHome}) => {

const about = `Hello! My name is Ashok, and I’m currently seeking a software engineer/developer position. I have experience with C++, C#, JavaScript, React, Node.js, and MongoDB, and I am passionate about solving problems through code. While I’ve developed full-stack web applications, I’m open to exploring a variety of software engineering roles.

I’m adaptable, always eager to learn new technologies, and excited to contribute to projects that foster growth and impact. My goal is to collaborate with a dynamic team, apply my skills in real-world projects, and continue evolving as a developer in diverse areas of software engineering.`
return (
      <div className="text-white">
        <div className="d-flex justify-content-center" style={{ width: "100%"}}>
          <div className="section-header-wrapper" style={{width: "fit-content"}}>
            <h1 className={`${isAtHome? 'section-header': 'section-header-hide'}`}>About</h1>
          </div>
        </div>
        <hr className='about-hr'/>
        <div className="about-paragraph " style={{fontSize: "20px"}}>
            <p>{about}</p>
        </div>           
      </div>
  )
}

/*----------------------------------------------------Home End---------------------------------------------------------------- */
/*#############################################################################################################################*/

/*---------------------------------------Skills and Certificates Start---------------------------------------------------------- */

//Skills component 
const Skills = ( {isAtSkills}) => {
  let count = 0; 
  //Skills
  const skills = {
      "Frontend Technologies (Client-Side)": ["HTML", "CSS", "React", "Bootstrap", "SASS", "jQuery", "Redux"], 
      "Backend Technologies (Server-Side)" : ["Node.js", "Express.js", "Bash Script"],
      "Databases" : ["MongoDB", "PostgreSQL", "MySQL"],
      "Programming Languages": ["C++", "C#", "JavaScript"]
  }


  return (
      <div className="container-fluid p-5">

        <div className="row mt-5">
          <div className="text-white container col-md-4">
            <div className="d-flex justify-content-center mb-2">
              <div className="section-header-wrapper" style={{width: "fit-content"}}>
                <h1 className={`${ isAtSkills? 'section-header': 'section-header-hide'}`}>Skills</h1>
              </div>
            </div>

            <div>
              {
                  Object.keys(skills).map(key => {
                      count = count + 1;
                      return (                            
                          <div key={count} className={`row mb-3 p-3 glassmorphism border border-warning ${ isAtSkills? `skill${count}` : '' }`} style={{widht: "fit-content"}}>
                              <p className="text-white h4 p-3">{key}</p>
                              {
                                  skills[key].map(name => (<span className="p-2 ms-3 mb-2 w-auto bg-info border border-primary rounded text-center font-weight-bold skills-name"
                                      style={{widht: "100px"}} key={name}>{name}</span>))
                              }
                          </div>
                      )
                  })
              }
            </div>
          </div>           
        </div>
        <div className="container-fluid p-0" >
          <Certificates/>
        </div>       
      </div>
  )
}

//Certificates component 
const Certificates = () => {
  const image = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp";
  const certificates = {
      certificate1: {
          name: "Responsive Web Design",
          image: "/public/projects/responsive-web-design-certificate.png",
          link: "https://www.freecodecamp.org/certification/ashoktamang/responsive-web-design"
      }, 
      certificate2: {
          name: "JavaScript Algorithms and Data Structures (Beta)", 
          image: "/public/projects/javascript-algorithms-and-data-structures-beta-certificate.png",  
          link: "https://www.freecodecamp.org/certification/ashoktamang/javascript-algorithms-and-data-structures-v8"
      }, 
      certificate3: {
          name: "Front End Development Libraries",
          image: "/public/projects/front-end-development-libraries-certificate.png", 
          link: "https://www.freecodecamp.org/certification/ashoktamang/front-end-development-libraries"
      }, 
      certificate4: {
          name: "Relational Database",
          image: "/public/projects/relational-database-certificate.png", 
          link: "https://www.freecodecamp.org/certification/ashoktamang/relational-database-v8"
      }, 
      certificate5: {
          name: "Back End Development and APIs", 
          image: "/public/projects/back-end-development-and-apis-certificate.png", 
          link: "https://www.freecodecamp.org/certification/ashoktamang/back-end-development-and-apis"
      }, 
      certificate6: {
          name: "Foundational C# with Microsoft", 
          image: "/public/projects/foundational-csharp-with-microsoft-certificate.png", 
          link: "https://www.freecodecamp.org/certification/ashoktamang/foundational-c-sharp-with-microsoft"
      }
  }


  const certificatesRef = React.useRef(null); 
  const [isAtCertificates, setAtCertificates] = React.useState(false);

  React.useEffect(() => {

    const observerOptions = {
      root: null, //use the viewport as the root
      threshold: 0.5, //section is considered "in view" when 50% is visible
    }; 

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setAtCertificates(true); 
        }else {
          setAtCertificates(false); 
        }
      });
    }; 

    const observer = new IntersectionObserver(handleIntersection, observerOptions); 

    // Start observing each section
    if (certificatesRef.current) observer.observe(certificatesRef.current);

  // Cleanup function to disconnect observer on component unmount
  return () => {
    if (observer && certificatesRef.current) {
      observer.unobserve(certificatesRef.current);
    }
  };

  }, []); // Run once after initial render



  return (
             <div ref={certificatesRef} className="container d-flex justify-content-center mt-5">

              <div className="row gap-3 w-100 justify-content-center align-items-center" >
                <div className=" text-white d-flex justify-content-center">
                  <div className="section-header-wrapper" style={{width: "fit-content"}}>
                    <h1 className={`${isAtCertificates? 'section-header': 'section-header-hide'}`}>Certificates</h1>
                  </div>
                </div>

                {
                    Object.keys(certificates).map( key => {
                        return (
                            <div className={`col-md-4 col-sm-12 certificates-wrapper glassmorphism border-warning pt-2 ${isAtCertificates? key: ''}` } key={key}
                              style={{}}>

                                <a href={certificates[key].link} target="_blank" key={key}>
                                    <img className={`certificates-images w-100 h-auto`}  key={key} src={certificates[key].image} />
                                </a>
                                <div
                                    style={{
                                        textAlign: "center",
                                        fontWeight: "bold", 
                                        color: "white",
                                        padding: "10px"
                                    }}>
                                    {certificates[key].name}
                                </div>
                            </div>
                            
                        )
                    })
                }
              </div>
              

            </div>
  )
}

/*---------------------------------------Skills and Certificates End---------------------------------------------------------- */
/*############################################################################################################################*/


/*----------------------------------------------------Project Start---------------------------------------------------------------- */

//Projects component
const Projects = ({ isAtProjects }) => {

  const [projectImage, setProjectImage] = React.useState(""); 

  const projects  = {
      project1: {
          name: "Calculator",
          tools: ["JavaScript", "React", "CSS", "HTML", "Babel"], 
          image: "/public/projects/javascript-calculator.png",
          link: "https://codepen.io/atamang1/pen/BaXjmNm"
      }, 
      project2: {
          name: "25+5 Clock",
          tools: ["JavaScript", "React", "CSS", "HTML", "Babel"], 
          image: "/public/projects/timer.png", 
          link: "https://codepen.io/atamang1/pen/vYoGwNb"
      },
      project3: {
          name: "Markdown Preview ",
          tools: ["JavaScript", "React", "CSS", "HTML", "Babel"], 
          image: "/public/projects/markdown-preview.png", 
          link: "https://codepen.io/atamang1/pen/abebbNq"
      }, 
      project4: {
        name: "Drum Machine ",
        tools: ["JavaScript", "React", "CSS", "HTML", "Babel"], 
        image: "/public/projects/drum-machine.png", 
        link: "https://codepen.io/atamang1/pen/rNXVXxz"
      }, 
      project5: {
        name: "Random Quote Machine ",
        tools: ["JavaScript", "React", "CSS", "HTML", "Babel"], 
        image: "/public/projects/random-quote-machine.jpg", 
        link: "https://codepen.io/atamang1/pen/XWLvPzW"
      }
  }



  /*
  React.useEffect(() => {
     // const projectsImageWrapper = document.querySelector('.projects-image-wrapper'); 
     const projectsImage = document.querySelector('.projects-image')
      if(projectImage && projectImage)
      {
         // projectsImageWrapper.innerHTML = `<img class="projects-image" src=${projectImage} />`
         projectsImage.src = projectImage;
         
      }

  }, [projectImage])
  */

  return (
  <div  className={`projects-section container-fluid pt-5 pb-5`} >
    <div className="row text-white text-center pt-5">
      <div className="d-flex justify-content-center mb-5">
        <div className="section-header-wrapper" style={{width: "fit-content"}}>
          <h1 className={`${isAtProjects? 'section-header': 'section-header-hide'}`}>Projects</h1>
        </div>
      </div>
    </div>
    <div className="row h-100 gap-3 justify-content-center">
      {
        Object.keys(projects).map(key => {
            return (
              <div className={`${key} projects-wrapper  glassmorphism col-md-5 col-sm-12 d-flex justify-content-center align-items-center flex-column p-3`} style={{borderRadius: "16px"}}>
                <div className="projects-image-wrapper">
                  <a href={projects[key].link}  target="_blank"><img className="w-100 h-100" src={projects[key].image} style={{objectFit: "cover", borderRadius: "16px"}}  /> </a>
                </div>
                <div className="projects-name-wrapper mt-3 w-100 text-center p-3 text-white" style={{fontWeight: "bold"}}>
                 <a className="text-white" href={projects[key].link} target="_blank" style={{textDecoration: "none"}}><span className="w-100" style={{fontSize: "20px"}}>{projects[key].name}</span></a>
                  <div className="text-center w-100">
                    {
                      projects[key].tools.map(tool => {
                        return (
                          <span className="p-2 w-100" style={{fontSize: "12px"}}>{tool}</span>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )   
        })
      }

    </div>
  </div>
  );
};

/*----------------------------------------------------Project End---------------------------------------------------------------- */
/*################################################################################################################################*/

/*----------------------------------------------------Contact Start---------------------------------------------------------------- */

const Contact = ({isAtContact}) => {
 
  return (
     <div className="contact-section container-fluid d-flex justify-content-center align-items-center h-100 text-white">
         <div className="container row h-100 w-100 justify-content-center align-items-center">
          <div className="col glassmorphism ">
            <div className='w-100 text-center d-flex justify-content-center p-2'>
              <div className="section-header-wrapper" style={{width: "fit-content"}}>
                <h1 className={`${isAtContact? 'section-header': 'section-header-hide'}`}>Contact</h1>

              </div>
              </div>
              <hr style={{border: "5px solid orange"}}/>
              <div className="container contact-email-container contacts-info-wrapper" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                  <p>E-MAIL</p>
                  <a href="mailto:at152@uakron.edu" className="me-2 email-icon" style={{textDecoration: "none", fontSize: "30px"}}><i class="fa-regular fa-envelope"></i></a>
              </div>
              <div className="container contact-social-container  contacts-info-wrapper " style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                  <p>SOCIALS</p>
                  <ul  style={{listStyleType: "none", fontSize: "30px"}}>
                      <li id="linkedin" className="linkedin-icon"> <a href="https://www.linkedin.com/in/tamang01" target="_blank" alt="Linkedin" ariaLabel="Linkedin">
                      
                      <i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li id="github" className="github-icon"><a href="https://github.com/atamang1" target="_blank" alt="Github"><i className="fa-brands fa-github"></i></a></li>
                      <li id="freecodecamp" className="freecodecamp-icon"><a href="https://www.freecodecamp.org/ashoktamang" target="_blank" alt="Freecodecamp"><i className="fa-brands fa-free-code-camp"></i></a></li>
                      <li id="codepen" className="codepen-icon"><a href="https://codepen.io/atamang1" target="_blank" alt="codepen"><i class="fa-brands fa-codepen"></i></a></li>

                  </ul>
                      
              </div>
              <div className="container contact-resume-container  contacts-info-wrapper" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                  <p>RESUME</p>
                  <a href="../public/projects/timer.png" download >DOWNLOAD</a>                         
              </div>
          </div>
             
         </div>
            
     </div>

  )
}


/*----------------------------------------------------Contact End---------------------------------------------------------------- */
/*################################################################################################################################*/

/* Background-animation start */
const BackgroundAnimation = ( { numberOfBlocks, isInView } ) => {
  return (
    <div className={`background-animation-blocks position-absolute d-flex`} style={{top: "-100%"}}>
      {
        //Using map to loop through and create the blocks 
        Array.from({ length: numberOfBlocks }).map((_, i) => {
          let rand  = Math.floor(Math.random()*numberOfBlocks)+1; 
       return (
        
          <div key={i} className={` border border-primary rounded-circle m-2 ${isInView? 'background-bubble': ''}`} style={{ width: `${rand}px`, height: `${rand}px`}}></div>
        )})
      }
    </div>
  )
}

function App() {

  const [currentSection, setCurrentSection] = React.useState('');

  const homeSectionRef = React.useRef(null); 
  const skillsSectionRef = React.useRef(null); 
  const projectsSectionRef = React.useRef(null); 
  const contactSectionRef = React.useRef(null); 

  React.useEffect(() => {

    const observerOptions = {
      root: null, //use the viewport as the root
      threshold: 0.4, //section is considered "in view" when 50% is visible
    }; 

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setCurrentSection(entry.target.id); 
        }
      });
    }; 

    const observer = new IntersectionObserver(handleIntersection, observerOptions); 

    // Start observing each section
    if (homeSectionRef.current) observer.observe(homeSectionRef.current);
    if (skillsSectionRef.current) observer.observe(skillsSectionRef.current);
    if (projectsSectionRef.current) observer.observe(projectsSectionRef.current);
    if (contactSectionRef.current) observer.observe(contactSectionRef.current);

    return () => {
      // Clean up the observer when the component is unmounted
      observer.disconnect();
    };

  }, []); // Run once after initial render

  return (
    <div className="App">
      <nav className="navbar navbar-expand position-fixed w-100" style={{zIndex: "100"}} >
        <ul className="navbar-nav ms-auto h5" style={{ fontWeight: "bold"}}>
          <li className={`me-3 p-2 `}><a href="#section-home" className={`text-decoration-none ${currentSection==='section-home'? 'border-bottom-green': ''}`}>Home</a></li>
          <li className={`me-3 p-2`}><a href="#section-skills" className={`text-decoration-none ${currentSection==='section-skills'? 'border-bottom-green': ''}`}>Skills</a></li>
          <li className={`me-3 p-2 `}><a href="#section-projects" className={`text-decoration-none ${currentSection==='section-projects'? 'border-bottom-green': ''}`}>Projects</a></li>
          <li className={`me-3 p-2 `}><a href="#section-contact" className={`text-decoration-none ${currentSection==='section-contact'? 'border-bottom-green': ''}`}>Contact</a></li>
        </ul>
      </nav>


      <section ref={homeSectionRef} className="container-fluid p-0" id="section-home"
        style={{background: "linear-gradient(025turn, #3f87a6, #f69d3c, #f69d3c"}}>
        <Home isAtHome={currentSection==='section-home'? true : false}/>
      </section>
      <section ref={skillsSectionRef} className="container-fluid p-0" style={{minHeight: "100vh", background:  "linear-gradient(045turn,  #3f87a6, #3f87a6, #3f87a6"}} 
        id="section-skills">
        <Skills isAtSkills={currentSection==='section-skills'? true : false} />
      </section>
      <section  ref={projectsSectionRef} className="container-fluid p-0" 
        style={{ background:  "linear-gradient(090turn, #3f87a6, #d4e0ca, #3f87a6", minHeight: "100vh" }} 
        id="section-projects">
        <Projects isAtProjects={currentSection==='section-projects'? true : false} />
      </section>
      <section ref={contactSectionRef} className="container-fluid p-0"  id="section-contact"
        style={{background: "linear-gradient(025turn, #f69d3c, #d4e0ca, #3f87a6", height: "100vh"}}>
        <Contact isAtContact={currentSection==='section-contact'? true : false}/>
      </section>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

