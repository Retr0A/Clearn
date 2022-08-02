import React from 'react'
import '../../Scss/Page.scss'

function About() {
  return (
    <div>
      <h1>What is Clearn?</h1>
      <blockquote>Clearn is site for learning Unreal Engine Blueprints For Free.</blockquote>
      
      <h1>How can I start learning using this site?</h1>
      <blockquote>To start reading about Unreal Engine, go to <a href='/learn'>Learn Page</a></blockquote>
      <ul>Every chapter is divided into pieces. You need to read them part by part to continue to the other chaper.</ul>
      <ul>When you finished learning a chapter, click the blue I Read And Finished The First Chapter! button</ul>

      <h1>Resources needed for these lessons</h1>
      <ul>
        <li>Unreal Editor version higher then 4.5</li>
        <li>Any external software for editing images. (Photoshop Recomended)</li>
        <li>Any external software for editing 3D models. (Blender Recomended)</li>
      </ul>
    </div>
  )
}

export default About