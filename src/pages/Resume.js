import React from "react"
import Layout from "../components/Layout"

const resume = () => (
  <Layout>
    <h2>Résumé</h2>
    <p>
      My résumé is available at the following{" "}
      <a
        href={
          "https://drive.google.com/file/d/1fK9AA9fNa7nWl52VrlSl9GBVqzF0jzKe/view?usp=sharing"
        }
        target="blank"
      >
        link
      </a>
      . It is a PDF compiled with LaTeX. Feel free to reach out to me with any
      questions or other details!
    </p>
    <h2>Programming</h2>
    <p>
      All of my programming projects are hosted on my{" "}
      <a href={"https://www.github.com/SidhantPuntambekar"} target="blank">
        GitHub
      </a>
      .
    </p>
    <p>
      I have developed numerous personal projects and applications throughout my
      work experience and for personal learning. Some of these include an RShiny
      web application to run the{" "}
      <a href="https://github.com/rnabioco/clustifyr-web-app" target="blank">
        ClustifyR R library
      </a>{" "}
      or the hub website for{" "}
      <a href="https://hackcu.org" target="blank">
        HackCU
      </a>
      . In totality, I have experience with bioinformatics software design,
      full-stack development, scripting, scientific programming, and robotics.
    </p>
    <p>
      I currently work with the{" "}
      <a href="https://github.com/rnabioco" target="blank">
        RNA Bioscience Initiative Informatics Fellows Group
      </a>{" "}
      at the University of Colorado Anschutz School of Medicine. My research
      currently deals with scRNA-seq analysis and improving standards for
      sequencing data submission to databases such as NCBI Gene Expression
      Omnibus.
    </p>
    <p>
      I will also begin working with the Sunyaev Lab at Harvard Medical School
      as part of the Summer Institute in Biomedical Informatics Program.
    </p>
    <h2>Computational Biology</h2>
    <p>
      I really enjoy learning about computational biology and bioinformatics as
      they combine computer science and molecular biology in order to discover
      new truths about complex biological systems. Some of the newest biological
      technologies and discoveries such as genome sequencing and protein folding
      have been discovered using breakthroughs in computational biology and
      artificial intelligence.
    </p>
    <p>
      I am currently conducting research with the RNA Bioscience Initiative
      Informatics Fellows Group at the University of Colorado Anschutz School of
      Medicine. I am also beginning a research opportunity in Summer 2021 at
      Harvard Medical School as part of the Summer Institute in Biomedical
      Informatics Program.
    </p>
  </Layout>
)

export default resume
