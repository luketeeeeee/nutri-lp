import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-poppins text-text">
      <header className="py-12 px-4 bg-primary text-center font-playfairDisplay text-background">
        <h1 className="text-4xl font-bold">Bianca Frade</h1>
        <h2 className="text-xl font-medium font-poppins tracking-widest">
          Nutricionista
        </h2>
      </header>

      <main>
        <section className="bg-primary bg-opacity-10 text-background py-7 px-6 flex flex-col">
          <h1 className="text-2xl font-semibold text-text leading-6 mb-10">
            Alcance uma alimentação saudável mantendo uma vida equilibrada
          </h1>

          <Link
            href="https://github.com"
            className="flex gap-2 items-center bg-primary px-4 py-2 rounded-md font-semibold self-end bg-opacity-100 hover:bg-opacity-100 transition duration-500 hover:border-2 border-2 border-transparent hover:border-green-400"
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            Agenda uma consulta
          </Link>
        </section>
      </main>
    </div>
  );
}
