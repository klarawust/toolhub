import { NextPage } from "next";
import { useState, useEffect } from "react";
import Ad from "../components/ad/Ad";
import Button, { ColorOptions } from "../components/buttons/Button";
import Navbar from "../components/navbar/Navbar";
import Head from "next/head";
import { api } from "../utils/api";
import Searchbar from "../components/searchbar/Searchbar";

const ToolFeed: NextPage = () => {
  const { data: favorites } = api.favorite.getFavoritedAdsIds.useQuery();

  const [favoritedIds, setFavoritedIds] = useState<string[]>([]);

  const userId = api.profile.getLoggedInUser.useQuery().data?.id;

  useEffect(() => {
    if (favorites) {
      setFavoritedIds(favorites.map((favorite) => favorite.advertId));
      console.log(favoritedIds);
    }
  }, [favorites]);

  const { data: advertisements } = api.advertisement.getByIds.useQuery({
    ids: favoritedIds,
  });

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
        <section className="mt-48 flex flex-col px-[120px]">
        {userId === undefined ? (
            <p className="font-futura text-center text-2xl">
              Du må være logget inn for å se dine favoritter.
            </p>
          ) : (
            <>
          <p className="font-futura text-2xl">
            Se gjennom <span className="text-rose-500">dine favoritter</span>
          </p>
          <p className="font-futura text-md text-gray-400">
            Du har favorisert {advertisements?.length} annonser!
          </p>
          </>)}
          <div className="mt-5 flex max-w-full flex-row flex-wrap gap-[0.2rem]">
            {advertisements?.map((ad) => (
              <Ad key={ad.id} title={ad.title} price={ad.price} id={ad.id} imgSource={ad.image}  />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ToolFeed;
