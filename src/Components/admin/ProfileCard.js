import React from 'react';
import { toast } from 'react-toastify';

const ProfileCard = ({ profile }) => {
    const { name, age, city, email, contact, speciality } = profile;

    async function handleDelete() {
        try {
            const response = await fetch('http://localhost:4000/api/user', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                }),
            });
            const data = await response.json();
            toast.warning(data.message);
        } catch (error) {
            toast.error('Error: ', error);
        }
    }

    return (
        <div className="container mt-5">
            <div className="card shadow" style={{ background: '#f0f5ff', borderRadius: '15px' }}>
                <div className="row g-0">
                    {/* Profile Photo */}
                    <div
                        className="col-12 col-md-3 d-flex align-items-center justify-content-center"
                        style={{ background: '#1e90ff', color: '#fff', borderRadius: '15px 0 0 15px' }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '150px' }}>
                            person
                        </span>
                    </div>

                    {/* Details */}
                    <div className="col-12 col-md-9">
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#1e90ff' }}>
                                {name}
                            </h5>
                            <p className="card-text">
                                <strong style={{ color: '#333' }}>Email:</strong> {email}
                                <br />
                                <strong style={{ color: '#333' }}>Age:</strong> {age}
                                <br />
                                <strong style={{ color: '#333' }}>City:</strong> {city}
                                <br />
                                <strong style={{ color: '#333' }}>Contact:</strong> {contact}
                                <br />
                                <strong style={{ color: '#333' }}>Speciality:</strong> {speciality}
                            </p>
                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <button
                                className="btn btn-danger"
                                style={{ background: '#ff4d4d', border: '1px solid #ff4d4d', borderRadius: '5px', color: '#fff' }}
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
