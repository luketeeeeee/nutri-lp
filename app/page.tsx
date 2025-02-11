import EmblaCarousel from "@/components/EmblaCarousel";
import HomePageCard from "@/components/HomePageCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden font-poppins text-text">
      <header className="flex items-center justify-center px-4 bg-gray2 text-amber-200 text-center font-playfairDisplay">
        <Image
          src="/images/logo-nutri.png"
          alt="Logo Bianca Frade"
          width={200}
          height={200}
          className="my-[-30px]"
        />
      </header>

      <main>
        <section className="isolate md:flex-row md:justify-center md:gap-10 lg:gap-36 md:pt-0 bg-gray2 pt-7 px-6 flex flex-col items-center">
          <div className="flex flex-col items-center md:-mt-16">
            <h1 className="text-2xl sm:text-3xl sm:leading-7 xs:text-center xs:max-w-[440px] md:text-left font-bold text-brown2 text-opacity-90 leading-6 mb-4">
              Alcance seus objetivos de forma saudável mantendo uma vida
              equilibrada!
            </h1>
            <h2 className="mb-10 text-xl leading-6 text-brown2 text-opacity-75 max-w-[410px] xs:text-center text-left md:text-left md:self-start">
              Com um plano personalizado de acordo com as suas necessidades, vou
              te ajudar a alcançar seus objetivos{" "}
              <span className="font-bold">sem complicações!</span>{" "}
            </h2>

            <Link
              href="https://wa.me/5583991477001"
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
          </div>

          <Image
            src="/images/photo-1.png"
            alt="Bianca Frade"
            width={300}
            height={300}
            className="mt-[-70px] md:mt-[-20px] max-w-[500px] md:max-w-[600px] object-cover"
          />
        </section>

        <section className="lg:flex-row lg:justify-center lg:py-0 lg:mb-[-30px] lg:mt-[-35px] lg:bg-transparent pt-14 pb-10 flex gap-4 flex-col items-center bg-gray2 bg-opacity-70">
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

        <section className="text-center bg-green1 bg-opacity-90 pt-16 flex flex-col items-center font-poppin px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-opacity-90 font-playfairDisplay">
            SOBRE A NUTRI
          </h1>
          <h2 className="text-2xl font-semibold mt-[-4px] tracking-widest text-background">
            BIANCA FRADE
          </h2>

          <hr className="h-px my-4 w-72 bg-gray-200 border-0" />

          <section className="md:flex md:flex-row md:mt-4 md:justify-between text-left xs:w-[390px] md:w-[700px] lg:w-[850px] text-background leading-6 text-lg flex flex-col gap-4">
            <section className="w-full flex flex-col gap-4 md:w-[400px]">
              <p>
                Profissional altamente capacitada e com ampla experiência,{" "}
                <span className="font-semibold">
                  com mais de cinco mil pacientes
                </span>
                , realizando atendimentos com foco em emagrecimento, hipertrofia
                e performance.
              </p>
              <p>
                Possui{" "}
                <span className="font-semibold">
                  pós-graduação em Nutrição Clínica e Nutrição Funcional
                </span>
                , além de ser{" "}
                <span className="font-semibold">
                  pós-graduada em Fitoterapia
                </span>{" "}
                pela Faculdade Oriental das Américas
              </p>
              <p>
                Ganhadora do{" "}
                <span className="font-semibold">
                  prêmio destaque de 2020/2021 em Patos, Paraíba
                </span>
                , assim como do prêmio{" "}
                <span className="font-semibold">Top of Mind Brasil</span> como
                <span>melhor nutricionista da região.</span>
              </p>
            </section>

            <Image
              alt="Nutri Bianca Frade"
              src="/images/photo-2.png"
              // className="absolute right-80 mt-[-40px]"
              className="-mt-14 md:w-[280px] md:h-full md:-mt-10 lg:w-[350px] lg:-mt-20"
              width={350}
              height={70}
            />
          </section>
        </section>

        <section className="text-center bg-gray2 pt-10 pb-14 font-poppin flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl xs:max-w-[360px] font-extrabold text-brown2 text-opacity-90 font-playfairDisplay">
            CONSULTA E ACOMPANHAMENTO
          </h1>

          <hr className="h-px my-4 w-72 bg-gray-200 border-0" />

          <section className="lg:flex md:mt-4">
            <section className="lg:flex-col">
              <section className="text-brown2 text-opacity-75 xs:w-[390px] md:w-[450px] xs:text-center text-left leading-6 px-6 text-lg flex flex-col gap-3">
                <h2 className="text-2xl font-semibold leading-5 tracking-widest text-center">
                  <span className="text-green1">NO DIA</span> DA CONSULTA
                </h2>
                <p>
                  Haverá uma conversa sobre sua{" "}
                  <span className="font-semibold">
                    alimentação, rotina, horários e hábitos
                  </span>
                  , além de uma{" "}
                  <span className="font-semibold">
                    avaliação física detalhada
                  </span>
                  .
                </p>
              </section>

              <section className="text-brown2 text-opacity-75 xs:w-[390px] md:w-[450px] xs:text-center text-left mt-4 leading-6 px-6 text-lg flex flex-col gap-3">
                <h2 className="text-2xl font-semibold mt-4 leading-5 tracking-widest text-center">
                  <span className="text-green1">DEPOIS</span> DA CONSULTA
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

            <section className="text-brown2 text-opacity-75 mt-8 lg:mt-0 xs:w-[390px] md:w-[450px] xs:text-center text-left leading-6 px-6 text-lg flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-green1 leading-5 tracking-widest text-center">
                VAMOS FAZER FUNCIONAR
              </h2>
              <p>
                Cada paciente é único, por isso,{" "}
                <span className="font-semibold">
                  meu acompanhamento é extremamente individual
                </span>
                . Minha principal missão é ensinar as pessoas a como conquistar
                a sua transformação.
              </p>
              <p>
                {" "}
                Essa mudança acontecerá através da implementação de uma{" "}
                <span className="font-semibold">
                  alimentação com alimentos que você gosta, suplementação e
                  fitoterapia.
                </span>{" "}
              </p>
            </section>
          </section>
        </section>

        <section className="text-center bg-green1 bg-opacity-90 flex flex-col items-center pt-8 pb-12 font-poppin">
          <Link
            href="https://wa.me/5583991477001"
            className="flex gap-2 items-center w-60 bg-gradient-to-bl from-green-400 via-green-500 to-green-500 px-4 py-3 rounded-md font-semibold self-center transition duration-500 hover:from-green-500 hover:to-green-600 hover:bg-gradient-to-bl text-background mb-10 mt-[-55px]"
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

        <section className="gap-6 flex items-center flex-col text-center bg-gray2 py-10 font-poppin px-6">
          <h1 className="xs:max-w-[450px] font-playfairDisplay text-brown2 text-opacity-90 font-black text-3xl">
            AGENDE SUA CONSULTA AGORA MESMO!
          </h1>
          <Link
            href="https://wa.me/5583991477001"
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
          <h2 className="xs:max-w-[460px] text-2xl leading-7 font-bold text-brown2 text-opacity-75">
            Mais que um plano alimentar, conquiste a transformação que tanto
            deseja!
          </h2>
        </section>

        <section className="flex flex-col items-center py-10 px-6 bg-green1 bg-opacity-90 font-playfairDisplay text-primary text-opacity-90 font-black text-3xl">
          <h1>MEUS CONTATOS</h1>

          <section className="flex flex-col items-center text-lg text-white mt-5 gap-1">
            <Link
              href="https://www.instagram.com/nutribiancafrade/"
              className="flex justify-center items-center font-semibold text-2xl text-white"
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
              href="https://wa.me/5583991477001"
              className="flex justify-center items-center font-semibold text-2xl text-white"
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

            <div className="flex justify-center font-semibold text-2xl text-white">
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
      </main>
    </div>
  );
}
