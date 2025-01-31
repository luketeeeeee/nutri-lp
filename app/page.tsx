import HomePageCard from "@/components/HomePageCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-poppins text-text">
      <header className="py-12 px-4 bg-primary text-amber-200 text-center font-playfairDisplay">
        <h1 className="text-4xl font-bold">BIANCA FRADE</h1>
        <h2 className="text-xl font-medium font-poppins tracking-widest">
          Nutricionista
        </h2>
      </header>

      <main>
        <section className="bg-secondary bg-opacity-50 text-background pt-7 px-6 flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-primary leading-6 mb-10">
            Alcance uma alimentação saudável mantendo uma vida equilibrada
          </h1>

          <Link
            href="https://github.com"
            className="flex gap-2 items-center bg-gradient-to-bl from-green-400 via-green-500 to-primary px-4 py-3 rounded-md font-semibold self-center transition duration-500 hover:from-green-500 hover:to-green-600 hover:bg-gradient-to-bl"
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
            Agenda sua consulta
          </Link>

          <Image
            src="/images/main-photo.png"
            alt="Bianca Frade"
            width={300}
            height={300}
            className="mt-8 max-w-[300px] object-cover"
          />
        </section>

        <section className="pt-14 pb-10 flex gap-4 flex-col items-center bg-secondary">
          <HomePageCard
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f4fffb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon w-8 h-8 icon-tabler icons-tabler-outline icon-tabler-apple"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 11.319c0 3.102 .444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08 .988c.426 -.268 .97 -.268 1.397 0c1.923 1.26 3.728 .809 5.079 -.988c1.778 -2.66 2.222 -4.876 2.222 -7.977c0 -2.661 -1.99 -5.32 -4.444 -5.32c-1.267 0 -2.41 .693 -3.22 1.44a.5 .5 0 0 1 -.672 0c-.809 -.746 -1.953 -1.44 -3.22 -1.44c-2.454 0 -4.444 2.66 -4.444 5.319" />
                <path d="M7 12c0 -1.47 .454 -2.34 1.5 -3" />
                <path d="M12 7c0 -1.2 .867 -4 3 -4" />
              </svg>
            }
            cardText="Emagrecimento"
          />
          <HomePageCard
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon w-8 h-8 icon-tabler icons-tabler-outline icon-tabler-barbell"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 12h1" />
                <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
                <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                <path d="M9 12h6" />
                <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
                <path d="M22 12h-1" />
              </svg>
            }
            cardText="Hipertrofia"
          />
          <HomePageCard
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon w-8 h-8 icon-tabler icons-tabler-outline icon-tabler-run"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M4 17l5 1l.75 -1.5" />
                <path d="M15 21l0 -4l-4 -3l1 -6" />
                <path d="M7 12l0 -3l5 -1l3 3l3 1" />
              </svg>
            }
            cardText="Performance"
          />
        </section>

        <section className="text-center bg-primary py-10 font-poppin">
          <h1 className="text-3xl font-extrabold text-amber-200 font-playfairDisplay">
            SOBRE A NUTRI
          </h1>
          <h2 className="text-2xl font-semibold mt-[-4px] tracking-widest text-background">
            BIANCA FRADE
          </h2>
          <section className="text-left text-background mt-4 leading-6 px-6 text-lg flex flex-col gap-4">
            <p>
              Profissional altamente capacitada e com ampla experiência,{" "}
              <span className="font-semibold">
                com mais de cinco mil pacientes
              </span>
              , realizando atendimentos com foco em emagrecimento, hipertrofia e
              performance.
            </p>
            <p>
              Possui{" "}
              <span className="font-semibold">
                pós-graduação em Nutrição Clínica e Nutrição Funcional
              </span>
              , além de ser{" "}
              <span className="font-semibold">
                pós-graduada em Fisioterapia
              </span>{" "}
              pela Faculdade Oriental das Américas
            </p>
          </section>
        </section>

        <section className="text-center bg-secondary py-10 font-poppin">
          <h1 className="text-3xl font-extrabold text-amber-200 font-playfairDisplay">
            CONSULTA E ACOMPANHAMENTO
          </h1>

          <section className="text-background text-left mt-4 leading-6 px-6 text-lg flex flex-col gap-3">
            <h2 className="text-2xl font-semibold mt-4 leading-5 tracking-widest text-center">
              <span className="text-primary">NO DIA</span> DA CONSULTA
            </h2>
            <p>
              Haverá uma onversa sobre sua{" "}
              <span className="font-semibold">
                alimentação, rotina, horários e hábitos
              </span>
              , além de uma{" "}
              <span className="font-semibold">avaliação física detalhada</span>.
            </p>
          </section>

          <section className="text-background text-left mt-4 leading-6 px-6 text-lg flex flex-col gap-3">
            <h2 className="text-2xl font-semibold mt-4 leading-5 tracking-widest text-center">
              <span className="text-primary">DEPOIS</span> DA CONSULTA
            </h2>
            <p>
              Você receberá seu plano alimentar{" "}
              <span className="font-semibold">
                desenvolvido exclusivamente para você
              </span>{" "}
              num prazo de 5 a 7 dias úteis.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
