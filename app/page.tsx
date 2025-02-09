import EmblaCarousel from "@/components/EmblaCarousel";
import HomePageCard from "@/components/HomePageCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden font-poppins text-text">
      <header className="flex items-center justify-center px-4 bg-[#7ea246] bg-opacity-40 text-amber-200 text-center font-playfairDisplay">
        <Image
          src="/images/logo-nutri.png"
          alt="Logo Bianca Frade"
          width={200}
          height={200}
          className="my-[-30px]"
        />
      </header>

      <main>
        <section className="isolate md:flex-row md:justify-center md:gap-10 lg:gap-36 md:pt-0 bg-[#7ea246] bg-opacity-40 pt-7 px-6 flex flex-col items-center">
          <div className="flex flex-col items-center md:-mt-16">
            <h1 className="text-2xl sm:text-3xl sm:leading-7 xs:text-center xs:max-w-[440px] md:text-left font-bold text-[#471b1d] text-opacity-90 leading-6 mb-4">
              Alcance seus objetivos de forma saudável mantendo uma vida
              equilibrada!
            </h1>
            <h2 className="mb-10 text-xl leading-6 text-[#471b1d] text-opacity-75 max-w-[410px] xs:text-center text-left md:text-left md:self-start">
              Com um plano personalizado de acordo com as suas necessidades, vou
              te ajudar a alcançar seus objetivos{" "}
              <span className="font-bold">sem complicações!</span>{" "}
            </h2>

            <Link
              href="https://github.com"
              className="text-white md:self-start flex gap-2 items-center w-60 bg-gradient-to-bl bg-[#7ab41d] px-4 py-3 rounded-md font-semibold self-center transition duration-500 hover:from-green-500 hover:to-green-600 hover:bg-gradient-to-bl"
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
              Agende sua consulta
            </Link>
          </div>

          <Image
            src="/images/photo-1.png"
            alt="Bianca Frade"
            width={300}
            height={300}
            className="mt-[-70px] md:mt-[-20px] max-w-[500px] md:max-w-[600px] object-cover"
          />
        </section>

        <section className="lg:flex-row lg:justify-center lg:py-0 lg:mb-[-30px] lg:mt-[-35px] lg:bg-transparent pt-14 pb-10 flex gap-4 flex-col items-center bg-[#7ea246] bg-opacity-70">
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

        <section className="text-center bg-primary pb-10 pt-16 flex flex-col items-center font-poppin px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-amber-200 font-playfairDisplay">
            SOBRE A NUTRI
          </h1>
          <h2 className="text-2xl font-semibold mt-[-4px] tracking-widest text-background">
            BIANCA FRADE
          </h2>

          <hr className="h-px my-4 w-72 bg-gray-200 border-0" />

          <section className="text-left xs:w-[390px] md:w-[400px] text-background leading-6 text-lg flex flex-col gap-4">
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

        <section className="text-center bg-secondary bg-opacity-50 pt-10 pb-14 font-poppin flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl xs:max-w-[360px] font-extrabold text-primary font-playfairDisplay">
            CONSULTA E ACOMPANHAMENTO
          </h1>

          <hr className="h-px my-4 w-72 bg-gray-200 border-0" />

          <section className="text-white mt-4 xs:w-[390px] xs:text-center text-left leading-6 px-6 text-lg flex flex-col gap-3">
            <h2 className="text-2xl font-semibold leading-5 tracking-widest text-center">
              <span className="text-secondary">NO DIA</span> DA CONSULTA
            </h2>
            <p>
              Haverá uma conversa sobre sua{" "}
              <span className="font-semibold">
                alimentação, rotina, horários e hábitos
              </span>
              , além de uma{" "}
              <span className="font-semibold">avaliação física detalhada</span>.
            </p>
          </section>

          <section className="text-white xs:w-[390px] xs:text-center text-left mt-4 leading-6 px-6 text-lg flex flex-col gap-3">
            <h2 className="text-2xl font-semibold mt-4 leading-5 tracking-widest text-center">
              <span className="text-secondary">DEPOIS</span> DA CONSULTA
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

        <section className="text-center bg-secondary flex flex-col items-center pt-8 pb-12 font-poppin">
          <Link
            href="https://github.com"
            className="mb-10 mt-[-55px] flex gap-2 items-center w-60 bg-gradient-to-bl from-green-400 via-green-500 to-primary px-4 py-3 rounded-md font-semibold self-center transition duration-500 hover:from-green-500 hover:to-green-600 hover:bg-gradient-to-bl text-background"
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
            Agende sua consulta
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-playfairDisplay">
            DEPOIMENTOS
          </h1>
          <h2 className="text-xl font-semibold mt-[-4px] tracking-wider text-background">
            ARRASTE PARA O LADO
          </h2>
          <hr className="h-px my-6 w-72 bg-gray-300 border-0" />
          <section className="flex justify-center w-screen flex-col gap-4 text-background text-lg divider text-left px-0">
            <EmblaCarousel />
          </section>
        </section>

        <section className="gap-6 flex items-center flex-col text-center bg-primary py-10 font-poppin px-6">
          <h1 className="xs:max-w-[500px] font-playfairDisplay text-amber-200 font-black text-3xl">
            AGENDE SUA CONSULTA ONLINE AGORA MESMO!
          </h1>
          <Link
            href="https://github.com"
            className="flex gap-2 items-center w-60 bg-gradient-to-bl from-green-400 via-green-500 to-green-500 px-4 py-3 rounded-md font-semibold self-center transition duration-500 hover:from-green-500 hover:to-green-600 hover:bg-gradient-to-bl text-background"
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
            Agende sua consulta
          </Link>
          <h2 className="xs:max-w-[460px] text-2xl leading-7 font-bold text-background">
            Mais que um plano alimentar, conquiste a transformação que tanto
            deseja!
          </h2>
        </section>
      </main>
    </div>
  );
}
