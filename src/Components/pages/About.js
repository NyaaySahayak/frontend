import React from "react"
import docs from '../images/docs.jpg'
import law from '../images/law.avif'
import randc from '../images/randc.jpeg'
import voice from '../images/voice.avif'
export default function About() 
{
  return (
    <>
 <div className="container-fluid" style={{ backgroundColor: "#FEECE2" }}>
  <div className="row h-40 align-items-center ">
    <div className="col-md-4 m-6 ">
      <div className="card align-items-center"  style={{backgroundColor:'transparent'}}>
        <h4>Voice and text assist</h4>
        <img src={voice} className="img-rounded" alt="..." style={{ width: "50%",height:"60%"}} />
      </div>
    </div>
    <div className="col-md-8 p-6 fs-5 fst-italic">
      <p>
        Our advanced platform employs cutting-edge technology to cater to a diverse range of users. Whether you prefer interacting through voice commands or typing your queries, Nyaay Sahayak ensures that information is accessible to everyone. The voice and text assistance feature aims to provide a seamless and inclusive user experience. You can simply ask questions or input your queries through text, and our platform will promptly provide clear and accurate responses, making legal information easily available at your fingertips.
      </p>
    </div>
  </div>
  <div className="row p-3 align-items-center border border-dark">
    <div className="col-md-8 p-2 fs-5 fst-italic">
      <p>
        Nyaay Sahayak goes beyond being a mere service; it transforms into an educational hub dedicated to empowering users with knowledge. We understand the complexity of legal matters and believe in equipping you with the necessary information to understand your rights, obligations, and the laws that govern them. Through user-friendly content, informative articles, and interactive learning resources, we strive to demystify legal concepts and ensure that you are well-informed about your legal standing in various situations.
      </p>
    </div>
    <div className="col md-4 p-6 ">
      <div className="card  align-items-center" style={{backgroundColor:'transparent'}}>
        <h4>Education on Rights and Laws</h4>
        <img src={randc} className="card-img-top img-fluid" alt="..." style={{ width: "60%", height: "100%" }} />
      </div>
    </div>
  </div>
  <div className="row p-3 align-items-center ">
    <div className="col-md-4 m-16 ">
      <div className="card align-items-center" style={{backgroundColor:'transparent'}} >
        <h4>Document Assistance</h4>
        <img src={docs} className="card-img-top img-fluid" alt="..." style={{ width: "60%", height: "100%" }} />
      </div>
    </div>
    <div className="col-md-8 fs-5 fst-italic">
      <p>
        Navigating through essential documents such as Aadhar, PAN, and Visa applications can be a daunting task. Nyaay Sahayak simplifies this process by providing step-by-step guidance, ensuring a hassle-free experience. Our platform not only assists you in understanding the requirements but also helps in accurately filling out the necessary documents. The aim is to streamline the documentation process, saving you time and ensuring that your submissions are error-free and in compliance with relevant regulations.
      </p>
    </div>
  </div>
  <div className="row align-items-center border border-dark">
    <div className="col-md-8 p-1 fs-5 fst-italic">
      <p className="fs-6">
        In situations that require personalized attention and expertise, Nyaay Sahayak offers access to a team of qualified and experienced lawyers. These legal experts are ready to assist you, whether you have questions, need clarification on legal matters, or require representation. Our commitment is to provide you with reliable and professional support, ensuring that you have the guidance and assistance you need to navigate through legal challenges. By having a team of qualified legal experts, we aim to bridge the gap between users and legal professionals, making legal assistance more accessible and user-friendly.
      </p>
    </div>
    <div className="col-md-4 m-16 " style={{backgroundColor:'transparent'}}>
      <div className="card align-items-center" style={{backgroundColor:'transparent'}} >
        <h4>Qualified Legal Expert</h4>
        <img src={law} className="card-img-top img-fluid" alt="..." style={{ width: "50%", height: "30%" }} />
      </div>
    </div>
  </div>
</div>

<div className="row bg-dark p-3 text-white container-fluid" style={{"width":"105vw"}}>
  <div className="col sm-6 ">
  <h4 calssname="text-danger">Nyyay sahayak</h4>
  <p>crafted with passion and care by nyaay sahayak team,in colaboration our dedicated contributors</p>
  </div>
  <div className="col sm-3 ">
  <h4 calssname="text-primary">Follow us</h4>
      <p><i className="fa-brands fa-instagram">instagram</i></p>
      <p><i className="fa-brands fa-twitter">twitter</i></p>
    <p><i className="fa-brands fa-facebook">facebook</i></p>
  </div>
  <div className="col sm-3 ">
  <h4 className="text-danger">Contact us </h4>
      <p><i className="fa-regular fa-envelope " style={{"backgroundColor":"grey"}} ></i> <a href="mailto:srishmaalladi14@gamil.com.com" className="text-decoration-none">Send Email</a></p>
      <p><i className="fa-solid fa-phone"></i>   6305836536</p>
  </div>
  </div>

</>
  )
}