import classes from './about.module.css';

function About(props)
{
    return (
        <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/home.jpg'})`,
            backgroundSize: 'cover',
            height: '100vh',
            width: '100vw',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }}> 
            <div className={classes.aboutme}>I have completed my Bachelor of Engineering in Computer Science. Currently 
                working as software tester in a MNC. I started my profession at 2017.
                I have a keen interest in programming and used to do mini projects on my own. 
                My hobbies include reading books, listening to music and watching movies. I do
                write blogs on my own which you can find on my <a href="https://medium.com/@mksiddhu2" target="_blank">medium account.</a> 
                 </div>
            </div>
    )   
}

export default About;