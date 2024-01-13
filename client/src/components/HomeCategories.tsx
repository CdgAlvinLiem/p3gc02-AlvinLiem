import Image from "next/image";

export const dynamic = "force-dynamic";

export default function HomeCategories() {
  return (
    <>
      <div className="flex justify-center my-10 py-10 flex-col gap-10">
        <div className="text-4xl font-semibold text-center">
          EXPLORE YOUR SKIN NEEDS
        </div>
        <div className="flex flex-row gap-3">
          <Image
            src="/catcleansers.png"
            width={500}
            height={200}
            alt="categories"
          />
          <Image
            src="/catexfoliators.png"
            width={500}
            height={200}
            alt="categories"
          />
          <Image
            src="/catsunscreens.png"
            width={500}
            height={200}
            alt="categories"
          />
          <Image
            src="/cattoners.png"
            width={500}
            height={200}
            alt="categories"
          />
        </div>
        <div className="flex flex-row gap-3">
          <Image
            src="/catmasks.png"
            width={500}
            height={200}
            alt="categories"
          />
          <Image
            src="/catmoisturizers.png"
            width={500}
            height={200}
            alt="categories"
          />
          <Image
            src="/catbodycare.png"
            width={500}
            height={200}
            alt="categories"
          />
          <Image
            src="/catserums.png"
            width={500}
            height={200}
            alt="categories"
          />
        </div>
      </div>
    </>
  );
}
