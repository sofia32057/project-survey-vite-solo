<h1 align="center">
  <a href="">
    <img src="/src/assets/survey.svg" alt="Project Banner Image">
  </a>
</h1>

# Survey Project

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

I started with creating components corresponding with the design inspiration in Figma.
Focusing on a component for Inputs (including selects) i tried writing as DRY as possible.
I got stuck in displaying the updated state, since the answers don't belong in the input component.

After reading the instructions again, I realized components was a bit overkill, and decided to move up to the Form component instead.

It took me a long time to figure out how to pass data from child to parent.
Also I feel like using ternary for deciding which form input to create, was over complicated and not really readable.

I'm happy i figured some stuff out and feel like it was cool using an object - but it was not really inline with the task. Yeah...

#### Next step

- Styling
- Switching from inline ternary to if else
- Stretch...

### View it live

[![Netlify Status](https://api.netlify.com/api/v1/badges/d904cb41-fa81-4b23-b2de-8d9661656d01/deploy-status)](https://app.netlify.com/sites/sofias-super-villain-survey/deploys)

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
