import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Traning from './Pages/Traning';
import Rates from './Pages/Rates';
import Clients from './Pages/Clients';
import Testimonials from './Pages/Testimonials';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {
  return (
    <>

    <Home maverick="Maverick" 
    kaan="Kaan" 
    fitness="Fitness" 
    traning="Trainer" 
    lets="Let's Set & Reach Your Fitness Goals" 
    contactbtn="Contact Me"  />



    <AboutMe one=".01" aboutme="About Me" 
    defaulttext1="Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis." 
    defaulttext2="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio." 
    defaulttext3="Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor." 
    defaulttext4="Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan." />


    <Traning two=".02" traning="Traning" 
    defaulttext1="Active Recovery" time1="Mon-Fri: 08:00 - 09:30"
    defaulttext2="This is one way to bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet."
    defaulttext3="Circuit" time2="Mon-Fri: 10:30 - 12:00"
    defaulttext4="This is one way to bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet."
    defaulttext5="Cross-Training" time3="Mon-Fri: 13:00 - 14:30"
    defaulttext6="This is one way to bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet."
    defaulttext7="Aerobic Exercise" time4="Mon-Fri: 09:30 - 10:30"
    defaulttext8="This is one way to bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet."
    defaulttext9="Compound Exercises" time5="Mon-Fri: 12:00 - 13:00"
    defaulttext10="This is one way to bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet."
    defaulttext11="Functional Moves" time6="Mon-Fri: 14:30 - 16:00"
    defaulttext12="This is one way to bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet."/>


    <Rates three=".03" traningrates="Training Rates"
    defaulttext1="Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus."
    doller250="$250" 
    defaulttext2="Diet Or Fitness Report" 
    defaulttext3="Genetic Sample test kit"
    defaulttext4="Your genetic diet" 
    defaulttext5="Diet plan & Exersize suggestions"
    doller500="$500" 
    defaulttext6="Genetic Sample test kit" 
    defaulttext7="Your genetic diet" 
    defaulttext8="Diet & Exersize summary" 
    defaulttext9="Diet plan" 
    defaulttext10="Exercise Suggestions"
    defaulttext11="In-body Analysis" 
    defaulttext12="Weakly checkups" 
    defaulttext13="Check-ups"
    
    doller450="$450" 
    defaulttext14="Diet Or Fitness Report" 
    defaulttext15="Genetic Sample test kit" 
    defaulttext16="Your genetic diet and Exersize Report" 
    defaulttext17="Diet plan & Exersize summary" 
    defaulttext18="Diet plan" 
    defaulttext19="Exersize suggestions"

    defaulttext20="All above plans include personal counseling with me as well as my associates."/>



    <Clients four=".04" myclients="My Clients"
    defaulttext1="Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus." 
    defaulttext2="Crystal May" defaulttext3="Actress" 
    defaulttext4="Terry Oliver" defaulttext5="Athlete" 
    defaulttext6="Janice Clark" defaulttext7="Model" 
    defaulttext8="Roy Freeman" defaulttext9="Developer" />


    <Testimonials five=".05" 
    defaulttext1="Testimonials" defaulttext2="Judy Valdez" 
    defaulttext3="Dancer" 
    defaulttext4="Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo."
    defaulttext5="Terry Barrett" defaulttext6="Boxer" 
    defaulttext7="Terry Barrett Boxer Nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat." 
    defaulttext8="Kyle Lawson" defaulttext9="Designer" 
    defaulttext10="Consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    defaulttext11="Jordan Carroll" defaulttext12="Dancer" 
    defaulttext13="Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." />


    <Gallery six=".06" 
    defaulttext1="Photo Gallery" 
    defaulttext2="Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus."  />


    <Contact contact="Contact Me" 
    defaulttext1="Nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus." 
    defaulttext2="123-456-7890" 
    defaulttext3="contact@enroll.com" 
    defaulttext4="Follow" 
    defaulttext5="Me" 
    defaulttext6="Have" 
    defaulttext7="Questions?" 
    defaulttext8="Send Message" 
    defaulttext9="Copyright © 2023 Fitness Trainer" 
    defaulttext10="Powered by Fitness Trainer" />
    </>
  );
}

export default App;
