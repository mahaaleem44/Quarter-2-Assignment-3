import Header from "../components/header";
export default function AboutUs(){
  return(
    
    <div className="parent">
<Header/>
    <div className="child">
    <h2>  Know More about me !</h2>
    <p>My web development work focuses on creating intuitive <br />and responsive user experiences. 
      I specialize in front-end <br />echnologies like HTML, CSS, and JavaScript,
      ensuring <br />visually appealing designs..</p>
      {/* <p>My web development work focuses on creating intuitive and responsive user experiences. <br></br>
      I specialize in front-end technologies like HTML, CSS, and JavaScript, <br></br>
      ensuring visually appealing designs. </p> */}
      <button>Click Here to Read More</button>
      </div>

      {/* div for imagess */}

      <div className="images">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Hk4jJjP54B9TDQdEfU1h5wlu5YCOaWGHpw&s" className="girl" />

      </div>
</div>

  )
};





  