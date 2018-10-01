<img src='https://images.unsplash.com/photo-1528148415198-ca01b36752d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c75a803a39020489503d7a82643af56&auto=format&fit=crop&w=1650&q=80' >

# Lord-of-the-News

Enjoy the regular news narrated by J.R. Tolkien. Because world state is more entertaining when there are hobbits around.

## Focus on :
Machine learning and neural networks are our focus. Our goal is to be able to transform a text of dry news to a beautiful J.R. Tolkien style narrative. 
Based in Wellington, New Zealand our team has a time frame of 8 days to catch up on machine learning tools to build a real time (based on Google news) news app transpilled to Lord of the Ring style. 

## We want more - can we do more ? :
- We enjoy Lord of the ring so much and our AI is such a talented writter - the whole web should be such a pleasure to read.
  - Say no more - we intend to be building a Chrome extension to transpile every bit of english sentence to this enjoyable adventure.

- Elvish is great - Tolkien is also the whole building of another language, talent, greatness... I want to see elvish on my screen and I want it as Tolkien would have done it. Lord of the News can you do it ?
  - We sure can try to bring it to you. We will be stretching our AI to detect foreign language (not english) on your page to be of elvishish beauty. 

## Planning
# Team
- Expectations
- Work Styles : 
  Nat : home codeur
  Kyoko & Marie : 9am - 8pm codeurs. We will split research in teams of ones. We acknoledge that we are more efficient are a fluid team with pairing opportunities on harder to tackle challenges.
- Personalities snippet
- Declarations : Remember to ask for help before the problem becomes painful. Don't stay stuck. Take breaks. Keep it entertaining. Learn the tech.

# Team Focus
- Project Owner : Marie
- Git Master : Kyoko
- Fun Keeper : Nat

# Project Planning
- MVP
  - The API does change the text to a Lord of the Ring narrative that is still fitting in english conformity. 
- Planning
  - Wednesday
    Research : \
        - Natural Language Processing tool  : <a href='https://github.com/spencermountain/compromise'>Compromise</a> \
        - Open source machine learning framework  : <a href='https://github.com/tensorflow/tensorflow'>Tensorflow</a>\
        - Machine learning Software  : Weka, develloped by the University of Waikato\
        - Creative AI to write horror stories  : <a href='http://shelley.ai/'>Shelley</a>, by the MIT media team \
        - Other Text AI : <a href='http://fido.ai/'>FIDO.AI</a> is an AI created to detect cyberbullying violence between children online, this is important to us to help carry meaning in our news;  <a href='https://textio.com/'>TEXTIO</a>, predict the expected response to a text(positive/negative) - <i>less meaningful to our project goal</i>;  <a href='https://www.cortical.io/'>CORTICAL</a>, is an AI which processes Natural Language Understanding - it goes from language detection (for our elvish strech) - to Twitter filters;  <a href='https://narrativescience.com/'>NARRATIVE SCIENCE</a>, has a strong company driven approch, this transforms data to text - <i>less meaningful to our project goal</i>.
  - Thursday :  MVP Lord of the News 1.0 Beta is up &nbsp;
      - Gollum functional language changing function is up. Hard coded without language processing tools. Text changes on screen and applies to our API of news feed &nbsp;
      - Language is added as a state in our App - We are going to add many type of translations &nbsp;
      - The App is laucnhed to Heroku under [Lord of the News](http://lord-of-the-news.herokuapp.com/) &nbsp;
      - We have a clearer view of our different pages thanks to our Wireframes &nbsp;
      - A dev beta-gamma-epsilon version of nazgul/black speech is in develpoment including Compromise natural language processing tools &nbsp;
  - Friday :  MVP Lord of the News 1.0 Alpha is up &nbsp;
       - Nazgul speech is fully functionnal using the compromise npm - We can now enjoy a change of dark adjectives, dark people, dark places and nouns &nbsp;
       - The CSS is starting to look good - we can now enjoy some new feature perspectives with our Project and Team presentation &nbsp;
       - We are launching our great learning curve with Tensorflow now installed on our serverside and the start of our dataset building up. One thing for sure, if our machine is not learning YET, we, on the other hand, are. &nbsp;
       - Fun master Nat, brings drinks for ous Alpha MVP - Team building is just as important as machine learning &nbsp;
   - Saturday :  Getting Tensorflow.js running &nbsp;
       - Fine tunning of Gollum and Nazgul speeches &nbsp;
       - Tensorflow.js is installed and we can create our dataset with an array of numbers - Reflection on the look of our own dataset - Can we use text and strings ? How will the model interpret that ? What are actually our predictions expectations ? &nbsp;
       - The 'more' part of our app gets filled with 3 components - About (the machine learning and natural language processing adventure) Meet the Team (us) and Contact (links to our preferred contacts modes and why you should contact us) &nbsp;
   - Sunday :  Can we make it a Chrome extension ? &nbsp;
       - Determining what functionalities we should get to test &nbsp;
       - Reasearch on creating a chrome extension (manifest.json) &nbsp;
   - Monday :  You haven't made it until you can test it &nbsp;
       - Testing with enzyme our Reac Component and Redux store &nbsp;
       - Testing with jest our Api call and functions &nbsp;
       - Getting UX and UI to get nicer with loading precious ring &nbsp;
       
       
- Stretch
- <a href=https://github.com/marie-phu-qui/Lord-of-the-News/tree/master/public/images/wireframes>Our Wireframes</a>
- Libraries
- Timeline


# API DOCS

We receive our news from the Google News Api. Here is what we expect : 

  | Method | Endpoint | Response | 
  | --- | --- | --- |
  | GET | api/v1/news | array of news objects | 


Method : GET 
Route : / API/V1/NEWS
(body) - an array of objects

```sh
[
    {
        "source": {
            "id": null,
            "name": "Tvnz.co.nz"
        },
        "author": null,
        "title": "Auckland Transport to be free from alcohol advertising from Monday",
        "description": null,
        "url": "https://www.tvnz.co.nz/one-news/new-zealand/auckland-transport-free-alcohol-advertising-monday",
        "urlToImage": null,
        "publishedAt": "2018-09-30T02:11:48Z",
        "content": null
    }
]
```

# Focus on
- Teamwork
  - Efficient communication : Use project on github, a powerful ReadMe, Slack channel
- Time frame
  - Research dedicated time with short presentation on chosen topics : Wednesday - Thursday : 3pm
  - Plannification 
- Finished result
  - Aim for Satursday MVP 
- Regular short timed checkins/standups 
- Presentation
  - Regular learning / teaching noting to build our story strong during the whole journey.

