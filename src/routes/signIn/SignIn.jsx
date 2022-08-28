import SignUpForm from "../../components/signUpForm/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <SignUpForm />
      <button onClick={() => logGoogleUser()}>Google</button>
    </div>
  );
};

export default SignIn;
