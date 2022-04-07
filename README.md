# Landing Page

[![Build Status](https://jenkins.kitsuiro.com/buildStatus/icon?job=Kitsuiro-Landing-Page%2Fmain)](https://jenkins.kitsuiro.com/job/Kitsuiro-Landing-Page/job/main/)

This project is a landing page for my personal domain created with React and Tailwind V3.

You can check out the live page at [kitsuiro.com](https://kitsuiro.com)!

## Concepts

There's not much to say about concepts, considering that this is just a static page.

### Frontend/UI

I went with a simple static page with a directory of relevant links. That gives very little space for expression, so I
decided to add some artistic features, namely:

- Light/Dark mode toggle
- Typewriter animation for the title
- Fade-in and pop-out transitions for the buttons

But otherwise, I tried to keep this simple.

### Workflow, CI/CD Pipeline

I'm hosting my own instance of Jenkins inside a Docker container on my server, so I decided, might as well try it out on
this project and practise my workflow skills!

The diagram below should be self-explanatory.

![Workflow Image](./docs/assets/workflow_diagram.svg)
