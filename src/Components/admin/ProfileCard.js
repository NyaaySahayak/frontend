import React from 'react';

const ProfileCard = ({ profile }) => {
    const { name, age, city, email, contact, specialization } = profile;

    return (
        <div className="container">
            <div className="card">
                <div className="row">
                    {/* Profile Photo */}
                    <div className="col-12 col-md-3">
                        <span class="material-symbols-outlined" style={{fontSize: '200px', color: '' }}>
                            person
                        </span>
                    </div>

                    {/* Details */}
                    <div className="col-12 col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">
                                <strong>Email:</strong> {email}
                                <br />
                                <strong>Age:</strong> {age}
                                <br />
                                <strong>City:</strong> {city}
                                <br />
                                <strong>Contact:</strong> {contact}
                                <br />
                                <strong>Specialization:</strong> {specialization}
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ margin: '2px', textAlign: 'right' }}>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default ProfileCard;
