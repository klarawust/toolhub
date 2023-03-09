import { NextPage } from "next";
import Ad from "../components/ad/Ad";
import Button, { ColorOptions } from "../components/buttons/Button";
import Navbar from "../components/navbar/Navbar";
import Head from "next/head";
import { api } from "../utils/api";
import Searchbar from "../components/searchbar/Searchbar";

const ToolFeed: NextPage = () => {
  const { data: advertisements } = api.advertisement.getAll.useQuery();

  const availableAds = advertisements?.filter((ad) => ad.availability); //TODO: prøvde å filtrere ut annonser som har availability true, funker det?

  //importere liste med kategorier som vi kan iterere gjennom til knappene
  return (
    <>
      <Head>
        <title>Toolhub | Annonser</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gray-100">
        <Navbar />
        <section className="mt-40 flex flex-col gap-5 px-[120px]">
          <p className="font-futura text-2xl">
            Se gjennom <span className="text-emerald-700">alle verktøy</span>
          </p>
          <Searchbar />
          <p className="font-futura text-md text-gray-400">
            Fant {advertisements?.length} resultater med valgte filtre
          </p>
          <div className="mt-5 flex max-w-full flex-row flex-wrap gap-[0.2rem]">
            {availableAds?.map((ad) => (
              <Ad key={ad.id} title={ad.title} price={ad.price} id={ad.id} /> //TODO: itererer gjennom Ads som har availability true, funker det?
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ToolFeed;
