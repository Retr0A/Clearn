import React from 'react'
import '../../Scss/Page.scss'

import CreateProject from '../../Images/create-project.png'
import EditorWindow from '../../Images/editor-window.png'

import { useState } from 'react';

import { Accordion, Button, Modal, Alert } from 'react-bootstrap'

function Learn() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='learn'>
      <h1>Here you can start learning about Unreal Engine.</h1>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Chapter 1: Introduction</Accordion.Header>
          <Accordion.Body>
            <h3>What is Unreal Engine?</h3>
            <ul>Unreal Engine is a game engine developed by Epic Games.</ul>
            <h3>What is Blueprint?</h3>
            <ul>Blueprint is Unreal Engine's programming language used to create and manage games.</ul>
            <h3>What is Blueprint Editor?</h3>
            <ul>Blueprint Editor is a program for creating and editing Blueprints. It's build-in program in Unreal Engine.Here we will use it a lot of times.</ul>
            
            <Button variant='primary' onClick={handleShow}>I Read And Finished The First Chapter</Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Chapter 2: Creating a Project</Accordion.Header>
          <Accordion.Body>
            <h3>What is a Project?</h3>
            <ul>A project is a collection of files that can be used to build a game.</ul>
            <h3>Lets Create Our First Project</h3>
            <ul>To create a project, open Unreal Editor and a window will pop up on your screen:</ul>
            <img src={CreateProject} alt='create-project' />
            <ul>In the window, click the button "Next", type the project name and location and click Create Project. You dont need to touch these settings at the top. We will start with empty project without any templates.</ul>
            <ul>Now wait for Unreal Engine to create your project.</ul>
            <ul>When the project is created, you will see a window, which is the Unreal Editor. Here you will edit your game.</ul>
            <h3>Unreal Editor Window Structure</h3>
            <ul>In this image you will see the normal window structure of the editor. We will use this aligment, so make sure you remember it.</ul>
            <img src={EditorWindow} alt='editor-window' />
            <Alert variant='primary'>Viewport - Scene Viewer, where you edit the objects.</Alert>
            <Alert variant='secondary'>Content Browser - Assets, where you import textures, materials and every other asset in the project.</Alert>
            <Alert variant='success'>World Outliner - All objects in the current scene.</Alert>
            <Alert variant='warning'>Details/World Settings - Details for the selected object and World Settings for the current scene settings.</Alert>
            <Alert variant='danger'>Place Actors - All basic Actors(Game Objects), that can be placed by dragging the object's icon to the viewport.</Alert>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulations for completing the first chapter!🎉</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Continue to the next chapter
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )

}

export default Learn