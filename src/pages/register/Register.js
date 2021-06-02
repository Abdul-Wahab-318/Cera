import React from 'react'
import './Register.css'
import Header from '../../components/header/Header'
import CustomHeader from '../../components/customHeader/CustomHeader'
import HelpCenter from '../../components/helpCenter/HelpCenter'
import Footer from '../../components/footer/Footer'


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
                                    <div className="width-50">
                                    <h6>First Name</h6>
                                    <input type="text" />
                                    <span className="error-handler"></span>
                                    </div>
                                    <div className="width-50">
                                    <h6>Last Name</h6>
                                    <input type="text" />
                                    <span className="error-handler"></span>
                                    </div>
                                </div>
                                <div className="register-form-field mb-4">
                                    <h6>Email</h6>
                                    <input type="email" />
                                    <span className="error-handler"></span>
                                </div>
                                <div className="register-form-field mb-4 d-flex gap-10">
                                    <div className="width-50">
                                        <h6>Password</h6>
                                        <input type="password" />
                                        <span className="error-handler"></span>
                                    </div>
                                    <div className="width-50">
                                        <h6>Repeat Password</h6>
                                        <input type="password" />
                                        <span className="error-handler"></span>
                                    </div>

                                </div>
                                <div className="register-form-field">
                                    <label htmlFor="rememberme"><input type="checkbox" name="" id="rememberme" />I agree with terms and conditions</label>
                                </div>
                                <div className="register-form-field">
                                    <button onClick={(e)=> e.preventDefault()}>Create account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div className="help-center-component">
                    <HelpCenter/>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}


export default Register