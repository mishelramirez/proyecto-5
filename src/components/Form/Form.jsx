import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import style from "./form.css"
import { useForm } from "react-hook-form";

const Form = () => {

    const{ register, formState:{errors}, handleSubmit } = useForm();

    const onSubmit = (data)=>{
        console.log(data)
    }
 
    return <div className="Rightside">

        <div className="formheader">
            <p className="titleheader">Try it free 7 days then $20/mo. thereafter</p>
        </div>

        <div className="formcontainer">
            <form onSubmit={handleSubmit(onSubmit)} className="formulario" id="formulario">

                <div className="forgrup " id="grupname">
                    <div className="formgrupimput forgrupcorrecto">
                        <input  type="text" className="formimput" {...register("name", {required:true})}  placeholder="Nombre" />
                        <FontAwesomeIcon className="formvalidacion" icon={faCircleExclamation} style={{ color: "#ce70e1", }} />
                    </div>
                    {errors.name?.type ==="required" && <p className="texterror">First Name cannot be ompty</p>}
                </div>


                <div className="forgrup" id="grupname">
                    <div className="formgrupimput forgrupincorrecto">
                        <input type="text" className="formimput"  {...register("lastname", {required:true})} placeholder="Last Name" />
                        <FontAwesomeIcon className="formvalidacion" icon={faCircleExclamation} style={{ color: "#ce70e1", }} />
                    </div>
                    {errors.lastname?.type ==="required" && <p className="texterror">Last Name cannot be ompty</p>}
                </div>

                <div className="forgrup" id="grupemail">
                    <div className="formgrupimput">
                        <input type="email" className="formimput"  placeholder="email@email.com" {...register("email", {pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/})} />
                        <FontAwesomeIcon className="formvalidacion" icon={faCircleExclamation} style={{ color: "#ce70e1", }} />
                    </div>
                    {errors.email?.type ==="pattern" &&<p className="texterror">Look like this is not an email</p>}
                </div>

                <div className="forgrup" id="gruppassword">
                    <div className="formgrupimput">
                        <input type="password" className="formimput" {...register("password", {required:true})} placeholder="password" />
                        <FontAwesomeIcon className="formvalidacion" icon={faCircleExclamation} style={{ color: "#ce70e1", }} />
                    </div>
                    {errors.password?.type ==="required" && <p className="texterror">Password cannot be ompty</p>}
                </div>

                <div className="message " id="message">
                    <p><FontAwesomeIcon className="formiconerror" icon={faTriangleExclamation} style={{ color: "#ce70e1", }} />
                        Please fill out the form</p>
                </div>

                <div className="grupterminos grup__form__btn" id="terminos">
                    <input type="submit" className="btn" value="CLAIM YOUR FFREE TRIAL" />
                    <p className="messegetext" id="messegetext">The form was sent successfully</p>
                </div>

                <p className="textterminos">By clicking the button, you are agreeing to our <a className="link" href="https://www.delftstack.com/es/howto/react/comments-in-react/"> Terms and Services</a> </p>
            </form>
        </div>


    </div>;
}

export default Form;