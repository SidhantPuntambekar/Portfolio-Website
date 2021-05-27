import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <h2>Computational Biology</h2>
    <p>
      This page serves as a collection of fascinating professional experiences
      and things I learn in Computational Biology.
    </p>
    <h2>
      Summer Institute in Biomedical Informatics 2021, Harvard Medical School
    </h2>
    <p>
      Stay tuned. Will be working in the Sunyaev lab under Dr. Evan Koch
      utilizing precise loss of function mutation rate estimates to measure the
      selective constraint of genes.
    </p>
    <h2>
      RNA Bioscience Initiative Summer Internship Program 2020, University of
      Colorado Anschutz School of Medicine
    </h2>
    <p>
      This past summer, I interned at the RNA Bioscience Initiative at the
      University of Colorado Anschutz Medical School in the RBI Fellows Group.
      My project dealt with refining scRNA-seq analysis by improving
      reproducibility of results and conducting a large meta-analysis of
      publicly available scRNA-seq on NCBI GEO.{" "}
    </p>
    <p>
      NCBI Gene Expression Omnibus is the largest repository of scRNA-seq raw
      and processed data available for researchers but the formatting rules are
      considerably loose. This makes reproducibility impossible when peer
      reviewing analysis and data. The main goal of this project is to improve
      an R package maintained by the RBI called{" "}
      <a
        href="https://rnabioco.github.io/clustifyr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        clustifyr
      </a>{" "}
      with a new cell atlas to improve single cell benchmarking and clustering.
    </p>
    <p>
      During the internship, I learned the standard Seurat analysis for
      scRNA-seq in Python and R with the scanpy and Seurat libraries
      respectively. I also learned about different data visualization techniques
      such as principal component analysis and uniform manifold approximation
      and projection. These methods help transform a scRNA-seq counts matrix and
      metadata table into a visualized plot where gene expression profiles can
      be easily viewed by researchers.{" "}
    </p>
    <p>
      I also created a mouse cell atlas with 321 total cell types to improve
      benchmarking of novel mouse scRNA-seq data and contributed util functions
      to clustifyr which facilitate adding new gene expression profiles to the
      atlas. My future goals working with the Fellows Group are to improve the
      quality of data uploaded to NCBI GEO and complete the cell atlas to be
      used in conjunction with ClustifyR.{" "}
    </p>
    <p>
      During the school year of 2020-2021, I worked on creating an RShiny web
      application for the ClustifyR library as well as contributing to the
      Someta library which is designed to monitor and record metadata
      submissions to NCBI GEO records. The web app is available{" "}
      <a target="blank" href="http://tinyurl.com/clustifyrapp">
        here
      </a>
      . We also managed to publish a research essay in the esteemed PLOS Biology
      Journal regarding the scRNA-seq metadata submission problem with NCBI GEO.
      The paper is available{" "}
      <a
        target="blank"
        href="https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3001077"
      >
        here
      </a>
      .{" "}
    </p>
  </Layout>
)
