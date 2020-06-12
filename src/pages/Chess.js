import React from "react"
import Layout from "../components/Layout"
import "../styles/Chess.css"

export default () =>
(
    <Layout>
        <h2>Chess</h2>
        <p>
        Welcome to the chess page of my website. This page is meant to highlight my favorite chess games throuhgout the years.
        </p>
        <h2>1972 World Chess Championship</h2>
        <p>
            <h3>Background</h3>
            <i><b>If money is the question, here it is. Now come out and play, chicken!
            <br></br>-Jim Slater</b></i>
            <br></br>
            <br></br>
            <figure>
                <img height = "200" src = "https://d53j7mnhlzrdg.cloudfront.net/series/best-games-of-boris-spassky.jpg"></img>
                <figcaption>Boris Vasiljevic Spassky, World Chess Defending Champion, USSR</figcaption>
            </figure>
            <figure>
                <img height = "200" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bobby_Fischer_1972.jpg/200px-Bobby_Fischer_1972.jpg"></img>
                <figcaption>Robert James Fischer, World Chess Championship Challenger, USA</figcaption>
            </figure>
        </p>
    </Layout>
)