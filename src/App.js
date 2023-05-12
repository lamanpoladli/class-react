import { Container } from '@mui/system'
import './App.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function App() {
  const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().min(4).required(),
    lastName: Yup.string().min(4).required(),
    mobileNumber: Yup.number().test(val => val > 0).required(),
    password: Yup.number().test(val => val > 0).required(),

  })
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      password: '',
      isDiscount: false
    },
    validationSchema: ValidationSchema,
    onSubmit: (values,actions) => {
      console.log(values);
      actions.resetForm()
    }
  })

  return (
    <>
    
    <Container style={{width:"30%",border:"solid"}}>
    <div style={{textAlign:"center"}}>
    <h1>Sign Up</h1>
    <p>It is quickly and easy.</p>
      <form onSubmit={formik.handleSubmit}>
        <TextField style={{ display: "inline-block" }}
          id="standart-basic"
          name="firstName"
          label="First Name"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.firstName}

        /> 
        <span style={{ color: "red" }}>{formik.errors.firstName}</span>

        <TextField style={{ display: "inline-block" ,marginLeft:"20px"}}
          id="standart-basic"
          name="lastName"
          label="Last Name"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.lastName}

        />
        <span style={{ color: "red" }}>{formik.errors.lastName}</span>

        <TextField style={{ display: "block",margin:"10px 0px" }}
          id="standart-basic"
          name="mobileNumber"
          placeholder="Mobile Number"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.mobileNumber}

        />
        <span style={{ color: "red" }}>{formik.errors.mobileNumber}</span>

        <TextField style={{ display: "block"}}
          id="standart-basic"
          name="password"
          placeholder="Password"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.password}

        />
        <span style={{ color: "red" }}>{formik.errors.password}</span>
        <FormControlLabel
          style={{ display: "block" }}
          control={<Checkbox />}
          label="IsDiscount"
          name="isDiscount"
          onChange={formik.handleChange}
          value={formik.values.isDiscount}

        />
        <Button type="sumbit" variant='contained'>Save</Button>
      </form>
    </div>
    </Container>
    </>
  );
}

export default App;
