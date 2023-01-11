import classes from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Projects.css";
import project1_1 from "../../assets/images/projects/project2/screenshot-1.png";
import project1_2 from "../../assets/images/projects/project2/screenshot-2.png";
import project1_3 from "../../assets/images/projects/project2/screenshot-3.png";
import project1_4 from "../../assets/images/projects/project2/screenshot-4.png";
import project1_5 from "../../assets/images/projects/project2/screenshot-5.png";
import project1_6 from "../../assets/images/projects/project2/screenshot-6.png";
import project1_7 from "../../assets/images/projects/project2/screenshot-7.png";
import project1_8 from "../../assets/images/projects/project2/screenshot-responsive-8.png";
import project1_9 from "../../assets/images/projects/project2/screenshot-responsive-9.png";
import project2_1 from "../../assets/images/projects/project1/Home_Page_0.jpg";
import project2_2 from "../../assets/images/projects/project1/Home_Page_1.jpg";
import project2_3 from "../../assets/images/projects/project1/About_Page.jpg";
import project3_1 from "../../assets/images/projects/project4/main_menu.jpg";
import project3_2 from "../../assets/images/projects/project4/select_Menu.jpg";
import project3_3 from "../../assets/images/projects/project4/map.jpg";
import project3_4 from "../../assets/images/projects/project4/main_map.jpg";
import { useInView } from "react-intersection-observer";

const Projects = (props) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className={classes.main} id={props.id}>
      <div
        className={classes[`${inView ? "containerWithEffect" : "container"}`]}
        ref={ref}
      >
        {/*
        <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Swiper
              className="mySwiper2 swiper-v"
              direction={"vertical"}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project1_1} alt="Project1_1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project1_2} alt="Project1_2" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project1_3} alt="Project1_3" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project1_4} alt="Project1_4" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project1_5} alt="Project1_5" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project1_6} alt="Project1_6" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project1_7} alt="Project1_7" />
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              className="mySwiper2 swiper-v"
              direction={"vertical"}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project2_1} alt="Project2_1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project2_2} alt="Project2_2" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project2_3} alt="Project2_3" />
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              className="mySwiper2 swiper-v"
              direction={"vertical"}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project3_1} alt="Project3_1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project3_2} alt="Project3_2" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.projectImg}>
                  <img src={project3_3} alt="Project3_3" />
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>
       */}
        <div className={classes.projects}>
          <h1>My Projects</h1>
          <div className={classes.project}>
            <h2>
              <a href="https://miniman.vercel.app/">Miniman</a>
            </h2>
            <p>This project is a little advertising app</p>
            <div>
              <h3>Technologies</h3>
              <p>React - JSX - SASS - Material UI - REST API</p>
            </div>
          </div>
          <div className={classes.project}>
            <h2>
              <a href="https://ketabak.vercel.app">Ketabak</a>
            </h2>
            <p>Website for Ketabak publishers and It is an ongoing project</p>
            <div>
              <h3>Technologies</h3>
              <p>
                React - JSX - SASS - Material UI - REST API - Custom Hook -
                Swiper Js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
