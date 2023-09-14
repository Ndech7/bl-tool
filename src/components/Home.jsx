import React from "react";
import "./home.css";
import Team from "./Team";
import { team } from "../assets/team";

const Home = () => {
  const members = team.team;
  return (
    <div className="home">
      <img
        className="py-2"
        src={require("../assets/nairobi_1.jpg")}
        alt="none"
      />
      <hr className="m-6" />
      <div className="flex m-2 ground">
        <div className="ground-definition">
          <h3 className="mx-52 text-sky-600 text-4xl justify-center p-8">
            What is Ground Truthing?
          </h3>
          <p className="mx-24 text-xl block">
            The facts that are found when a location shown on a map, air
            photograph, or satellite image is checked on the ground, as
            validation.Ground truth allows image data to be related to real
            features and materials on the ground. The collection of ground truth
            data enables calibration of remote-sensing data, and aids in the
            interpretation and analysis of what is being sensed.
          </p>
        </div>
        <img src={require("../assets/Ground_Truthing_Pic.png")} alt="none" />
      </div>
      <hr className="m-6" />
      <div className="flex goal">
        <img
          className="m-3 mr-28 ml-24"
          src={require("../assets/project_1.png")}
          alt="none"
        />
        <div className="mx-28 my-1">
          <h3 className="text-sky-600 text-4xl justify-center mx-52 my-2 p-5 pl-16">
            Project Goal
          </h3>
          <p className="text-xl block">
            The goal of the project is to support the field of geoinformatics in
            achieving its desired transition towards digital teaching methods.
            We are accomplishing this by developing foundational components for
            blended learning. Our strategy involves testing and validating a
            collaborative design that is adaptable to the new realities of
            restricted travel, providing lasting benefits for all project
            participants and adaptable to diverse cultural contexts.
            <br /> The ground truthing tool is the subtopic of the project
            assigned to The University of Nairobi Team, ensuring collaboration
            throughout the project.
          </p>
        </div>
      </div>
      <hr className="m-6" />
      <div className="flex goal">
        <div className="mx-20 my-4">
          <h3 className="text-sky-600 text-4xl justify-center mx-48 my-2 py-2 ">
            Blended Learning Tool
          </h3>
          <p className="text-xl block">
            The tool is aimed at employing ground truthing of multispectral
            satellite images representing surveys of the Earth&#39;s surface,
            offering varying levels of spatial and spectral resolution. The
            objective is to derive meaningful interpretations from satellite
            imagery and perform digital image classification accurately,
            demonstrating the interplay between reflection, object dimensions,
            and pixel resolution. Furthermore, the tool aims at integrating
            real-world reference data like photographs and generating composite
            images from diverse sensors to aid in training and cultivating an
            understanding of specific geographical locations.
          </p>
        </div>
        <img
          className="m-3 mr-12 ml-24"
          src={require("../assets/project_image_gps.png")}
          alt="none"
        />
      </div>
      <hr className="w-8 h-8 mx-auto my-8 bg-gray-200 border-0 rounded md:my-12 dark:bg-gray-700" />
      <div className="bg-indigo-300 p-0 sm:p-0">
        <h3 className="text-red-700 text-4xl mx-96 py-2 px-80">
          Meet The Team
        </h3>
        <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-12 px-2 lg:px-8 xl:grid-cols-4">
          <ul className="grid grid-rows-3 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-4">
            {members.map((member) => (
              <li key={member.id}>
                <Team
                  name={member.name}
                  email={member.email}
                  profession={member.profession}
                  passport_photo={member.passport_photo}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
