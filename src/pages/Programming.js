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
    <h2>Skills</h2>
    <p>
      For a full list of my programming skills and competancies, please feel
      free to check out my Résumé page <a href="../Resume">here</a>.
    </p>
    <h2>Project Showcase</h2>
    <CardDeck>
      <Card>
        <Card.Img
          height="400"
          variant="top"
          src="../../images/clustifyr.png"
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
            with the R programming language with RShiny framework. The web app
            is available{" "}
            <a target="blank" href="http://tinyurl.com/clustifyrapp">
              here
            </a>
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
      <Card>
        <Card.Img
          height="400"
          variant="top"
          src="../../images/hackcu.png"
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
      <Card>
        <Card.Img
          height="400"
          variant="top"
          src="../../images/cyberhood.png"
        ></Card.Img>
        <Card.Body>
          <Card.Title>Cyberhood</Card.Title>
          <Card.Text>
            Cyberhood hackathon project for HackCU VI. Keeping networks safer
            for everyone using a wifi sniffer program called Kismet while
            storing device data in a MongoDB database with analysis in MongoDB
            Compass. Written primarily in Python while website primarily using
            HTML/CSS/JS.
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
      <Card>
        <Card.Img
          height="359"
          variant="top"
          src="../../images/someta.png"
        ></Card.Img>
        <Card.Body>
          <Card.Title>Someta</Card.Title>
          <Card.Text>
            Cell-type annotations are frequently excluded from public single
            cell datasets. This hinders single cell sequencing analysis
            reproducibility and accessibility. To better describe the issue,
            Someta monitors GEO entries monthly (currently set to auto-update at
            1AM UTC, 1st of the month), and programmatically determines the
            fraction of entries with (potentially, likely overestimated) usable
            cell metadata.
          </Card.Text>
          <a
            class="btn btn-primary"
            href="https://rnabioco.github.io/someta/index.html"
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
