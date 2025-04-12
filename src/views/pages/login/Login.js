import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { authenticateUserThunk } from "./Login.Thunk";

const Login = () => {

  if (!localStorage.getItem("uniqueId")) {
    // const newUuid = uuidv4();
    // localStorage.setItem("uniqueId", newUuid);
    // console.log("New UUID generated and set:", newUuid);
  }
  const showAlert = (message, type = "error") => {
    Swal.fire({
      icon: type, // 'error', 'success', 'warning', 'info', 'question'
      title: message,
      confirmButtonText: "OK",
      timer: 3000, // Auto close after 3 seconds
      timerProgressBar: true,
    });
  };
  
  const login_button_click = async () => {
    if (!email) {
      showAlert("Please enter a valid email id");
    } else if (!password) {
      showAlert("Please enter a valid password");
    } else {
      const user = {
        userid: email,
        pswd: password,
      };

      try {
        const response = await dispatch(authenticateUserThunk(user));
        console.log("Full response object: ", response); // Log the entire response

        if (response?.payload.length > 0) {
          console.log("if");
          showAlert("Login successful", "success");
          // Perform further actions, like redirecting the user
        } else if (response?.payload.length == 0) {
          console.log("else IF");
          showAlert(response.message || "Invalid userid/ password", "error");
        } else {
          console.log("else");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        showAlert("An error occurred. Please try again.", "error");
      }
    }
  };
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={login_button_click}>
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
