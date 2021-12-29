import React from "react";
import '../component/SignIn.styles.scss';
import FormInput from "./form-inuput/FormInput.component";
import CustomButton from "./custom-button/custom-button.component";


class SignIn extends React.Component{
    constructor(){
        super()
        this.state ={
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
        handleSubmit(event){
            event.preventDefault();

            this.setState ({email:'', password:''})
        }

        handleChange(event){
            const{name, value} = event.target
            this.setState ({
                [name]:value
            })
        }

    render(){
        return(

                    <div className="signin-container">
                <div className="sign-in">
                <h1 className="login-header">LOGIN INTO YOUR ACCOUNT</h1>              
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='email'
                    required />
             

                    <FormInput type="password"
                     name="password" 
                     value={this.state.password} 
                     handleChange={this.handleChange} 
                     label='password'
                     required />
                    

                    <CustomButton type="submit"> Sign In </CustomButton>
                </form>
            </div>
            
            </div>


            
        )
    }
}

export default SignIn;