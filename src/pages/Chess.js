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
            <figure>
                <img height = "200" src = "https://lh3.googleusercontent.com/proxy/jAOyJ-5zp3DqkoNZ_EstL2ua7YzZC8Bw8-e0GU8iG66Pp3hQ3dxJcgEwQ4JF-mfs7EcWw-jt5uN2fhy8uFOfkHOAirZtc9-XIJ_ziHvd6za5YdZPru0Wp-hQdc7uLA"></img>
                <figcaption>Jim Slater</figcaption>
            </figure>
            <figure>
                <img height = "200" src = "https://www.chesshistory.com/winter/pics/cn5198_fischer.jpg"></img>
                <figcaption>Newspaper headline indicating the increase of prize fund money.</figcaption>
            </figure>
        </p>
    </Layout>
)