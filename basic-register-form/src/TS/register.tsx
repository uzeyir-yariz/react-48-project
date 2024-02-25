import { useState } from "react"

const Register = () => {
  const [val, setval] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handle_first_name_input_cahange = (e) => {setval({...val, first_name: e.target.val})}
  const handle_last_name_input_cahange = (e) => {setval({...val, last_name: e.target.val})}
  const handle_email_input_cahange = (e) => {setval({...val, email: e.target.value})}
  const handle_pasword_input_cahange = (e) => {setval({...val, password: e.target.value})}
  const handle_submit  = (e) => {
    e.preventDefault();
    setsubmited(true);  
  }

  const [submited, setsubmited] = useState(false);

  return (
    <div>
        <h1 className="alert text-center">Register</h1>
        {submited ? <div className="alert alert-success text-center">user is login</div> : null}
        <form className="form-control-sm d-flex flex-column align-items-center">
            <input required onChange={handle_first_name_input_cahange} value={val.first_name} className="w-25" type="text"  placeholder="first name"/><br/>
            <input required onChange={handle_last_name_input_cahange} value={val.last_name} className="w-25" type="text"  placeholder="last name"/><br/>
            <input required onChange={handle_email_input_cahange} value={val.email} className="w-25" type="email"  placeholder="Email"/><br/>
            <input required onChange={handle_pasword_input_cahange} value={val.password} className="w-25" type="password"  placeholder="password"/><br/>
            <button onClick={handle_submit} className="w-25 btn btn-primary">Register</button>
        </form>
    </div>
  )
}

export default Register
