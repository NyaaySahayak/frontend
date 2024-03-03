import React, { useState } from 'react';
import equal from '../images/equal.jpg';
import privacy from '../images/privacy.jpg';
import educ from '../images/educ.jpg';
import freedo from '../images/freedo.jpg';
import cons from '../images/cons.jpg';
import work from '../images/work.jpeg';
import info from '../images/info.jpeg';
import cultur from '../images/cultur.jpeg';
import combo from '../images/combo.png';


const Rights = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  const showDiv = (divNumber) => {
    setActiveDiv(divNumber);
  };
  
  

  return (
    <>
<div  style={{"backgroundColor":"#F9E8d9","display":"flex","flexDirection":"row","fontSize":"x-large" }}>
  <div className='row m-3'>
  <div className='col-md-3 sm-12 container-fluid p-2 m-2 border border-dark '>
      <button className='btn btn-light btn-block mb-2' onClick={() => showDiv(1)} style={{"height":"10%","margin":"2%","border":"2px solid transparent","backgroundColor":"transparent",color:'black'}}>Right to equality</button>
      <button  className='btn btn-light btn-block mb-2' onClick={() => showDiv(2)} style={{"height":"10%","margin":"2%","border":"2px solid transparent","backgroundColor":"transparent",color:'black'}}>Right to freedom</button>
      <button className='btn btn-light btn-block mb-2' onClick={() => showDiv(3)} style={{"height":"10%","border":"2px solid transparent",marginRight:'1px',
      "backgroundColor":"transparent",color:'black',alignItems:'center'}}>Right to constitutional remedies</button>
      <button  className='btn btn-light btn-block mb-2' onClick={() => showDiv(4)} style={{"height":"10%","margin":"2%","border":"2px solid transparent","backgroundColor":"transparent",color:'black'}}>Right to Privacy</button>
      <button className='btn btn-light btn-block mb-2'  onClick={() => showDiv(5)} style={{"height":"10%","margin":"2%","border":"2px solid transparent","backgroundColor":"transparent",color:'black'}}>Right to Information</button>
       <button className='btn btn-light btn-block mb-2 fs-md-4 fs-sm-6'  onClick={() => showDiv(6)} style={{"height":"10%","margin":"2%","border":"2px solid transparent","backgroundColor":"transparent",color:'black'}}>Right to Education</button>
       <button className='btn btn-light btn-block mb-2' onClick={() => showDiv(7)} style={{"height":"10%","border":"2px solid transparent",alignItems:"center",backgroundColor:"transparent",color:'black',justifyContent:'center'}}>Cultural and Educational Rights</button>
       <button className='btn btn-light btn-block mb-2'  onClick={() => showDiv(8)} style={{"height":"10%","margin":"2%","border":"2px solid transparent","backgroundColor":"transparent",color:'black'}}>Right to Work</button>
    </div>
    <div className='col-md-8 sm-12 container-fluid m-3'>
     
{activeDiv===0 && <img src={combo} alt="srishma" style={{"height":"100vh",width:'100%'}}/> }
{activeDiv === 1  && <div className='conatiner-fluid md-6 sm-12 '><img src={equal} className="image-fluid" alt="srishma" style={{ maxWidth: '60%', maxHeight: '60%' }} /> <h1>Right to Equality (Articles 14 - 18)</h1> <p style={{"padding":"2%","fontFamily":"calligraphy","fontWeight":"bold"}}>"The right to equality provides for the equal treatment of everyone before the law, prevents discrimination on various grounds, treats everybody as equals in matters of public employment, and abolishes untouchability"</p>
<br/>
<p>Below we provide the associated articles of the Constitution under the right to equality.</p>

<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Article </th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">14</th>
      <td>The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India, on grounds of religion, race, caste, sex or place of birth</td>
      
    </tr>
    <tr>
      <th scope="row">15</th>
      <td>The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.</td>
      
    </tr>
    <tr>
      <th scope="row">16</th>
      <td colspan="2">There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.</td>
      
    </tr>
    <tr>
      <th scope="row">17</th>
      <td colspan="2">Abolition of untouchability</td>
      
    </tr>
    <tr>
      <th scope="row">18</th>
      <td colspan="2">Abolition of all titles except military and academic</td>
    </tr>
  </tbody>
</table>
</div>}

{activeDiv === 2 && <div className='conatiner-fluid md-6 sm-12'><img src={freedo} className="image-fluid" alt="..." style={{ maxWidth: '60%', maxHeight: '60%' }} /><h1>Right to Freedom (Articles 19 - 22)</h1>
<p>The Right To Freedom is a fundamental right guaranteed by the Indian Constitution. This right is enshrined in Article 19 of the Constitution, and it guarantees citizens of India the following freedoms: freedom of speech and expression, freedom of assembly, freedom to form associations or unions, freedom to move freely throughout the country, and freedom to reside in any part of the country. In this article, we will discuss these freedoms in more detail and explain how they are protected by the Indian Constitution.</p>
<p style={{"fontFamily":"calligraphy","fontWeight":"bold"}}>The right to freedom guarantees freedom for citizens to live a life of dignity among other things. These are given in Articles 19, 20, 21A and 22 of the Indian Constitution.</p>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Article </th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">19</th>
      <td>Protection of 6 rights concerning the freedom of: 
1.Speech and expression
2.Assembly
3.Association
4.Movement
5.Residence
6.Profession</td>
      
    </tr>
    <tr>
      <th scope="row">20</th>
      <td>Protection with respect to conviction for offences</td>
      
    </tr>
    <tr>
      <th scope="row">21</th>
      <td colspan="2">Right to life and personal liberty</td>
      
    </tr>
    <tr>
      <th scope="row">21A</th>
      <td colspan="2">Right to elementary education</td>
      
    </tr>
    <tr>
      <th scope="row">22</th>
      <td colspan="2">Protection against arrest and detention in certain cases</td>
    </tr>
  </tbody>
</table>
</div>}

{activeDiv === 3 && <div className='conatiner-fluid md-6 sm-12'><img src={cons} className="image-fluid" alt="..."  style={{ maxWidth: '60%', maxHeight: '60%' }} /><h1>Right to Constitutional Remedies</h1>
<p>Article 226  and Article 32 of the Indian Constitution provide for the right to constitutional remedies. This article is a fundamental right and guarantees equality in every aspect. Constitutional remedies are available to every citizen of India. A writ petition is a formal request made to a court for the enforcement of a constitutional right.</p>
<h1>What is a Writ Petition?</h1>
<p>A writ petition is a legal document that is filed in a court of law to request relief from an authority against the violation of fundamental rights. It is a fundamental right guaranteed by article 226 and Article 32 of the Indian Constitution which ensures equality in every aspect.

The writ petition is filed when an individual’s fundamental rights are violated by the state or any of its agencies. It is a means to ensure that the state respects and protects the rights of its citizens.</p>
<h1>What are the different types of Writs?</h1>
<p>There are five types of writs that are as follows: mandamus, habeas corpus, quo warranto, certiorari, and prohibition. Article 32 of the Indian Constitution gives power to the individual to take the matter to the Supreme Court for the proper implementation of the rights conferred by Part 3 of the Indian Constitution. It is an extraordinary remedy available to aggrieved individuals when all other avenues have failed. Let’s discuss them one by one.</p>
<br></br>
<p>Habeas Corpus: It is a Latin term which means ‘you have the body. It is issued to produce a person who has been illegally detained before the court. In the case of Rudel shah v/s State of Bihar, the court opined a new rule to protect the fundamental right of an aggrieved party. The court put the liability on the state to compensate the individual in case of illegal detention.</p>
<br></br>

<p>Mandamus: It is a Latin term which means ‘we command’. It is issued to compel a public authority to perform its statutory duty. It is also known as the prerogative writ. In the case of Sohanlal v/s Union of India, the court held that mandamus may be issued against private individuals as well if they owe a public duty.</p>
<br></br>


<p>Quo Warranto: It is a Latin term which means ‘by what authority.’ It is issued to inquire into the legality of a person holding a public office. In the case of the Jamalpur Arya Samaj v/s DR. D Ram, the court held that the power to issue quo warranto lies with the High Court but cannot be issued against the private offices.</p>
<br></br>

<p>Certiorari: It is a Latin term which means ‘to be certified’. It is issued to quash the orders of a subordinate court or a tribunal that is exceeding its jurisdiction. In the case of Rajasthan State Electricity Board v/s Mohanlal, the court held that the power of judicial review can be exercised by the apex court of the country and the High Court to keep subordinate courts within their limits.</p>
<br></br>

<p>Prohibition: It is a Latin term which means ‘to forbid’. It is issued to prevent a subordinate court or tribunal from exceeding its jurisdiction. In the case of the State of Karnataka v/s Union of India, the court held that the power to issue prohibition lies with the High Court and the Supreme Court.

Right to Constitutional Remedies is a fundamental right guaranteed by the Constitution of India. It is a safeguard against arbitrary action by the state. This right is available to all citizens, irrespective of their caste, creed, or religion.</p>
</div>}

{activeDiv === 4 && <div className='conatiner-fluid md-6 sm-12'><img src={privacy} className="image-fluid" alt="..."  style={{ maxWidth: '60%', maxHeight: '60%' }} />
<h1>Right to Privacy – Article 21</h1>
<p>Article 21 of the Indian Constitution speaks about-
  <br></br>

1.Right to life
<br></br>
2.Right to personal liberty</p>
<p>The right to privacy is recognized as a fundamental right under the Indian Constitution and is protected under both the Indian Constitution and various state constitutions. The right to privacy is broadly interpreted and can be used to protect a wide range of personal information, including information relating to personal health, financial affairs, and personal relationships. The right to privacy and data protection has emerged as a key issue in the digital era. Recent trends show that the right to privacy is being increasingly recognized as a fundamental right.
</p>
<p>The right to privacy and data protection is a fundamental right enshrined in the Indian Constitution. The right to privacy is recognized as a fundamental right in Article 21 of the Constitution. The right to privacy includes the right to be free from unwarranted intrusion into one's personal life, including the right to privacy of one's thoughts, feelings, and emotions. The right to privacy also includes the right to be free from unwarranted collection, use, and disclosure of personal information.</p>
<h1>Recent trends and challenges</h1>
<p>In the digital age, privacy is becoming for example, companies like Facebook and Google can collect vast amounts of data about individuals and use that data to target advertising. This raises concerns about the privacy of individuals, as their personal information is being used without their consent or knowledge. The right to privacy is an important right, and it needs to be fully protected to ensure that individuals can enjoy their right to privacy.</p>
<h4>The following are some measures that can be taken to control the challenges faced in digital India regarding Right to Privacy and Data Protection:</h4>
<ul>
  <li>It is important to ensure that any data collection and processing activities are carried out in a transparent and fair manner. Individuals should be able to understand why their data is being collected and how it will be used.</li>
  <li>To ensure that all data is properly protected at all stages of its life cycle, from collection to storage to transmission.</li>
  <li>To ensure that data is only collected for specific, legitimate purposes and is not used for purposes that are not related to the intended purpose.</li>
  <h4>Recent developments in privacy laws and data protection in India</h4>
  <p>The ban on Chinese apps: In 2020, the Indian government banned several Chinese mobile apps, citing concerns over national security and data privacy. The ban included popular apps such as TikTok, WeChat, and UC Browser. The ban highlighted the need for stronger data protection laws in India and the importance of protecting personal data and ensuring its secure storage and handling.</p>
  <p>The Indian government's response to the WhatsApp privacy policy update: In January 2021, WhatsApp announced a controversial update to its privacy policy, which required users to share more of their data with Facebook, WhatsApp's parent company. The update sparked concerns over user privacy and led to widespread criticism. In response, the Indian government sent a notice to WhatsApp, asking the company to withdraw the policy update and to clarify its position on user privacy. The government also asked the Competition Commission of India to investigate whether the policy update violated competition laws.
 </p>
</ul>
</div>}

{activeDiv === 5 && <div className='conatiner-fluid md-6 sm-12'><img src={info} className="image-fluid" alt="..."  style={{ maxWidth: '60%', maxHeight: '60%' }} />
        <p>RTI stands for Right to Information. Right to Information Act 2005 mandates timely response to citizen requests for government information. Right to Information empowers every citizen to seek any information from the Government, inspect any Government documents and seek certified photocopies thereof. Right to Information also empowers citizens to official inspect any Government work or to take the sample of material used in any work.</p>
        <h1>What type of information can be requested through RTI?</h1>
        <p>The citizens can seek any information from the government authorities that the government can disclose to the parliament.

Some information that can affect the sovereignty and the integrity of India is exempted from the purview of RTI.

Information relating to internal security, relations with foreign countries, intellectual property rights (IPR), cabinet discussions are exempted from RTI.</p>
<h1>Objectives of the RTI Act</h1>
<ol>
  <li>Empower citizens to question the government.</li>
  <li>The act promotes transparency and accountability in the working of the government.</li>
  <li>The act also helps in containing corruption in the government and work for the people in a better way.</li>
  <li>The act envisages building better-informed citizens who would keep necessary vigil about the functioning of the government machinery.</li>
</ol>
<h1>What is the Method of Seeking Information? </h1>
<p>A citizen who desires to obtain any information under the Act, should make an
application to the Public Information Officer of the concerned public authority
in writing in English or Hindi or in the official language of the area in which the
application is made. The application should be precise and specific. He should
make payment of application fee at the time of submitting the application as
prescribed in the Fee Rules. </p>
<h1>What is the Time Period for Supply of Information?</h1>
<p>In normal course, information to an applicant shall be supplied within 30 days
from the receipt of application by the public authority. If information sought
concerns the life or liberty of a person, it shall be supplied within 48 hours. In
case the application is sent through the Assistant Public Information Officer or
it is sent to a wrong public authority, five days shall be added to the period of
thirty days or 48 hours, as the case may be. 
</p>
        </div>}


        {activeDiv === 6 && <div className='conatiner-fluid md-6 sm-12'><img src={educ} className="image-fluid" alt="..."  style={{ maxWidth: '60%', maxHeight: '60%' }} />
        <h1>Right to Education Act (RTE) </h1>
        <p>The Act is completely titled “the Right of Children to Free and Compulsory Education Act”. It was passed by the Parliament in August 2009. When the Act came into force in 2010, India became one among 135 countries where education is a fundamental right of every child.</p>
        <ul style={{"list-style-type":"disc"}}>
  
        <li>The 86th Constitutional Amendment (2002) inserted Article 21A in the Indian Constitution which states:</li>
          
          <li>
“The State shall provide free and compulsory education to all children of 6 to 14 years in such manner as the State, may by law determine.”
</li>
<li>
As per this, the right to education was made a fundamental right and removed from the list of Directive Principles of State Policy.
</li>

<li>
The RTE is the consequential legislation envisaged under the 86th Amendm</li>

<li>
The article incorporates the word “free” in its title. What it means is that no child (other than those admitted by his/her parents in a school not supported by the government) is liable to pay any kind of fee or charges or expenses which may prevent him or her from pursuing and completing elementary education.</li>
<li>This Act makes it obligatory on the part of the government to ensure admission, attendance and completion of elementary education by all children falling in the age bracket six to fourteen years.
</li>

<li>Essentially, this Act ensures free elementary education to all children in the economically weaker sections of society.</li>
</ul>
<h1>Significance of RTE</h1>

<ul style={{"list-style-type":"disc"}}>
  <li>The Act lays down specific standards for the student-teacher ratio, which is a very important concept in providing quality education.</li>
  <li>It also talks about providing separate toilet facilities for girls and boys, having adequate standards for classroom conditions, drinking water facilities, etc.</li>
  <li>The stress on avoiding the urban-rural imbalance in teachers’ posting is important as there is a big gap in the quality and numbers regarding education in the villages compared to the urban areas in the country.</li>
  <li>The Act provides for zero tolerance against the harassment and discrimination of children. The prohibition of screening procedures for admission ensures that there would be no discrimination of children on the basis of caste, religion, gender, etc.</li>
  <li>The Act also mandates that no kid is detained until class 8. It introduced the Continuous Comprehensive Evaluation (CCE) system in 2009 to have grade-appropriate learning outcomes in schools.</li>
</ul>

        </div>}

        {activeDiv === 7 && <div className='conatiner-fluid md-6 sm-12'><img src={cultur} className="image-fluid max-image" alt="..." style={{ maxWidth: '60%', maxHeight: '60%' }} />
        <h1>Cultural & Educational Rights (Articles 29 & 30) </h1>
        <p>Fundamental Rights guarantee basic rights to the citizens of India. There are six fundamental rights enshrined in the Constitution of India, and Articles 29 and 30 deals with the cultural and educational rights of Indian citizens. </p>
        <ol>
  <li>This fundamental right intends to preserve the culture of minority groups in India.</li>
  <li>Indian society is a composite heterogeneous one and its diversity is one of its strengths.</li>
  <li>The Constitution guarantees these rights to minorities so that the diversity of this country is preserved and provides avenues for all groups including marginalized ones to protect, preserve, and propagate their culture.</li>
  <h1>Article 29 – Protection of Interests of Minorities</h1>
  <p>Article 29(1): This provides any section of the citizens residing in India having a distinct culture, language, or script, the right to conserve their culture, language and script. </p>
  <p>Article 29(2): The State shall not deny admission into educational institutes maintained by it or those that receive aid from it to any person based only on race, religion, caste, language, or any of them.</p>
  <h1>Article 30 – Right of Minorities to Establish and Administer Educational Institutions</h1>
  <p>Article 30(1): All religious and linguistic minorities have the right to establish and administer educational institutions of their choice. (Read about Minority Protection in India in the linked article.)</p>
  <p>Article 30(2): The State shall not, when granting aid to educational institutions, discriminate against any educational institution on the ground that it is under the management of a minority, whether based on religion or language.</p>
</ol>
       </div>}


        {activeDiv === 8 && <div className='conatiner-fluid md-6 sm-12'><img src={work} className="image-fluid" alt="..."/><h1>Right-to-Work Law</h1>
        <h1>Right to Work</h1>
        <p>The right to work is the concept that people have a human right to work, or engage in productive employment, and may not be prevented from doing so.</p>
        <h3>Broader understanding of the right to work:</h3>
        <ul>
          <li>Often ‘right to work’ is interpreted as the right to employment guarantee. This, however, is a narrow interpretation of the right to work.</li>
          <li>Ensuring the right to work in the broader sense entails creating employment opportunities which can ensure gainful employment and a dignified living for the worker. This dignity is supposed to come from work conditions, such as being paid a fair wage and having regulated work hours which constitute the equally important right ‘in work’ principle. Apart from mere employment guarantee, such work should be fulfilling, work should be creative.</li>
          <h4>Status in India:</h4>
          <h3>MNREGA</h3>
          <li>The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), aims to guarantee the ‘right to work’ in a limited fashion. It aims to enhance livelihood security in rural areas by providing at least 100 days of wage employment in a financial year to every household whose adult members volunteer to do unskilled manual work. Notably, under MGNREGA, a person can hold the state accountable for not fulfilling the right by demanding an unemployment allowance.</li>
          <li>However, it has to be noted that MGNREGA only ensures the right to work as a statutory right, which can be amended or withdrawn as per the government’s whims and fancies.</li>
        </ul>
        </div>}
</div>
</div>
</div>
      
    </>
  );
};

export default Rights;