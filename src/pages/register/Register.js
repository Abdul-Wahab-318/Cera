import React from 'react'
import './Register.css'
import Header from '../../components/header/Header'
import CustomHeader from '../../components/customHeader/CustomHeader'


function Register() {
    return (
        <div className="register-parent">
            <header>
                <Header/>
            </header>
            <main>
                <div className="custom-header-component">
                    <CustomHeader heading="Register"/>
                </div>
                <section className="register-form-parent">
                    <div className="custom-container">
                        <div className="register-form-inner">
                            <div className="register-form-cover">
                                <div>register</div>
                            </div>
                            <form className="register-form-fields">
                                <div className="register-form-field mb-4 d-flex gap-10">
                                    <div>
                                    <h6>First Name</h6>
                                    <input type="text" />
                                    <span className="error-handler"></span>
                                    </div>
                                    <div>
                                    <h6>Last Name</h6>
                                    <input type="text" />
                                    <span className="error-handler"></span>
                                    </div>
                                </div>
                                <div className="register-form-field mb-4">
                                    <h6>Password</h6>
                                    <input type="text" />
                                    <span className="error-handler"></span>
                                </div>
                                <div className="register-form-field">
                                    <label htmlFor="rememberme"><input type="checkbox" name="" id="rememberme" />Remember me</label>
                                    <button>Forgot Password?</button>
                                </div>
                                <div className="register-form-field">
                                    <button>Log IN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}


export default Register