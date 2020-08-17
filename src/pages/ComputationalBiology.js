import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <h2>Computational Biology</h2>
    <p>
      This page serves as a collection of fascinating things I learn in
      Computational Biology.
    </p>
    <h2>RNA Bioscience Initiative Summer Internship Program 2020</h2>
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
      Currently, I have created a mouse cell atlas with 321 total cell types to
      improve benchmarking of novel mouse scRNA-seq data and contributed util
      functions to clustifyr which facilitate adding new gene expression
      profiles to the atlas. My future goals working with the Fellows Group are
      to improve the quality of data uploaded to NCBI GEO and complete the cell
      atlas to be used in conjunction with clustifyr.{" "}
    </p>
  </Layout>
)
