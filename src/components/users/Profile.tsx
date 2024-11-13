import React from 'react'
import { IUser } from '../../models/IUser'
import thumbnail from "../../assets/images/avatar-159236_640.png";


export const Profile = (props: IUser) => {

    return (
        <>
            <div className="card mb-3 mx-3 px-3 border-2 rounded-pill" style={{ width: '500px' }}>
                <div className="row g-0 align-items-center" style={{ width: '500px' }}>
                    <div className="col-md-4" style={{ width: '150px' }}>
                        <img src={thumbnail} className="img-fluid rounded-circle start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{ width: '100%' }}>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.role}</p>
                            <p className="card-text"><small className="text-body-secondary">{props.institute}</small></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
