import Image from 'next/image';
import LoginForm from './_components/LoginForm';

function SignIn() {
  return (
    <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-background
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          className="mx-auto w-auto"
          src="/images/LogoBlancEcole.png"
          alt="Logo"
          width="160"
          height="160"
        />
        <h2
          className="
            mt-6
            text-center
            text-3xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Connexion
        </h2>
      </div>
      <LoginForm />
    </div>
  );
}

export default SignIn;
