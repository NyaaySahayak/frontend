import React from 'react'
// import { Link } from 'react-router-dom'
//import './Aware.css';
export default function Laws() {
    return (
        <div>
            {/* <div style={{ backgroundImage: url(${require("../images/bg-images/45304.png")}), height: "91vh"}}> */}

            <h2 className='text-center' style={{ 'padding': "20px", 'fontWeight': "bold" }} >Indian Laws</h2>

            <div className='row'>
                {/* <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ height: "95vh" }}>  */}
                <div className="d-grid gap-2 col-6 mx-auto" style={{ 'width': 1000 }}>
                    <ul className="list-group">
                        <li className="list-group-item text-center">Types of Laws </li>
                        <div className="accordion" id="accordionExample">



                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                        <strong>Constitutional Law</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">


                                        Constitutional law in India is the bedrock of the nation's legal framework, providing a comprehensive structure for governance since its adoption on January 26, 1950.<br></br>

                                        Enshrined in the Constitution are the Fundamental Rights, which safeguard individual liberties, the Directive Principles of State Policy, guiding principles for governance, and the Fundamental Duties, reinforcing civic responsibilities.<br></br>

                                        The Constitution establishes a federal structure with a clear demarcation of powers between the central government and the states.<br></br><br></br>

                                        It creates a parliamentary system with an elected President as the ceremonial head of state and a Prime Minister as the head of government.<br></br><br></br>

                                        The judiciary, embodied by the Supreme Court, acts as the ultimate interpreter of the Constitution, ensuring its supremacy and protecting citizens' rights.<br></br><br></br>

                                        Constitutional law plays a pivotal role in shaping legal discourse, influencing statutes, and safeguarding the core tenets of democracy.<br></br><br></br>

                                        The judiciary's role in upholding constitutional principles through landmark judgments reinforces the document's enduring significance in shaping the nation's legal and social landscape. <br></br><br></br>

                                        As India evolves, the Constitution remains a dynamic foundation, adapting to contemporary challenges while upholding the ideals envisioned by its framers.<br></br><br></br>
                                        {/* <Link type="button" className="btn btn-link" to="/Link">Link displayed here</Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>Civil Law</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        1.Civil law, at its core, pertains to the body of legal principles that govern private disputes between    individuals or entities. It encompasses a spectrum of areas crucial to non-criminal legal matters.<br></br><br></br>
                                        2.One foundational aspect is contract law, delineating the formation, execution, and enforcement of agreements through statutes like the Indian Contract Act, 1872. <br></br><br></br>Torts, another vital component, address civil wrongs resulting in harm or loss to individuals, providing a framework for seeking compensation. Property law regulates the ownership, transfer, and use of property, with the Transfer of Property Act, 1882, facilitating lawful property transactions.<br></br><br></br> Family law governs matters such as marriage, divorce, and inheritance, shaping the legal framework for familial relationships. <br></br><br></br> Consumer protection statutes, like the Consumer Protection Act, 2019, offer recourse for issues such as product defects or deficient services through civil litigation. Civil procedure laws, notably the Civil Procedure Code (CPC), outline the rules governing the conduct of civil cases, from initiation to resolution.<br></br><br></br>In essence, civil law comprises a dynamic and comprehensive framework that facilitates the resolution of private disputes, relying on judicial processes and legal principles tailored to the intricacies of non-criminal matters.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>Criminal Law</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Criminal law, also known as penal law, encompasses a body of rules and regulations that define and govern conduct that is considered harmful to society. <br></br> <br></br>Its primary purpose is to maintain order, protect public safety, and deter criminal behavior through the threat of punishment. <br></br> <br></br>Criminal offenses are categorized into two main types: felonies and misdemeanors.<br></br> <br></br>
                                        Key principles in criminal law include the presumption of innocence, meaning a person is considered innocent until proven guilty beyond a reasonable doubt. <br></br> <br></br>The accused also has the right to legal representation and a fair trial. The concept of mens rea, or guilty mind, is fundamental, requiring that a person must have had criminal intent or knowledge to be held responsible for a crime.<br></br> <br></br>

                                        Criminal law evolves over time, reflecting societal values and changes in understanding. It aims to strike a balance between punishment, rehabilitation, and deterrence to foster a just and orderly society.<br></br> <br></br> The complexities of criminal law underscore the importance of legal professionals and a fair and transparent judicial system.



                                    </div>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong>Family Law</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Family law is a legal field that deals with issues related to family relationships, marriage, and children.<br></br>  <br></br>It encompasses a broad range of matters, aiming to provide legal solutions to the challenges that individuals and families face within the context of their personal relationships.<br></br> <br></br>

                                        One primary focus of family law is marriage and the dissolution of marriage, commonly known as divorce. Family lawyers handle the legal aspects of divorce proceedings, including the division of property, spousal support, and child custody arrangements. The goal is to ensure a fair and equitable resolution that considers the well-being of all parties involved.<br></br> <br></br>

                                        Child custody and visitation rights are critical aspects of family law. Courts strive to determine arrangements that serve the best interests of the child, considering factors such as the child's age, health, and relationship with each parent.<br></br> <br></br> Child support, another important element, involves financial assistance provided by one parent to the custodial parent to cover the child's expenses.
                                        Additionally, family law deals with issues related to paternity, prenuptial agreements, and postnuptial agreements, allowing individuals to clarify financial and other arrangements before or during marriage.<br></br> <br></br>

                                        Given the deeply personal nature of family law matters, legal professionals in this field often adopt a compassionate and supportive approach. <br></br> <br></br>Mediation and alternative dispute resolution methods are frequently employed to foster amicable resolutions, particularly in divorce and custody cases.<br></br>  <br></br>Family law continually evolves to adapt to societal changes and challenges, emphasizing the importance of preserving the welfare and stability of families.
                                    </div>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <strong>Property Law</strong>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Property law is a legal domain that governs the rights and interests in real and personal property. It encompasses a wide range of issues related to the ownership, use, and transfer of assets, aiming to provide a framework for resolving disputes and regulating relationships between individuals and their property.<br></br> <br></br>

                                        Real property, often referred to as real estate, involves the legal rights associated with land and anything permanently attached to it, such as buildings and natural resources. <br></br> <br></br>Property law dictates how individuals can acquire, own, use, and transfer real estate. It includes principles of ownership, such as fee simple and leasehold, as well as regulations concerning land use, zoning, and environmental considerations.<br></br> <br></br>

                                        Personal property, on the other hand, pertains to movable possessions that are not classified as real estate. This can include items such as vehicles, furniture, and intellectual property. <br></br> <br></br>Property law governs the rights to possess, use, and transfer personal property and addresses issues like sales, leases, and bailments (temporary transfers of possession without a change in ownership).<br></br> <br></br>

                                        Property transactions often involve contracts, and property law plays a crucial role in defining and enforcing the terms of these agreements. It also provides mechanisms for resolving disputes that may arise during property transactions, such as breaches of contract or title disputes.<br></br> <br></br>

                                        Landlord-tenant relationships are a significant aspect of property law. Legal principles guide the rights and responsibilities of both landlords and tenants, covering issues like lease agreements, rent payments, and property maintenance.<br></br> <br></br>
                                    </div>

                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <strong>Corporate Law</strong>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Property law is a legal domain that governs the rights and interests in real and personal property.<br></br> <br></br> It encompasses a wide range of issues related to the ownership, use, and transfer of assets, aiming to provide a framework for resolving disputes and regulating relationships between individuals and their property.<br></br> <br></br>

                                        Real property, often referred to as real estate, involves the legal rights associated with land and anything permanently attached to it, such as buildings and natural resources.<br></br> <br></br> Property law dictates how individuals can acquire, own, use, and transfer real estate. It includes principles of ownership, such as fee simple and leasehold, as well as regulations concerning land use, zoning, and environmental considerations.<br></br> <br></br>

                                        Personal property, on the other hand, pertains to movable possessions that are not classified as real estate. This can include items such as vehicles, furniture, and intellectual property. <br></br> <br></br>Property law governs the rights to possess, use, and transfer personal property and addresses issues like sales, leases, and bailments (temporary transfers of possession without a change in ownership).<br></br> <br></br>

                                        Property transactions often involve contracts, and property law plays a crucial role in defining and enforcing the terms of these agreements. <br></br> <br></br>It also provides mechanisms for resolving disputes that may arise during property transactions, such as breaches of contract or title disputes.


                                    </div>

                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        <strong>Cyber Laws</strong>
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Cyberlaw, also known as internet law or digital law, is a specialized field of legal regulation that addresses the challenges arising from the use of technology, the internet, and electronic communication. <br></br> <br></br>As the digital landscape has rapidly evolved, cyberlaws have emerged to govern various aspects of online activities, ensuring legal protection, privacy, and security in the digital realm.<br></br> <br></br>

                                        One fundamental aspect of cyberlaw is the protection of personal information and privacy. Data protection laws and regulations set guidelines for the collection, storage, and processing of personal data by businesses and organizations. <br></br> <br></br>These laws aim to safeguard individuals' privacy rights and mitigate the risks associated with unauthorized access or data breaches.<br></br> <br></br>

                                        Cybersecurity laws are crucial in combating cybercrimes and protecting digital infrastructure. <br></br> <br></br>They establish legal frameworks for preventing, detecting, and responding to cyberattacks, hacking, and other malicious activities that can compromise the integrity and security of computer systems.<br></br> <br></br>

                                        Intellectual property in the digital age is another key focus of cyberlaw. Regulations related to copyrights, trademarks, and patents apply to online content and digital assets, ensuring that creators and innovators receive legal protection for their intellectual property in the virtual space.<br></br> <br></br>

                                        E-commerce and online transactions are subject to cyberlaws that establish the legal framework for electronic contracts, digital signatures, and consumer protection in the online marketplace.<br></br> <br></br> These laws aim to facilitate and secure electronic commerce while ensuring fair business practices and consumer rights.<br></br>




                                    </div>

                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEIght">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        <strong>Environment Laws</strong>
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Environmental laws constitute a set of regulations designed to protect the environment, natural resources, and public health. These laws vary across jurisdictions but generally address key issues such as pollution control, resource conservation, and ecosystem preservation.<br></br> <br></br>

                                        Air and water quality regulations are fundamental components of environmental laws. They set standards for emissions and discharges, aiming to minimize the impact of industrial and human activities on air and water resources. Waste management laws govern the proper disposal and treatment of solid and hazardous waste, promoting responsible waste handling and recycling practices.<br></br> <br></br>

                                        Biodiversity and conservation laws focus on protecting ecosystems and endangered species. These regulations often designate protected areas, restrict activities that may harm biodiversity, and establish measures for habitat restoration.<br></br> <br></br>

                                        Environmental impact assessment laws require the evaluation of potential environmental consequences before undertaking major projects, ensuring that development activities consider and mitigate their impact on the environment.<br></br> <br></br>

                                        Enforcement mechanisms, penalties for non-compliance, and agencies responsible for monitoring and implementing environmental laws are integral parts of these regulatory frameworks.<br></br> <br></br>

                                        Overall, environmental laws play a crucial role in promoting sustainable development, balancing human activities with the need to protect the Earth's ecosystems and natural resources for current and future generations.





                                    </div>

                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingnine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        <strong>Tax Laws</strong>
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Tax laws encompass the legal framework established by governments to govern the imposition and collection of taxes. These laws dictate the types of taxes levied, including income tax, corporate tax, value-added tax (VAT), and others.<br></br> <br></br> They specify tax rates, which may be progressive or flat, and define taxable income, covering sources such as wages, profits, dividends, and capital gains.<br></br> <br></br>

                                        Deductions and credits are integral components, allowing individuals and businesses to reduce taxable income or their overall tax liability. Common deductions include those for charitable contributions, mortgage interest, and business expenses.<br></br> <br></br>

                                        Tax laws mandate filing requirements, specifying who must file tax returns, when they are due, and the necessary information. Compliance and enforcement mechanisms, such as audits and penalties for non-compliance, are outlined in these laws.<br></br> <br></br>

                                        International tax treaties may also exist between countries to address issues like double taxation and promote economic cooperation. Such treaties influence how taxes are assessed on cross-border activities.<br></br> <br></br>

                                        Tax planning, a strategic consideration for individuals and businesses, involves structuring financial affairs to minimize tax liability within the bounds of the law. As tax laws are subject to change, staying informed about updates is crucial. <br></br> <br></br>Professionals like accountants and tax advisors play a vital role in guiding individuals and businesses through the complexities of tax laws and ensuring compliance while optimizing financial strategies.






                                    </div>

                                </div>
                            </div>







                        </div>
                    </ul>

                </div>
            </div>

            {/* </div> */}
        </div>
    )
}