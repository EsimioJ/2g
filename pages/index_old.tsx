import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-full p-0 justify-center items-center bg-amber-400">
      <main className="p-5 flex flex-1 flex-col justify-center items-center text-center">
        <h1 className="m-4 leading-5 text-4xl font-black">NOLEGGI SCI 2G </h1>
        <p className="font-semibold">CORNO ALLE SCALE (BO)</p>

        <div className="mt-8">
          <Image
            src="/Noleggio-sci-2G_Corno-alle-Scale.png"
            alt="Noleggio Sci 2G al Corno alle Scale"
            width="1360"
            height="600"
          />
        </div>
        <h3 className=" text-4xl font-bold mt-8 text-center">
          I NOLEGGI _ Direttamente sulle piste da sci
        </h3>
        <div className="mt-8 flex justify-between text-left w-[80%] text-xl">
          <div className="w-[60%]">
            <p>I noleggi sci 2g sono gestiti da Nicola</p>
            <p>
              Le attrezzature a noleggio sono proposte sempre in ottimo stato di
              utilizzo grazie al laboratorio specializzato con macchine
              professionali per la sciolinatura e la laminatura.
            </p>
            <p>
              Da anni vengono utilizzati materiali che offrono ampia garanzia di
              sicurezza e qualita' per garantire una giornata di pieno
              divertimento sulle piste del corno alle scale.
            </p>
            <p>
              Pper le scuole, sci club e ai cral e' possibile noleggiare a
              prezzi speciali l'attrezzatura per lo sci e lo snowboard, prezzi
              scontati ai privati per le settimane bianche.
            </p>
            <p>
              Noleggiabili anche sdraie e ciaspole che offrono anche a chi non
              scia la possibilità di passare un'allegra giornata sulla neve.
            </p>
            <p>Scarponi e caschi vengono sempre igienizzati!</p>
          </div>
          <div className=" w-[30%]">
            <Image
              src="/2G-facebook.jpeg"
              alt="Negozio a Vidiciatico"
              width="580"
              height="246"
              className=" w-auto"
            />
          </div>
        </div>

        <div className=" mt-8 flex items-end flex-wrap flex-col md:flex-row max-w-[800px] ">
          <div className="w-full md:w-[45%] mr-0 md:mr-20 ">
            <Image
              src="/noleggiosci2G_La-Polla.jpg"
              alt="Negozio a Vidiciatico"
              width="580"
              height="246"
              className="m-auto"
            />
            <Image
              src="/noleggiosci2G_La-Polla2.jpeg"
              alt="Negozio a Vidiciatico"
              width="580"
              height="246"
              className="m-auto"
            />
            <h3 className=" mt-4 font-bold">
              NOLEGGIO SCI 2G "BAITA DEL SOLE"
            </h3>
            <p>LOCALITA' POLLA</p>
          </div>

          <div className="mt-8 w-full md:w-[45%]">
            <Image
              src="/noleggiosci2G_Tomba.jpg"
              alt="NOLEGGIO SCI 2G CHALET"
              width="580"
              height="246"
            />
            <Image
              src="/noleggiosci2G-Tomba-2.jpeg"
              alt="Negozio a Vidiciatico"
              width="580"
              height="246"
            />

            <h3 className=" mt-4 font-bold">NOLEGGIO SCI 2G "CHALET" </h3>
            <p>LOCALITA' PISTA TOMBA 1</p>
          </div>
          <div className="w-full mt-20">
            <Image
              src="/negozio_vidiciatico.jpeg"
              alt="Negozio a Vidiciatico"
              width="580"
              height="246"
              className="m-auto"
            />
            <h3 className=" mt-4 font-bold">Negozio 2G - A Vidiciatico</h3>
            <p>
              LE MIGLIORI MARCHE PER LO SPORT E IL TEMPO LIBERO <br />
              APERTO ANCHE LA DOMENICA in VIA MARCONI 24 - VIDICIATICO (BO){" "}
              <br />
              Telefono <a href="tel:0534 53393">0534 53393</a> - Cellulare
              <a href="tel:331 3228573"> 331 3228573</a> - MAIL
              <a href="mailto:info@nolaeggisci2g.it"> info@noleggisci2g.it</a>
            </p>
          </div>
        </div>

        <div className=" mt-20">
          <h3 className="font-bold text-4xl ">Listino prezzi</h3>

          <table className="text-left m-auto mt-4 w-full md:w-[80%] table-fixed border-collapse border border-slate-300">
            <thead>
              <tr className="bg-indigo-400 text-white">
                <td width="40%">
                  <strong>ACCESSORI</strong>
                </td>
                <td width="20%">
                  <strong>GIORNALIERO</strong>
                </td>
                <td width="20%">
                  <strong>DAL 2° GIORNO</strong>
                </td>
                <td width="20%">
                  <strong>POMERIDIANO</strong>
                </td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>
                  COMPLETO BAMBINO <br />
                  fino a mt.1,40{" "}
                </td>
                <td>€ 15,00</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>
                  COMPLETO SNOWBOARD BAMBINO <br />
                  fino a mt.1,35{" "}
                </td>
                <td>€ 15,00</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>
                  COMPLETO ADULTO <br /> SCI - SNOWBOARD{" "}
                </td>
                <td>€ 25,00</td>
                <td>€ 20,00</td>
                <td>€ 20,00</td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>COMPLETO RACE - FUN </td>
                <td>€ 35,00</td>
                <td>€ 30,00</td>
                <td>€ 30,00</td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>
                  SCI BAMBINO <br />
                  fino a mt.1,40{" "}
                </td>
                <td>€ 10,00</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>
                  SNOWBOARD BAMBINO <br />
                  fino a mt.1,35{" "}
                </td>
                <td>€ 10,00</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>CIASPOLA - SCI DI FONDO </td>
                <td>€ 15,00</td>
                <td>€ 10,00</td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>SCI ADULTO - SNOWBOARD</td>
                <td>€ 15,00</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>SCI RACE - FUN</td>
                <td>€ 25,00</td>
                <td>€ 20,00</td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>SCARPONI </td>
                <td>€ 10,00</td>
                <td>€ 5,00</td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>CASCO </td>
                <td> € 5,00</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>BOB </td>
                <td>€ 10,00</td>
                <td>€ 5,00</td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>BASTONCINI</td>
                <td>€ 5,00</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>SDRAIO</td>
                <td>€ 5,00</td>
                <td>€ 2,50</td>
                <td>€ 2,50</td>
              </tr>
            </thead>
          </table>

          <table className="text-left m-auto mt-4  w-full md:w-[80%] table-fixed border-collapse border border-slate-300">
            <thead>
              <tr className="bg-amber-400">
                <td width="40%">
                  <strong>NOLEGGIO A ORE</strong>
                  <br />
                </td>
                <td width="20%">1 ORA</td>
                <td width="20%"> € 10,00</td>
                <td width="20%"></td>
              </tr>
            </thead>
          </table>

          <table className="text-left m-auto mt-4  w-full md:w-[80%] table-fixed ">
            <tbody>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td width="60%">
                  <strong>COMPLETO STAGIONALE BAMBINO SCI </strong>
                </td>
                <td>
                  <strong>€ 99,00</strong>
                </td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>
                  <strong>COMPLETO STAGIONALE BAMBINO SNOWBOARD</strong>
                </td>
                <td>
                  <strong>€ 120,00</strong>
                </td>
              </tr>
              <tr className="even:bg-amber-400 odd:bg-blue-100">
                <td>
                  <strong>COMPLETO STAGIONALE ADULTO SCI - SNOWBOARD</strong>
                </td>
                <td>
                  <strong>€ 195,00</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer className="flex w-[80%]">
        <Image
          src="/Noleggi-sci-2G.jpeg"
          alt="Noleggio Sci 2G al Corno alle Scale"
          width="1360"
          height="600"
          className="mr-5"
        />
        <div className="absolute right-36 text-right mt-20 p-4 m-auto backdrop-blur-xl bg-amber-400/30 ">
          <h2 className=" text-2xl font-black">Noleggi Sci 2g</h2>
          <h4 className=" text-xl font-semibold">Corno alle Scale - Bologna</h4>
          <p>
            Telefono <a href="tel:0534 53393">0534 53393</a>
            <br />
            Cellulare <a href="tel:331 3228573"> 331 3228573</a>
            <br />
            MAIL{" "}
            <a href="mailto:info@nolaeggisci2g.it"> info@noleggisci2g.it</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
