import { NextPage } from "next";
import Ad from "../components/ad/Ad";
import Button, { ColorOptions } from "../components/buttons/Button";
import Navbar from "../components/navbar/Navbar";
import Head from "next/head";
import { api } from "../utils/api";
import { useRouter } from "next/router";
import { Searchbar } from "../components/searchbar/Searchbar";
import { string } from "zod";

const ToolFeed: NextPage = () => {
  const router = useRouter();
  let selectedCategory = router.query.categoryName as string;
  if (!selectedCategory) {
    selectedCategory = "";
  }
  //importere liste med kategorier som vi kan iterere gjennom til knappene
  let adsByFilter =
    api.advertisement.getManyByCategory.useQuery({
      categoryName: selectedCategory,
    }).data || [];
  const advertisements = api.advertisement.getAll.useQuery().data || [];
  let foundText = "Viser annonser innenfor " + selectedCategory;

  // Dersom brukeren har trykket på knappen "alle", skal alle annonser vises
  if (selectedCategory === "alle") {
    adsByFilter = advertisements;
    foundText = "Viser alle tilgjengelige annonser";
  }
  // Ved bruk av søkefeltet settes selectedCategory til "" og vi må sjekke om det er noen annonser som matcher søket
  else if (selectedCategory === "") {
    adsByFilter =
      api.advertisement.getManyBySearch.useQuery({
        searchInput: router.query.searchInput as string,
      }).data || [];
    foundText = "Fant " + adsByFilter.length + " resultater med valgte filtre";
    // Dersom det ikke er noen annonser som matcher søket, skal alle annonser vises
    if (adsByFilter.length === 0 || adsByFilter === undefined) {
      adsByFilter = advertisements;
      foundText =
        "Fant ingen annonser innenfor søket, viser alle tilgjengelige annonser";
    }
  }

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
          <p className="font-futura text-md text-gray-400">{foundText}</p>
          <Searchbar />
          <p className="font-futura text-md text-gray-400">{foundText}</p>
          <div className="mt-5 flex max-w-full flex-row flex-wrap gap-[0.2rem]">
            {adsByFilter?.map((ad) => (
              <Ad key={ad.id} title={ad.title} price={ad.price} id={ad.id} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ToolFeed;
