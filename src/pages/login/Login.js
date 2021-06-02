import React from 'react'
import Header from '../../components/header/Header'
import HelpCenter from '../../components/helpCenter/HelpCenter'
import Footer from '../../components/footer/Footer'
import './Login.css'
import CustomHeader from '../../components/customHeader/CustomHeader'
export default function Login() {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div className="login-parent">
            <header>
                <Header/>
            </header>

            <main>
                <div className="custom-header-component">
                    <CustomHeader heading="Login"/>
                </div>
                <section className="login-form-parent">
                    <div className="custom-container">
                        <div className="login-form-inner">
                            <div className="login-form-cover">
                                <div>Login</div>
                            </div>
                            <form className="login-form-fields" onSubmit={handleSubmit}>
                                <div className="login-form-field mb-4">
                                    <h6>Username or Email</h6>
                                    <input type="text" />
                                    <span className="error-handler"></span>
                                </div>
                                <div className="login-form-field mb-4">
                                    <h6>Password</h6>
                                    <input type="text" />
                                    <span className="error-handler"></span>
                                </div>
                                <div className="login-form-field">
                                    <label htmlFor="rememberme"><input type="checkbox" name="" id="rememberme" />Remember me</label>
                                    <button>Forgot Password?</button>
                                </div>
                                <div className="login-form-field">
                                    <button>Log IN</button>
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
