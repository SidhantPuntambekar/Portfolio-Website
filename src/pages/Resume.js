import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <h2>Resume</h2>
    <p>
      Welcome to my resume page. Check out my{" "}
      <a
        href={
          "https://drive.google.com/file/d/1fK9AA9fNa7nWl52VrlSl9GBVqzF0jzKe/view?usp=sharing"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>{" "}
      or my{" "}
      <a
        href={"https://www.github.com/SidhantPuntambekar"}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </Layout>
)
