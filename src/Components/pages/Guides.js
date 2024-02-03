import React, { useState } from "react";

import './stepscard.css';

export default function Guides() {
    const [selectedContent, setSelectedContent] = useState("Passport");


    const handleButtonClick = (content) => {
        setSelectedContent(content);

    };

    return (
        <div style={{ backgroundColor: "white", backgroundSize: 'cover', height: '100%' }}>


            {/* Add other styling for your outer container as needed */}
            <>
                <div className="button-container" style={{ textAlign: 'center' }}>
                    <button style={{ margin: '60px', backgroundColor: "Green" }} onClick={() => handleButtonClick("Passport")}>
                        Passport
                    </button>
                    <button style={{ margin: '60px', backgroundColor: "green" }} onClick={() => handleButtonClick("Aadhar card")}>
                        Aadhar card
                    </button>
                    <button style={{ margin: '60px', backgroundColor: "green" }} onClick={() => handleButtonClick("License")}>
                        License
                    </button>
                    <button style={{ margin: '60px', backgroundColor: "green" }} onClick={() => handleButtonClick("Voter ID")}>
                        Voter ID
                    </button>
                    <button style={{ margin: '60px', backgroundColor: "green" }} onClick={() => handleButtonClick("PAN Card")}>
                        PAN Card
                    </button>
                </div>








                {selectedContent && (
                    <div>




                        {selectedContent === "Passport" &&
                            (
                                <div>

                                    <div className="steps-card"  >

                                        <div className="card-header" style={{ height: '50px' }}>
                                            <h2 style={{ fontStyle: 'oblique' }}><strong> Passport Application Process</strong></h2>
                                        </div>

                                        {/* Step 1 */}
                                        <div className="step" style={{ height: '200px', fontFamily: "unset", backgroundColor: "light blue" }}>
                                            <h5><strong> 1. Log in to the Passport Seva portal</strong></h5>
                                            <p><strong>Step 1:</strong>Visit the Passport Seva platform online and click on “New User Registration” or “Existing User Login”, based on your registration status.</p>
                                            <p><strong>Step 2:</strong>As a new user, you can follow the registration process. (Existing users can move to the next step.)</p>
                                            <p><strong>Step 3:</strong>Use your credentials (password and login ID) and complete captcha verification to log in.</p>
                                        </div>

                                        {/* Step 2 */}
                                        <div className="step" style={{ height: '120px' }}>
                                            <h5><strong>2. Select a type of passport application</strong></h5>
                                            <p> Fresh passport or Reissue of passport</p>
                                            <p>  Official passport or diplomatic passport</p>
                                        </div>

                                        {/* Step 3 */}
                                        <div className="step" style={{ height: '170px' }}>
                                            <h5> <strong>3. Fill out your online application</strong></h5>
                                            <p><strong>Step 1:</strong>Click on the type of passport application you want to apply for.</p>
                                            <p><strong>Step 2:</strong> Fill in the requested details accurately.</p>
                                            <p><strong>Step 3:</strong>Check all details carefully and hit the “Submit” button.</p>
                                        </div>
                                        <div className="step" style={{ height: '270px' }}>
                                            <h5><strong>4. Pay the fees and schedule an appointment</strong></h5>
                                            <p><strong>Step 1:</strong> Head back to the home page to select the option “View Saved/Submitted Applications”.</p>
                                            <p><strong>Step 2:</strong> Now, choose the option “Pay and Schedule Appointment” among all choices visible on your screen</p>
                                            <p><strong>Step 3:</strong>Select the PSK or Passport Seva Kendra and schedule an appointment</p>
                                            <p><strong>Step 4:</strong>Pay the requested fees for the process through the online payment mode of your choice</p>
                                            <p><strong>Step 5:</strong> Take a printout of the application receipt or refer to the SMS sent to your mobile phone containing your Application Reference Number (ARN)</p>
                                        </div>
                                        <div className="step" style={{ height: '80px' }}>
                                            <p>Finally, you can pay a visit to the selected PSK on the date and time of your appointment, carrying all the original documents for verification</p>
                                        </div>
                                    </div>
                                    <div className="image-card" style={{ position: 'absolute', left: '110px', top: '230px' }}>
                                        <img src="https://wallpapers.com/images/hd/passport-pictures-huctncquz2fzv1ht.jpg" alt="Your Image" style={{ width: '300px', height: '300px', borderRadius: '6px' }} />
                                        <br></br>
                                        <br></br>
                                        <h4><strong>Documents Required</strong></h4>
                                        <br></br>

                                        <div className="grid text-center">
                                            <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Photo ID Proof</strong></div>
                                            <br></br>
                                            <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Address Proof</strong></div>
                                            <br></br>
                                            <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Birth Certificate</strong></div>
                                            <br></br>
                                            <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Passport Size Photos</strong></div>
                                        </div>
                                    </div>

                                </div>
                            )}


                        {selectedContent === "Aadhar card" && (
                            <div>
                                <div className="steps-card">

                                    <div className="card-header" style={{ height: '50px' }}>
                                        <h2><strong>How to apply for Aadhar card ?</strong></h2>
                                    </div>

                                    {/* Step 1 */}
                                    <div className="step" style={{ height: '130px' }}>
                                        <h5><strong>step 1: Visit the Official UIDAI Website</strong></h5>
                                        <p> Head over to the official UIDAI website by typing "https://uidai.gov.in/" into your web browser. This website is user-friendly and provides all the necessary information related to Aadhaar.</p>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="step" style={{ height: '125px' }}>
                                        <h5><strong>step 2: Locate the "Apply for Aadhaar" Option</strong></h5>
                                        <p> On the homepage, look for the "Aadhaar Enrolment" section. Click on "Apply for Aadhaar" or "Apply for a new Aadhaar card online," whichever is available.</p>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="step" style={{ height: '130px' }}>
                                        <h5><strong>Step 3: Fill in the Required Details</strong></h5>
                                        <p>   You'll be redirected to a new page where you need to fill in your demographic and biometric information. Ensure that you provide accurate details, as any discrepancies might lead to delays in processing your application.</p>
                                    </div>
                                    <div className="step" style={{ height: '130px' }}>
                                        <h5><strong>Step 4: Choose an Aadhaar Enrolment Center</strong></h5>
                                        <p>After filling in the necessary details, you must select an Aadhaar Enrolment Center. The website allows you to search for nearby centers, making choosing the nearest one convenient.</p>
                                    </div>
                                    <div className="step" style={{ height: '120px' }}>
                                        <h5><strong>step 5: Book an Appointment</strong></h5>
                                        <p>   To avoid long waiting times, booking an appointment at the selected Aadhaar Enrolment Center is advisable. You can do this online through the UIDAI portal.</p>
                                    </div>
                                    <div className="step" style={{ height: '130px' }}>
                                        <h5><strong>step 6: Visit the Enrolment Center</strong></h5>
                                        <p> On the scheduled date and time, visit the Enrolment Center with all your necessary documents. Here, an official will verify your documents and capture your biometric data, including fingerprints and iris scans.</p>
                                    </div>
                                    <div className="step" style={{ height: '130px' }}>
                                        <h5><strong>step 7: Collect Your Acknowledgement Slip</strong></h5>
                                        <p> Once the process is complete, you will receive an acknowledgment slip. This slip contains an enrolment number that you can use to check the status of your Aadhaar card application</p>
                                    </div>
                                </div>
                                <div className="image-card" style={{ position: 'absolute', left: '110px', top: '230px' }}>
                                    <img src="https://aadhaarcard.co.in/wp-content/uploads/2023/04/aadhaar-card.webp" alt="Your Image" style={{ width: '300px', height: '300px', borderRadius: '6px' }} />
                                    <br></br>
                                    <br></br>
                                    <h4><strong>Documents Required</strong></h4>
                                    <br></br>

                                    <div className="grid text-center">
                                        <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Identity Proof</strong></div>
                                        <br></br>
                                        <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Address Proof</strong></div>
                                        <br></br>
                                        <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Birth Certificate</strong></div>

                                    </div>
                                </div>
                            </div>

                        )}

                    </div>




                )}
                {selectedContent === "License" && (
                    <div>
                        <div className="steps-card" style={{ width: "1200px" }}>

                            <div className="card-header" style={{ height: '50px' }}>
                                <h3><strong>Steps to follow for New Driving License</strong></h3>
                            </div>

                            {/* Step 1 */}
                            <div className="step" style={{ height: '65px' }}>

                                <p><strong> Step 1:</strong> Visit https://sarathi.parivahan.gov.in</p>
                            </div>

                            {/* Step 2 */}
                            <div className="step" style={{ height: '65px' }}>

                                <p> <strong>Step 2:</strong> Select concerned state</p>
                            </div>

                            {/* Step 3 */}
                            <div className="step" style={{ height: '70px' }}>

                                <p><strong>Step 3:</strong>Click on "New Driving Licence" from "Driving Licence" menu</p>
                            </div>
                            <div className="step" style={{ height: '70px' }}>

                                <p><strong>Step 4:</strong> Enter your "Learning License Number" & "Date of Birth" to proceed further</p>
                            </div>
                            <div className="step" style={{ height: '70px' }}>

                                <p><strong>Step 5:</strong> Fill up application Form</p>
                            </div>
                            <div className="step" style={{ height: '70px' }}>

                                <p><strong>Step 6:</strong>Click on Next Button to proceed</p>
                            </div>
                            <div className="step" style={{ height: '70px' }}>

                                <p><strong>Step 7:</strong> Visit RTO on scheduled date with original documents & Fee Slip</p>
                            </div>
                        </div>
                        <div className="image-card" style={{ position: 'absolute', left: '110px', top: '220px' }}>
                            <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/telangana-driving-licence.jpg" alt="Your Image" style={{ width: '300px', height: '300px', borderRadius: '6px' }} />
                            <br></br>
                            <br></br>
                            <h4><strong>Documents Required</strong></h4>
                            <br></br>

                            <div className="grid text-center">
                                <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Age Proof</strong></div>
                                <br></br>
                                <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Address Proof</strong></div>


                            </div>
                        </div>

                    </div>
                )}
                {selectedContent === "Voter ID" && (
                    <div>
                        <div className="steps-card">

                            <div className="card-header" style={{ height: '50px' }}>
                                <h3><strong>How to Apply for Voter ID Card ?</strong></h3>
                            </div>

                            {/* Step 1 */}
                            <div className="step" style={{ height: '80px' }}>

                                <p><strong> Step 1:</strong>Go to website of the Chief Electoral Officer Telangan and click on the 'E-registration' tab on the top of the homepage</p>
                            </div>

                            {/* Step 2 */}
                            <div className="step" style={{ height: '75px' }}>

                                <p> <strong>Step 2:</strong>Select the 'Assembly Constituency' tab from the drop-down menu and click on 'NVSP' from the options provided.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="step" style={{ height: '65px' }}>

                                <p><strong>Step 3:</strong>You will be redirected tona new page .Slect the 'Form 6 for New Uset's from the option.</p>
                            </div>
                            <div className="step" style={{ height: '75px' }}>

                                <p><strong>Step 4:</strong>Fill in the online form with details such as name,address,date of birth,current residence and the declaration.</p>
                            </div>
                            <div className="step" style={{ height: '65px' }}>

                                <p><strong>Step 5:</strong>Upload the supporting documents as mentioned in the form and submit them.</p>
                            </div>
                            <div className="step" style={{ height: '75px' }}>

                                <p><strong>Step 6:</strong>On submission, an application reference number will be generated that serves as a receipt as well as a tracking number.</p>
                            </div>
                            <div className="step" style={{ height: '80px' }}>

                                <p><strong>Step 7:</strong>Once the application has been processed,a Booth Level Officer(BLO) will visit to verify the details as mentioned in the form and documents.</p>
                            </div>
                            <div className="step" style={{ height: '75px' }}>

                                <p><strong>Step 8:</strong>On successful verification,the voter ID card will be sent by post to the address as mentioned on the application form.</p>
                            </div>
                        </div>
                        <div className="image-card" style={{ position: 'absolute', left: '110px', top: '220px' }}>
                            <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/326236311/DG/UC/NY/147613454/613b4fe5118d68e33daead1f-5f9ce9d6b395d08d26991e6e-voter-id-2x-min.jpg" alt="Your Image" style={{ width: '300px', height: '300px', borderRadius: '6px' }} />
                            <br></br>
                            <br></br>
                            <h4><strong>Documents Required</strong></h4>
                            <br></br>

                            <div className="grid text-center">
                                <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Age Proof</strong></div>
                                <br></br>
                                <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Address Proof</strong></div>

                                <br></br>
                                <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Identity Proof</strong></div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedContent === "PAN Card" && (
                    <div>
                        <div className="steps-card" style={{ width: "1200px" }}>

                            <div className="card-header" style={{ height: '50px' }}>
                                <h3><strong> PAN Card Application Process</strong></h3>
                            </div>

                            {/* Step 1 */}
                            <div className="step" style={{ height: '55px' }}>

                                <p><strong> Step 1:</strong> Visit the website of NSDL or UTIITSL for online application for PAN card</p>
                            </div>

                            {/* Step 2 */}
                            <div className="step" style={{ height: '55px' }}>

                                <p> <strong>Step 2:</strong>Select the option ‘New PAN’
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="step" style={{ height: '70px' }}>

                                <p><strong>Step 3:</strong>Choose the PAN card form 49A which should be selected for individuals whether they are Indian citizens, NRE/NRI or OCI individuals</p>
                            </div>
                            <div className="step" style={{ height: '65px' }}>

                                <p><strong>Step 4:</strong>This form should be filled with the individual’s details </p>
                            </div>
                            <div className="step" style={{ height: '70px' }}>

                                <p><strong>Step 5:</strong>The applicant would also be required to pay the processing fee online or through a demand draft after submitting the form to initiate the processing of the form</p>
                            </div>
                            <div className="step" style={{ height: '70px' }}>

                                <p><strong>Step 6:</strong>After paying the fees and submitting the PAN Form 49A, an acknowledgement slip is generated containing the 15-digit acknowledgement number</p>
                            </div>
                            <div className="step" style={{ height: '85px' }}>

                                <p><strong>Step 7:</strong>You can e-Sign the application using Aadhaar OTP authentication or send the application with required documents to the NSDL PAN office or UTIITSL office by courier within 15 days of online submission of Form 49A
                                </p>
                            </div>
                            <div className="step" style={{ height: '105px' }}>

                                <p><strong>Step 8:</strong>After the acknowledgement form is couriered to the concerned office, PAN no. verification is done and the card is generated after the NSDL/UTIITSL PAN verification. The physical PAN card is sent to the customer’s address as mentioned in the form within a period of 15 days.
                                </p>
                            </div>
                        </div>
                        <div className="image-card" style={{ position: 'absolute', left: '110px', top: '220px' }}>
                            <img src="https://mybillbook.in/blog/wp-content/uploads/2022/07/pan-card.png" alt="Your Image" style={{ width: '300px', height: '300px', borderRadius: '6px' }} />
                            <br></br>
                            <br></br>

                            <h4><strong>Documents Required</strong></h4>
                            <br></br>

                            <div className="grid text-center">
                                <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Identity Proof</strong></div>
                                <br></br>

                                <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Address Proof</strong></div>
                                <br></br>

                                <div className="g-col-6" style={{ borderRadius: '5px' }}><strong>Birth Certificate</strong></div>
                                <br></br>



                            </div>
                        </div>

                    </div>
                )}




            </>
        </div>
    );
}