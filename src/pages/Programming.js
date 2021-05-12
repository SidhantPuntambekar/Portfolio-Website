import React from "react"
import Layout from "../components/Layout"
import Card from "react-bootstrap/Card"
//import Button from "react-bootstrap/Button"
import CardDeck from "react-bootstrap/CardDeck"
import "bootstrap/dist/css/bootstrap.min.css"

const programming = () => (
  <Layout>
    <h2>Programming</h2>
    <p>
      For all of my programming history and personal projects, please check out
      my{" "}
      <a
        href="https://www.github.com/SidhantPuntambekar"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
    <h2>Project Showcase</h2>
    <CardDeck>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/rnabioco/clustifyr-web-app/main/logo.png"
          style={{ height: "500px", width: "500px" }}
        ></Card.Img>
        <Card.Body>
          <Card.Title>ClustifyR Web Application</Card.Title>
          <Card.Text>
            The purpose of this app is to enable quick classification of
            single-cell RNA sequencing data through an interactive web
            interface. Users can directly upload their matrix and metadata files
            or Seurat/SCE objects generated from single-cell RNA sequencing
            analyses and produce useful cell identity inference and
            visualization using a built-in library of references
            (clustifyrdatahub) compiled from reference bulk RNA-seq experiments,
            microarray expression data, and single-cell gene signatures. Built
            with the R programming language with RShiny framework.
          </Card.Text>
          <a
            class="btn btn-primary"
            href="https://github.com/rnabioco/clustifyr-web-app"
            target="blank"
          >
            Link
          </a>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://events.hackcu.org/assets/img/hackcu6_logo.png"
        ></Card.Img>
        <Card.Body>
          <Card.Title>HackCU Hub Website</Card.Title>
          <Card.Text>
            The HackCU Hub Website is the primary website for staying up to date
            with all HackCU hackathon events and workshops. Working as a member
            of the HackCU Tech Team, I developed this site from the ground up
            using ReactJS and Gatsby. The site features descriptions about
            HackCU hackathons, workshops, team members, and HackCU as an
            organization overall. I also developed the website for HackCU007
            which was the organization's seventh hackathon.
          </Card.Text>
          <a class="btn btn-primary" href="https://hackcu.org" target="blank">
            Link
          </a>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/947/043/datas/original.jpeg"
        ></Card.Img>
        <Card.Body>
          <Card.Title>Cyberhood</Card.Title>
          <Card.Text>
            Cyberhood Project for HackCU VI. Keeping networks safer for everyone
            using a wifi sniffer program called Kismet while storing device data
            in a MongoDB database with analysis in MongoDB Compass.
          </Card.Text>
          <a
            class="btn btn-primary"
            href="https://github.com/SidhantPuntambekar/team-cyberhood-1"
            target="blank"
          >
            Link
          </a>
        </Card.Body>
      </Card>
    </CardDeck>
  </Layout>
)

export default programming
