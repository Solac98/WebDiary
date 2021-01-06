import 'antd/dist/antd.css';
import styled from 'styled-components';
import SignUp from '../components/SignUp';

const CustomDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://images.unsplash.com/photo-1508253640504-9096edc75163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80);
  background-size: cover;
`;

const SignUpPage = () => {

    return (
        <CustomDiv>
            <SignUp />
        </CustomDiv>
    );
}
export default SignUpPage;