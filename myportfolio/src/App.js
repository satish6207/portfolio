import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [date, setDate] = useState(new Date());
  const [isVisable, setIsVisable] = useState(false);
  // const [shoWidth, setWidth] = useState(0);
   
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  const handleScroll = () => {
    if(window.scrollY > 300){
      setIsVisable(true);
    }else {
      setIsVisable(false);
    }
  };
  const handleScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // useEffect((e)=>{
  //   const updateWidth = () =>{
  //     setWidth(e.target.window.screenX);
  //   };
  //   window.addEventListener('resize', updateWidth);

  //   return() =>{
  //     window.removeEventListener('resize', updateWidth);
  //   }
  // }, []);
  return(
        <>
            {/* START HEADER SECTION  */}
            <nav id="navbar" className="nav d-flex justify-content-end bg-secondary w-100 shadow z-3">
              <ul className='d-flex me-5 nav-list'>
                <li>
                  <a href="#welcome-section">About</a>
                </li>
                <li>
                  <a href="#projects">Work</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
          </nav>
              {/* START WELCOME SECTION */}

          <section id="welcome-section" className="welcome-section d-flex justify-content-center align-items-center flex-column w-100" style={{height:'100vh'}}>
            <p className='text-light fw-bold'>welcome to my presentation</p>
            <h1 className='text-light'>A React Js Front-End Developer</h1>
          </section>

              {/* START PROJECTS SECTION */}

          <section id="projects" className="projects-section">
            <h1 className="text-dark projects-section-header">These Are Some Of My Personal Projects</h1>
         
            <div className='d-flex justify-content-around flex-wrap row container-fluid m-auto'>

              <a href='https://watch-moviesn.web.app/' target='_blank' className="card rounded rounded-3 text-decoration-none mb-4 ms-4" style={{width:'28rem'}}>
              <img className="card-img-top" src='netflix.png' alt="netflix" />
                <div className="card-body text-bg-light">
                <h2 className="card-title fw-bold"><span className='codde'>&lt;</span> Netflix <span className='codde'>&#47;&gt;</span></h2>
                  <h4 className="card-text text-secondary">Watch.. Movies And Shows Kids Program's</h4>
                </div>
              </a>

              <a href='https://samplee-forms.web.app/' target='_blank'  className="card rounded rounded-3 text-decoration-none mb-4 ms-4" style={{width: "28rem"}}>
              <img className="card-img-top" src='form.png' alt="form" />
                <div className="card-body text-bg-light">
                <h2 className="card-title fw-bold"><span className='codde'>&lt;</span> Form's <span className='codde'>&#47;&gt;</span></h2>
                  <h4 className="card-text text-secondary">Diffrent Login Form's</h4>
                </div>
              </a>

              <a href='https://mathss-calculator.web.app/' target='_blank' className="card rounded rounded-3 text-decoration-none mb-4 ms-4" style={{width: "28rem"}}>
              <img className="card-img-top" src='calculator.png' alt="calculator" />
                <div className="card-body text-bg-light">
                <h2 className="card-title fw-bold"><span className='codde'>&lt;</span> General Calculator <span className='codde'>&#47;&gt;</span></h2>
                  <h4 className="card-text text-secondary">Here I Developed General Calculator App</h4>
                </div>
              </a>

              <a href='https://internship-task-iit.web.app/' target='_blank' className="card rounded rounded-3 text-decoration-none mb-4 ms-4" style={{width: "28rem"}}>
              <img className="card-img-top" src='weather.png' alt="weather" />
                <div className="card-body text-bg-light">
                <h2 className="card-title fw-bold"><span className='codde'>&lt;</span> Weather <span className='codde'>&#47;&gt;</span></h2>
                  <h4 className="card-text text-secondary">It Is A Weather Report Wedget App.</h4>
                </div>
              </a>

              <a href='https://form-mui.web.app/' target='_blank' className="card rounded rounded-3 text-decoration-none mb-4 ms-4" style={{width: "28rem"}}>
              <img className="card-img-top" src='gform.jpg' alt="mui-form" />
                <div className="card-body text-bg-light">
                <h2 className="card-title fw-bold"><span className='codde'>&lt;</span> GooGle Form's <span className='codde'>&#47;&gt;</span></h2>
                  <h4 className="card-text text-secondary">It Is Complete Material-UI App.</h4>
                </div>
              </a>

              <a href='https://sample-videos-web.web.app/' target='_blank' className="card rounded rounded-3 text-decoration-none mb-4 ms-4" style={{width: "28rem"}}>
              <img className="card-img-top" src='video1.png' alt="video" />
                <div className="card-body text-bg-light">
                <h2 className="card-title fw-bold"><span className='codde'>&lt;</span> End To End Project <span className='codde'>&#47;&gt;</span></h2>
                  <h4 className="card-text text-secondary">It's Like OTT Video's PlatForm App</h4>
                </div>
              </a>
        
            </div>
              
          </section>

              {/* START CONTACT SECTION */}

          <section id="contact" className="contact-section">
              <div className="contact-section-header">
                <h2>Let's work together...</h2>
                <p>How do you take your coffee?</p>
              </div>
              <div className="contact-links d-flex justify-content-center flex-wrap w-100 mt-5">

                <a href="#" target="_blank" rel="noreferrer" className="contact-details text-decoration-none me-4"><i className="bi bi-facebook"></i> Facebook</a>

                <a id="profile-link" rel="noreferrer" href="https://www.linkedin.com/in/satish-govindu-869b7114a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNe%2B6TAS8QwO1T3v4NKYigw%3D%3D" target="_blank"  className="contact-details text-decoration-none me-4"><i className="bi bi-linkedin"></i> Linkedin</a>

                <a href="#" rel="noreferrer" className='contact-details text-decoration-none me-4' target="_blank" ><i className='bi bi-twitter'></i> Twitter</a>

                <a href="mailto:bcc:satish.govindu019@gmail.com" target="_blank" rel="noreferrer"  className="contact-details text-decoration-none me-4"><i className="bi bi-at"></i> Send a Mail</a>

                <a href="tel:9703706207" rel="noreferrer" className="contact-details text-decoration-none me-4"><i className='bi bi-phone'></i> Call me</a>

              </div>
          </section>
          
              {/* START FOOTER SECTION */}

          <footer className='d-flex justify-content-evenly p-5 fw-bold'>
            <p>
              **This is just My portfolio. All the projects and contact details
              given are real..
            </p>
            <p>&copy; Created for <a href="mailto:satish.govindu019@gmail.com" target="_blank"> satish.govindu019@gmail.com <i className=""></i></a></p>
          </footer>
          <div className="position-fixed top-50 left-0 d-flex flex-column  bg-dark p-3 rounded rounded-end-pill shadow" style={{width:'16rem'}}>
            <div className="h1 text-light">{date.toLocaleTimeString()}</div>
          </div>
          <div className={`scroll-to-top ${isVisable ? 'visible' : ''}`} onClick={handleScrollTop}><span className='h1 bi bi-arrow-up-circle'></span></div>
          
          {/* <div className="position-fixed bottom-50 right-0 d-flex flex-column  bg-dark p-3 rounded rounded-end-pill shadow" style={{width:'16rem'}}>
            <div className="h1 text-light">{shoWidth}</div>
          </div> */}
        </>
  );
};

export default App;
