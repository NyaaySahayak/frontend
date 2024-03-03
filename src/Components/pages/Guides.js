import React from "react";
import { Link } from "react-router-dom";
export default function Guides() {
    return (
        <>
            <div style={{ "display": "flex" }}>
                <div className="row">
                {/* <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ height: "95vh",position:'absolute',top:2,left:15 }}>
                <button style={{position:'absolute'}}>FIR</button>
                <button style={{position:'absolute'}}>Aadhar</button>
                <button style={{position:'absolute'}}>passport</button>
                <button style={{position:'absolute'}}>Pan Card</button>
                <button style={{position:'absolute'}}>Voter ID</button>
                <button style={{position:'absolute'}}>License</button> 
</div> */}
                <div className="col sm-12 col-md-4">
                    <div className='list-group'>
                        <li className="list-group-item text-center">Table of contents</li>
                        <div className="list-group" id="list-tab" role="tablist">
                            <Link className="list-group-item list-group-item-action text-center" id="list-aadhar-list" data-bs-toggle="list" to="#list-aadhar" role="tab" aria-controls="list-aadhar">Aadhar Card</Link>
                            <Link className="list-group-item list-group-item-action text-center" id="list-pan-list" data-bs-toggle="list" to="#list-pan" role="tab" aria-controls="list-pan">Pan Card</Link>
                            <Link className="list-group-item list-group-item-action text-center" id="list-passport-list" data-bs-toggle="list" to="#list-passport" role="tab" aria-controls="list-passport">Passport</Link>
                            <Link className="list-group-item list-group-item-action text-center" id="list-license-list" data-bs-toggle="list" to="#list-license" role="tab" aria-controls="list-license">License</Link>
                        </div>
                    </div>
                </div>

                <div className="col sm-12 col-md-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade text-center" id="list-aadhar" role="tabpanel" aria-labelledby="list-aadhar-list">
                            <div className="card">
                                {/* <img src="aadhar.png" className="card-img-top mx-auto d-block w-25" alt="..."/> */}
                                <div className="card-body" role='tabpanel' aria-labelledby='list-aadhar-list'>
                                    <h5 className="card-title-center">How to apply for Aadhar card online?</h5>
                                    <p className="card-text-center">The Online Application Process<br></br>
                                        Follow these simple steps:<br></br>

                                        <strong>step 1: Visit the Official UIDAI Website</strong><br></br>
                                        Head over to the official UIDAI website by typing "https://uidai.gov.in/" into your web browser. This website is user-friendly and provides all the necessary information related to Aadhaar.<br></br>

                                        <strong>step 2: Locate the "Apply for Aadhaar" Option</strong><br></br>
                                        On the homepage, look for the "Aadhaar Enrolment" section. Click on "Apply for Aadhaar" or "Apply for a new Aadhaar card online," whichever is available.<br></br>

                                        <strong>Step 3: Fill in the Required Details</strong><br></br>
                                        You'll be redirected to a new page where you need to fill in your demographic and biometric information. Ensure that you provide accurate details, as any discrepancies might lead to delays in processing your application.<br></br>

                                        <strong>Step 4: Choose an Aadhaar Enrolment Center</strong><br></br>
                                        After filling in the necessary details, you must select an Aadhaar Enrolment Center. The website allows you to search for nearby centers, making choosing the nearest one convenient.<br></br>

                                        <strong>step 5: Book an Appointment</strong><br></br>
                                        To avoid long waiting times, booking an appointment at the selected Aadhaar Enrolment Center is advisable. You can do this online through the UIDAI portal.<br></br>

                                        <strong>step 6: Visit the Enrolment Center</strong><br></br>
                                        On the scheduled date and time, visit the Enrolment Center with all your necessary documents. Here, an official will verify your documents and capture your biometric data, including fingerprints and iris scans.<br></br>

                                        <strong>step 7: Collect Your Acknowledgement Slip</strong><br></br>
                                        Once the process is complete, you will receive an acknowledgment slip. This slip contains an enrolment number that you can use to check the status of your Aadhaar card application</p>
                                    {/* <p>
    <label for="aadharInput" class="form-label"></label>
        <input
            type="password"
            class="form-control"
            name="password"
            id="aadharInput"
            placeholder="Enter your aadhar number"
        />
    
    <button
        type="submit"
        class="btn btn-primary"
    >
        Save
    </button></p> */}
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade text-center" id="list-pan" role="tabpanel" aria-labelledby="list-pan-list">
                            <div className="card" role='tabpanel' aria-labelledby='list-pan-list'>
                                {/* <img src="pan.png" className="card-img-top mx-auto d-block w-25" alt="..."/> */}
                                <h5 className="card-title-center"> </h5>
                                <p className="card-text-center"><strong>How to apply for PAN Card Online via NSDL Website</strong><br></br>
                                    Step 1: Select the PAN card application - 'New PAN Indian Citizen (Form 49A)' available on the NSDL website. <br></br>

                                    Step 2: Fill in all the details in the form. Read the detailed instructions before filling the details on the PAN card application form. Click here to view the PAN card application instructions.<br></br>

                                    Step 3: Pay the required fees. The PAN card application fees varies on the option you choose for dispatch of your PAN card. Payment can be made through credit/debit card, demand draft or net-banking. Upon successful payment, acknowledgment will be displayed through which you can check your application status. It will also be sent to your email ID. <br></br>

                                    Step 4: Send the required documents through courier/post to the NSDL office, Pune. Only after the receipt of the documents, PAN application would be processed by NSDL. Once the NSDL verifies the application and documents, it will issue the PAN card in 15 days.<br></br>
                                    <br></br>
                                    <strong>
                                        How to Apply for PAN card Offline?</strong><br></br><strong>
                                        Step 1: </strong>Download the ‘Form 49A’ from the NSDL e-Gov website.<br></br> <strong>

                                        Step 2:</strong> Fill in the details in the application.<br></br><strong>

                                        Step 3:</strong> Attach your signature and photograph to the application. <br></br><strong>

                                        Step 4:</strong>Submit the form and the required documents to the nearest PAN centre.<br></br><strong>

                                        Step 5:</strong> Pay the fees for PAN card application.<br></br> <strong>

                                        Step 6:</strong> You will get the acknowledgement number from which you can track the status of your PAN card application status.<br></br>

                                    Once the documents are verified, a PAN card will be issued within 15 days.<br></br>
                                    <br></br><strong>How To Make Corrections/Updates In PAN?</strong><br></br>
                                    If you want to make changes in the existing PAN such as change in name, date of birth etc, you can apply for it online. The procedure is almost the same as you apply for new PAN except in case of corrections in PAN, you also need to submit the documents to support the change required in PAN.<br></br>

                                    Here are the steps :<br></br><strong>

                                        Step 1:</strong> Fill the online application form for making changes/corrections in PAN on the NSDL website. <br></br><strong>

                                        Step 2:</strong> Pay the application fees. The payment of application fee can be made through credit/debit card, demand draft or net-banking. On successful payment, acknowledgement will be displayed. Save and print this acknowledgement number.<br></br><strong>

                                        Step 3:</strong> Once the application and payment are accepted, the applicant is required to send the supporting documents through courier/post to NSDL. Only after the receipt of the documents, PAN application would be processed by NSDL. Documents sent should support the changes applied for in PAN. Example, request for the change in applicant’s or father’s name will have to be supported with a document that will contain proof of change of name from old to new. The documents that shall be accepted as proof in this case are:<br></br>

                                    For married ladies Change of name on account of marriage – marriage certificate, marriage invitation card, publication of ‘name-change’ in the gazette, a certificate from a gazetted officer stating name change, copy of passport showing husband’s name.<br></br>
                                    For individual applicants other than married ladies Publication of ‘name-change’ in the gazette, a certificate from a gazetted officer stating name change.<br></br>
                                    For companies ROC’s certificate for name change is required. ROC stands for Registrar of Companies, and they handle administration and regulation of Companies Act, 1956.<br></br>
                                    For partnership firms A copy of revised Partnership Deed<br></br>
                                    For other categories which are registered organizations (AOP/Trust/BOI/AJP etc.) The revised registration/deed/agreement.</p>
                                {/*<p>
    <label for="panInput" class="form-label"></label>
        <input
            type="password"
            class="form-control"
            name="password"
            id="panInput"
            placeholder="Enter your PAN Card number"
        />
    
    <button
        type="submit"
        class="btn btn-primary"
    >
        Save
    </button>
    </p> */}
                            </div>
                        </div>

                        <div className="tab-pane fade text-center" id="list-passport" role="tabpanel" aria-labelledby="list-passport-list">
                            <div className="card" role='tabpanel' aria-labelledby='list-passport-list'>
                                <h5 className="card-title-center"> </h5>
                                <p className="card-text-center"><strong>
                                    How to apply for a passport online in India</strong><br></br><br></br>
                                    Here are different steps to apply online for a passport in India.<br></br><strong>

                                        1. Log in to the Passport Seva portal</strong><br></br>
                                    First of all, you need to log in to your Passport Seva website account.<br></br><strong>

                                        Step 1:</strong> Visit the Passport Seva platform online and click on “New User Registration” or “Existing User Login”, based on your registration status.<br></br><strong>

                                        Step 2: </strong>As a new user, you can follow the registration process. (Existing users can move to the next step.)<br></br><strong>

                                        Step 3:</strong> Use your credentials (password and login ID) and complete captcha verification to log in. <br></br><strong>

                                        2. Select a type of passport application</strong><br></br>
                                    Once you are logged in, select among the following options for the passport application process.<br></br>

                                    Fresh passport or Reissue of passport<br></br>

                                    Official passport or diplomatic passport<br></br><strong>

                                        3. Fill out your online application</strong> <br></br>
                                    Here are the passport application steps you need to follow online.<br></br><strong>

                                        Step 1: </strong>Click on the type of passport application you want to apply for.<br></br><strong>

                                        Step 2:</strong> Fill in the requested details accurately.<br></br><strong>

                                        Step 3:</strong> Check all details carefully and hit the “Submit” button.<br></br>

                                    4. Pay the fees and schedule an appointment<br></br><br></br><strong>
                                        After submitting your online application, the following steps will help you pay the necessary fees and schedule an appointment.</strong> <br></br><strong>

                                        Step 1:</strong> Head back to the home page to select the option “View Saved/Submitted Applications”.<br></br><strong>

                                        Step 2:</strong> Now, choose the option “Pay and Schedule Appointment” among all choices visible on your screen.<br></br><strong>

                                        Step 3:</strong> Select the PSK or Passport Seva Kendra and schedule an appointment.<br></br><strong>

                                        Step 4:</strong> Pay the requested fees for the process through the online payment mode of your choice.<br></br><strong>

                                        Step 5:</strong> Take a printout of the application receipt or refer to the SMS sent to your mobile phone containing your Application Reference Number (ARN).<br></br>

                                    Finally, you can pay a visit to the selected PSK on the date and time of your appointment, carrying all the original documents for verification.<br></br><br></br><strong>

                                        Documents required for online passport application</strong><br></br>
                                    An applicant needs to submit the below-mentioned documents for a new passport application online or offline.<br></br>

                                    Proof of address (Such as Aadhaar card, utility bill, rent agreement, etc.)<br></br>

                                    Proof of age (Such as Aadhaar card, Birth Certificate, PAN card, Voter ID etc.)<br></br>

                                    Non-ECR (Emigration Check Not Required) documentary proof (if applicable)
                                </p>
                            </div>
                        </div>
                        <div className="tab-pane fade text-center" id="list-license" role="tabpanel" aria-labelledby="list-license-list">
                        <div className="card" role='tabpanel' aria-labelledby='list-license-list'>
                            <h5 className="card-title-center"> </h5>
                            <p className="card-text-center"><strong>Steps to follow for New Driving License :-</strong>
                                1. Visit https://sarathi.parivahan.gov.in/<br></br>
                                2. Select concerned statev<br></br>
                                3. Click on "New Driving Licence" from "Driving Licence" menu<br></br>
                                4. Enter your "Learning License Number" & "Date of Birth" to proceed further<br></br>
                                5. Fill up application Form<br></br>
                                6.Click on Next Button to proceed<br></br>
                                7. Visit RTO on scheduled date with original documents & Fee Slip

                                Log in to post comments<br></br><br></br><strong>
                                    A duplicate driving licence will be issued in the following circumstances</strong><br></br>
                                1.When the licence is lost or destroyed<br></br>
                                2.When the licence is defaced or torn or completely written up<br></br>
                                3.When the photograph affixed to the licence requires replacement<br></br><br></br><strong>
                                    Age limit to obtain Driving Licence</strong><br></br>
                                1.An applicant who has completed sixteen years of age is eligible to apply for a driving licence to drive a motor cycle without gear subject to the condition that the parent or guardian should furnish a declaration in the manner prescribed.<br></br>
                                2.The applicant who has completed the age of eighteen years of age is eligible to apply for a driving licence to drive a motor vehicle other than a transport vehicle.<br></br>
                                3.An applicant who has completed twenty years of age will be eligible for applying for a licence to drive a transport vehicle.<br></br>
                                <strong>Documents Required</strong><br></br>
                                Valid Address Proof (Aadhaar Card, Passport, Election Voter ID Card, Telephone Bill, Bank Passbook, Gas connection bill etc.,)<br></br>
                                Valid Date of Birth Proof (Educational Certificate showing date of birth, Passport, Birth Certificate Issued by Authorised Authority like GHMC, Municipality etc.,)<br></br>
                                Application in Form No.2.<br></br>
                                Form No. 1(Self declaration as to the physical fitness for Non- Transport vehicles only).<br></br>
                                Form No. 1 A (Medical Certificate-for Transport category Vehicles / for the applicant above the age of 40 Years).<br></br>
                                Fees as prescribed Under Rule 32 of CMV Rules ,1989 along with user charges.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};