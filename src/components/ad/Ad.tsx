import { useRouter } from "next/router";

interface AdProps {
  title: string;
  price: number;
  id: string;
  imgSrc?: string;
  category?: string;
}

const Ad = ({ title, price, id }: AdProps) => {
  const router = useRouter();

  return (
    <div
      className=" transition-all hover:translate-y-[-2px]"
      onClick={() => void router.push(`/annonser/${id}`)}
    >
      <p className="h-48 w-48 rounded-2xl bg-white shadow-sm"></p>

      <p className="text-md ml-4 mt-2 w-48">{title}</p>
      <p className="ml-4 w-48 text-sm text-gray-400">NOK {price}</p>
    </div>
  );
};

export default Ad;
