import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

function Form() {
    return <div>
        <form action="" className="formulario" id="formulario">


            <div className="forgrup" id="grupname">
                <label htmlFor="nombre" className="formlabel">Nombre </label>
                <div className="formgrupimput">
                    <input type="text" className="formimput" name="nombre" id="nombre" placeholder="" />
                    <FontAwesomeIcon className="formvalidacion" icon={faCircleXmark} style={{ color: "#ce70e1", }} />
                </div>
                <p>First Name cannot be ompty</p>
            </div>


            <div className="forgrup" id="grupname">
                <label htmlFor="Lastname" className="formlabel">Last name </label>
                <div className="formgrupimput">
                    <input type="text" className="formimput" name="Lastnames" id="Lastname" />
                    <FontAwesomeIcon className="formvalidacion" icon={faCircleXmark} style={{ color: "#ce70e1", }} />
                </div>
                <p>Last Name cannot be ompty</p>
            </div>

            <div className="forgrup" id="grupemail">
                <label htmlFor="email" className="formlabel">Email </label>
                <div className="formgrupimput">
                    <input type="email" className="formimput" name="email" id="email" placeholder="email@email.com" />
                    <FontAwesomeIcon className="formvalidacion" icon={faCircleXmark} style={{ color: "#ce70e1", }} />
                </div>
                <p>Look like this is not an email</p>
            </div>

            <div className="forgrup" id="gruppassword">
                <label htmlFor="nombre" className="formlabel">Password </label>
                <div className="formgrupimput">
                    <input type="password" classpassword="formimput" name="password" id="password" />
                    <FontAwesomeIcon className="formvalidacion" icon={faCircleXmark} style={{ color: "#ce70e1", }} />
                </div>
                <p>Password cannot be ompty</p>
            </div>
            
                <div className="message" id="message">
                    <p>Please fill out the form</p>
                </div>

            <div className="grupterminos" id="terminos">
                <button type="submit" className="btn"> CLAIM YOUR FFREE TRIAL</button>
               <p className="messegetext" id="messegetext">The form was sent successfully</p>
            </div>
 <p>By clicking the button, you are agreeing to our <a href="https://www.delftstack.com/es/howto/react/comments-in-react/"> Terms and Services</a> </p>
        </form>
    </div>;
}

export default Form;