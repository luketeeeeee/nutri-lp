import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex flex-col items-center py-10 px-6 bg-green1 bg-opacity-90 font-playfairDisplay text-primary text-opacity-90 font-black text-3xl">
      <h1>MEUS CONTATOS</h1>

      <section className="flex flex-col items-center text-lg text-white mt-5 gap-1">
        <Link
          href="https://www.instagram.com/nutribiancafrade/"
          className="flex justify-center items-center font-semibold xs:text-2xl text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 stroke-white icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M16.5 7.5v.01" />
          </svg>
          <p className="ml-3">@nutribiancafrade</p>
        </Link>

        <Link
          target="_blank"
          prefetch={false}
          href="https://wa.me/5583991477001"
          className="flex justify-center items-center font-semibold xs:text-2xl text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-9 h-9 stroke-white icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
          <p className="ml-3">(83) 99147-7001</p>
        </Link>

        <div className="flex justify-center font-semibold xs:text-2xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-9 h-9 stroke-white icon icon-tabler icons-tabler-outline icon-tabler-mail"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <p className="ml-3">nutribiancafrade@gmail.com</p>
        </div>
      </section>
    </section>
  );
}
