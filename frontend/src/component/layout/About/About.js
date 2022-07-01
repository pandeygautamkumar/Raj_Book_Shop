import React from "react";
import "./AboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/gautampandey1443/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/djgzmi5wy/image/upload/v1656592991/My_Image/My_image_bkru9i.jpg"
              alt="Creater"
            />
            <Typography>Gautam Kumar Pandey</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a simple wesbite made by @Gautam Kumar Pandey. Only with the
              purpose to learn MERN Stack..
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>
            <a
              href="https://www.facebook.com/sankrityaraj.gautam/"
              target="blank"
            >
              <FacebookIcon className="FacebookSvgIcon" />
            </a>

            <a href="https://www.instagram.com/gautampandey1734/" target="blank">
              <InstagramIcon className="instagramSvgIcon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
