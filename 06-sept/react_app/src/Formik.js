// import React from 'react';
// import { useFormik } from 'formik';

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     onSubmit: (values) => {
//       console.log(values)
//       console.log(formik)
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       <br />
//       <br />
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       <br />
//       <br />

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       <br />
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm



import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {

  return(
    <div>
      
    </div>
  )
};

export default SignupForm