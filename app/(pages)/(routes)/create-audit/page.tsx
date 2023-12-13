import Image from 'next/image';
import RegisterForm from './_components/RegisterForm';

function NewAudit() {
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
          Nouvel audit
        </h2>
      </div>
      <RegisterForm />
    </div>
  );
}

export default NewAudit;
