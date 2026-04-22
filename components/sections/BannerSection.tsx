import Image from "next/image";

export function BannerSection() {
  return (
    <section className="bg-white py-1">
      <div className="mx-auto flex w-40 justify-center sm:w-48">
        <Image
          src="/banner.png"
          alt="Bible Brain® — A Scripture Brain Company"
          width={200}
          height={67}
          className="h-auto w-full"
          sizes="192px"
        />
      </div>
    </section>
  );
}
