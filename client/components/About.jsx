import React from "react";


const About = () => {
  return (
    <div className="main-container">
      <div className="content">
        <p>
          Enjoy the regular news narrated by J.R. Tolkien. Because world state is more entertaining when there are hobbits around.
        </p>
      </div>
      <div className="focus-container">
      <div className="content">
        <h2>Our Focus: </h2>
        <p>
          Machine learning and neural networks. We want to transform a text of dry news to J.R. Tolkien style narrative. Based in Wellington, New Zealand our team has a time frame of 8 days to catch up on machine learning tools to build a real time (based on Google news) news app transpilled to Lord of the Ring style.
        </p>
      </div>
      </div>
      <div className="goals-container">
      <div className="content">
        <h2>Our Goals:</h2>
        <p>
          We enjoy Lord of the ring so much and our AI is such a talented writer - the whole web should be such a pleasure to read.
          We intend to build a Chrome extension to transpile every bit of english sentence to this enjoyable adventure.
          We want to see elvish on the screen and as Tolkien would have done it.
          We will be stretching our AI to detect foreign language (not english) on your page to be of elvish beauty.
        </p>
      </div>
      </div>
      <div className="planning-container">
        <h2>Our Project Planning:</h2><br/>
      <div className="content">
          <h3>Timeline</h3>
          <h3>Wednesday: Research</h3> 
          <p>
            Natural Language Processing tool : Compromise 
            Open source machine learning framework : Tensorflow
          </p>
          <h3>Thursday: MVP Lord of the News 1.0 Beta is up</h3>
          <p>
            Gollum function changing language is up and running, this is hard coded without language processing tools. 
            The text changes on screen, and applies to our API of Google news feed.  
            Language is added as a state in our App, as we are going to add many type of translations. 
            The App is deployed in its intial state to Heroku under Lord of the News.  
            We have a clearer view of our different pages thanks to our Wireframes.  
            A dev beta-gamma-epsilon version of nazgul/black speech is in develpoment including Compromise natural language processing tools.  
          </p>
          <h3>Friday: MVP Lord of the News 1.0 Alpha is up</h3>
          <p>
            Nazgul speech is fully functionnal using the compromise.js npm. We can now enjoy a change of dark adjectives, dark people, dark places and nouns.  
            CSS is coming together, and we can now enjoy some new feature perspectives with our Project and Team presentation.  
            We are launching our great learning curve with Tensorflow now installed on our serverside and the start of our dataset building up. One thing for sure, if our machine is not learning YET, we, on the other hand, are.  
            Fun master Nat, brings drinks for our Alpha MVP - Team building is just as important as machine learning  
          </p>
          <h3>Saturday: Getting Tensorflow.js running</h3> 
          <p>
            Fine tunning of the Gollum and Nazgul functional speeches.  
            Tensorflow.js is installed and we can create our dataset with an array of numbers.
            The 'more' part of our app gets filled with 3 components - About (the machine learning and natural language processing adventure) Meet the Team (us) and Contact (links to our preferred contacts modes and why you should contact us)  
          </p>
          <h3>Sunday: Can we make it a Chrome extension?</h3>
          <p>
            Determining what functionalities we should get to test  
            Reasearch on creating a chrome extension (manifest.json)  
          </p>
          <h3>Monday: You haven't made it until you can test it</h3>     
          <p>
            Testing with enzyme our React Component and Redux store  
            Testing with jest our Api call and functions  
            Getting UX and UI to get nicer with loading precious ring  
          </p>
          <h3>Tuesday: Yes! We can make it a Chrome extension - Let's do it -- Give this machine a writting brain</h3>
          <p>
            More on machine learning  
            Developper side chrome extension practices  
          </p>
      </div>
      </div>
    </div>
  )
}

export default About