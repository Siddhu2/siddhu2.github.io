import classes from './home.module.css';

function Home(props)
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
        <div className={classes.home}>
            Siddharth Murugan
        </div>
        <div className={classes.profession}>
            Software Tester
            </div>
        <div className={classes.skillset}>
            Having hands on experience in testing with:
            <br>
        </br>
        <div className={classes.tools}>
        Cypress | WebdriverIO | Appium | Jenkins | Git
        </div>
        </div>
        </div>
    )
}

export default Home;