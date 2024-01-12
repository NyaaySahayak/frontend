import React, { useState } from 'react';
import { toast } from 'react-toastify'

const CreateUserButton = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setrole] = useState('')
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [speciality, setspeciality] = useState('')
    const [city, setcity] = useState('')
    const [contact, setcontact] = useState('')

    const handleClear = () => {
        setEmail('');
        setPassword('');
        setrole('');
        setname('');
        setage('');
        setspeciality('');
        setcity('');
        setcontact('');
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };



    async function handleCreateUser(ev) {
        handleModalClose();
        ev.preventDefault()
        try{
            if (email === '' || password === '' || role === '' || name === '' || age === '' || speciality === '' || city === '' || contact === '') {
                toast.error("All Fields must be filled")
            }else{
                const response = await fetch('http://localhost:4000/api/register', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        email, password, role, name, age,speciality,city,contact
                      }),
                })
                const data = await response.json()
                if (response.ok) {
                        handleClear();                    
                }
                if (data) {
                    toast.info(data.message)
                }else{
                    toast.error("Technical Error")
                }
                
            }
    
        }catch(error){
            toast.error("Error:", error)
        }
    }

    return (
        <>
            <button className="btn btn-primary position-fixed top-10 end-0 m-3 " style={{zIndex: '1000'}} onClick={handleModalOpen}>
                Create User
            </button>

            <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create User</h5>
                            <button type="button" className="btn-close" onClick={handleModalClose}></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        name="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword"
                                        name="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputRole" className="form-label">
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputRole"
                                        name="role"
                                        placeholder="Enter role"
                                        value={role}
                                        onChange={(e) => setrole(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputName" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        name="name"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAge" className="form-label">
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="inputAge"
                                        name="age"
                                        placeholder="Enter age"
                                        value={age}
                                        onChange={(e) => setage(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputspeciality" className="form-label">
                                        speciality
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputspeciality"
                                        name="speciality"
                                        placeholder="Enter speciality"
                                        value={speciality}
                                        onChange={(e) => setspeciality(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                        name="city"
                                        placeholder="Enter city"
                                        value={city}
                                        onChange={(e) => setcity(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputContact" className="form-label">
                                        Contact
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputContact"
                                        name="contact"
                                        placeholder="Enter contact"
                                        value={contact}
                                        onChange={(e) => setcontact(e.target.value)}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                                Close
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={handleClear}>
                                Clear
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleCreateUser}>
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateUserButton;
