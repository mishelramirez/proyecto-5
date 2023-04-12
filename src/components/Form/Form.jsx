import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import style from "./form.css"

function Form() {
    return <div className="Rightside">

        <div className="formheader">
            <p className="titleheader">Try it free 7 days then $20/mo. thereafter</p>
        </div>

        <div className="formcontainer">
            <form action="" className="formulario" id="formulario">

                <div className="forgrup " id="grupname">
                    <div className="formgrupimput forgrupcorrecto">
                        <input type="text" className="formimput" name="nombre" id="nombre" placeholder="Nombre" />
                        <FontAwesomeIcon className="formvalidacion" icon={faCircleExclamation} style={{ color: "#ce70e1", }} />
                    </div>
                    <p className="texterror">First Name cannot be ompty</p>
                </div>


                <div className="forgrup" id="grupname">
                    <div className="formgrupimput forgrupincorrecto">
                        <input type="text" className="formimput" name="Lastnames" id="Lastname" placeholder="Last Name" />
                        <FontAwesomeIcon className="formvalidacion" icon={faCircleExclamation} style={{ color: "#ce70e1", }} />
                    </div>
                    <p className="texterror">Last Name cannot be ompty</p>
                </div>

                <div className="forgrup" id="grupemail">
                    <div className="formgrupimput">
                        <input type="email" className="formimput" name="email" id="email" placeholder="email@email.com" />
                        <FontAwesomeIcon className="formvalidacion" icon={faCircleExclamation} style={{ color: "#ce70e1", }} />
                    </div>
                    <p className="texterror">Look like this is not an email</p>
                </div>

                <div className="forgrup" id="gruppassword">
                    <div className="formgrupimput">
                        <input type="password" className="formimput" name="password" id="password" placeholder="password" />
                        <FontAwesomeIcon className="formvalidacion" icon={faCircleExclamation} style={{ color: "#ce70e1", }} />
                    </div>
                    <p className="texterror">Password cannot be ompty</p>
                </div>

                <div className="message " id="message">
                    <p><FontAwesomeIcon className="formiconerror" icon={faTriangleExclamation} style={{ color: "#ce70e1", }} />
                        Please fill out the form</p>
                </div>

                <div className="grupterminos grup__form__btn" id="terminos">
                    <button type="submit" className="btn">CLAIM YOUR FFREE TRIAL</button>
                    <p className="messegetext" id="messegetext">The form was sent successfully</p>
                </div>

                <p className="textterminos">By clicking the button, you are agreeing to our <a className="link" href="https://www.delftstack.com/es/howto/react/comments-in-react/"> Terms and Services</a> </p>
            </form>
        </div>


    </div>;
}

export default Form;