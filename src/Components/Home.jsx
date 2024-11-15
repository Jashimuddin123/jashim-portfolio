import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import MyEducation from "./MyEducation";
import MyExperience from "./MyExperience";
// import MyProjects from "./MyProjects";
import MyService from "./MyService";
import MySkills from "./MySkills";


const Home = () => {
    return (
        <div id="banner">
          <Banner></Banner>
           <AboutMe></AboutMe>
           <MyExperience></MyExperience>
           <MySkills></MySkills>
           {/* <MyProjects></MyProjects> */}
           <MyEducation></MyEducation>
           <MyService></MyService>
           <Contact></Contact>
         <Footer></Footer>
      
        </div>
    );
};

export default Home;