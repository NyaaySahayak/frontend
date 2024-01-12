import React from 'react'
import docs from '../images/docs.jpg'
import law from '../images/law.avif'
import randc from '../images/randc.jpeg'
import voice from '../images/voice.avif'
import { Link } from 'react-router-dom'

export default function About() {
  const paragraphStyles = {
    fontSize: '23px',
    lineHeight: '1.5',
    color: '#333', // You can set your desired text color
    // Add any other styles you want to apply to all <p> tags
  };
  const feature ={
    display: 'flex',
    justifyCcontent: 'spaceEvenly',
    
    
    padding: '20px',
    backgroundColor:'#E5E1DA'
}
const card={
  width: '18rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin:' 0% 7%'
}
  return (
    <>
    <div className='header' style={{"backgroundColor":"#2D3250","height":"250px","color":"whitesmoke","padding":"3%","alignItems":"center","justifyContent":"center"}}>
      <h1 style={{"padding":" 0% "}}>
        Nyaay SAHAYAK
      </h1>
      <h4>"Nyaay Sahayak: Your Legal Companion in Every Query, Every Step."</h4>
      <h5>At Nyaay Sahayak, we understand that legal processes and paperwork can be daunting, and we are here to simplify and guide you through every step.</h5>
    </div>
  <div className='body' style={{"backgroundColor":"#E5E1DA"}}>
     <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',"margin":"0% 5%"}}>
     <div>
    <h3>Voice and Text Assistance</h3>
    <p style={paragraphStyles}>Our advanced platform employs cutting-edge technology to cater to a diverse range of users. Whether you prefer interacting through voice commands or typing your queries, Nyaay Sahayak ensures that information is accessible to everyone. The voice and text assistance feature aims to provide a seamless and inclusive user experience. You can simply ask questions or input your queries through text, and our platform will promptly provide clear and accurate responses, making legal information easily available at your fingertips.</p>
  </div>
  <img src={voice} alt="img" style={{ height: '150px', marginLeft: '20px' }} />
 </div>

    <div style={{ display: 'flex', alignItems: 'center',"margin":"0 5%" }}>
  <img src={randc} alt="img" style={{ height: '150px', marginRight: '20px' }} />
  <div>
    <h3>Education on Rights and Laws</h3>
    <p style={paragraphStyles}>Nyaay Sahayak goes beyond being a mere service; it transforms into an educational hub dedicated to empowering users with knowledge. We understand the complexity of legal matters and believe in equipping you with the necessary information to understand your rights, obligations, and the laws that govern them. Through user-friendly content, informative articles, and interactive learning resources, we strive to demystify legal concepts and ensure that you are well-informed about your legal standing in various situations.</p>
  </div>
</div>

<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',"margin":"0 5%" }}>
  <div>
    <h3>Document Assistance</h3>
    <p style={paragraphStyles}>Navigating through essential documents such as Aadhar, PAN, and Visa applications can be a daunting task. Nyaay Sahayak simplifies this process by providing step-by-step guidance, ensuring a hassle-free experience. Our platform not only assists you in understanding the requirements but also helps in accurately filling out the necessary documents. The aim is to streamline the documentation process, saving you time and ensuring that your submissions are error-free and in compliance with relevant regulations.</p>
  </div>
  <img src={docs} alt="img" style={{ height: '150px', marginLeft: '20px' }} />
</div>

    <div style={{ display: 'flex', alignItems: 'center',"margin":"0 5%" }}>
  <img src={law} alt="img" style={{ height: '150px', marginRight: '20px' }} />
  <div>
    <h3>Qualified Legal Expert</h3>
    <p style={paragraphStyles}>In situations that require personalized attention and expertise, Nyaay Sahayak offers access to a team of qualified and experienced lawyers. These legal experts are ready to assist you, whether you have questions, need clarification on legal matters, or require representation. Our commitment is to provide you with reliable and professional support, ensuring that you have the guidance and assistance you need to navigate through legal challenges. By having a team of qualified legal experts, we aim to bridge the gap between users and legal professionals, making legal assistance more accessible and user-friendly.</p>
  </div>
</div>
</div>

<div class="feature-container" style={feature}>
        <div class="card" style={card}>
            <div class="card-body">
                <h5 class="card-title">User-Friendly Interface</h5>
                <p class="card-text">Our platform is designed with simplicity in mind, making it easy for anyone to access the information and assistance they need.</p>
            </div>
        </div>

        <div class="card" style={card}>
            <div class="card-body">
                <h5 class="card-title">Reliable Information</h5>
                <p class="card-text">Rest assured that the information provided by Nyaay Sahayak is accurate, up-to-date, and vetted by legal professionals.</p>
            </div>
        </div>

        <div class="card" style={card}>
            <div class="card-body">
                <h5 class="card-title">Comprehensive Support</h5>
                <p class="card-text">From basic queries to complex legal issues, we strive to be your one-stop solution, offering guidance at every stage.</p>
            </div>
        </div>
    </div>
<div className="footer" style={{"backgroundColor":"#11235A","height":"300px","display":"flex","color":"whitesmoke","justifyContent":"space-evenly","padding":"5%"}}>
<div style={{"width":"40%"}}>
  <h5>Nyaay SAHAYAK</h5>
  <p>Crafted with passion and care by the Nyaay Sahayak team, in collaboration with our dedicated contributors.</p>
    © 2024 Nyaay Sahayak. All rights reserved.</div>
  

  <div>
    <h3>follow us</h3>
    <Link to="https://www.instagram.com/----/" style={{"display":"block","color":"white","textDecoration":"none","fontSize":"17px"}}>instagram</Link>
    <br></br>
    <Link to='' style={{"display":"block","color":"white","textDecoration":"none","fontSize":"17px"}}>facebook</Link>
    <br></br>
    <Link to='' style={{"display":"block","color":"white","textDecoration":"none","fontSize":"17x"}}>twitter</Link>
    <br></br>
    
  </div>
  <div>
    <h3>Contact us </h3>
  <Link to="mailto:srishmaalladi14@gamil.com" style={{"display":"block","color":"white","textDecoration":"none","fontSize":"17px"}}>Email</Link>
  <br></br>
   <p>phone:1234567891</p>
  </div>
  </div>
  
    </>
  );
  
}
