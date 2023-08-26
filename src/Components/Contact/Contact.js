import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { styles } from '../Home/Hero/Hero';
import Navigation from '../Shared/Navigation/Navigation';

const Contact = () => {

    const componentDidMount = () => {
        document.title = "ReAnimate | Contact"
    }
    componentDidMount();

    return (
        <div>
            <Navigation></Navigation>
            <div className="hero min-h-screen bg-base-200 py-12 md:py-0 px-1 md:px-14">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left px-6 md:px-24 py-5 md:py-6">
                        <h1 className="text-5xl font-bold">Contact Now!</h1>
                        <p className="py-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tell Us Your Projects</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button style={styles.customButtonStyle} className="btn btn-primary glass">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Contact;