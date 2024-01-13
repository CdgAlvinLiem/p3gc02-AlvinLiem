import Image from "next/image";

export default function HomeDetailInfo() {
  return (
    <div className="flex justify-center my-12 py-12 flex-col gap-10">
      <Image src="/company.png" width={1920} height={200} alt="company" />
      <div className="text-4xl font-semibold text-center">
        Advanced Scientific Formula for Fast & Safe Beauty
      </div>
      <div className="text-2xl font-semibold text-center">
        Everyone deserves healthier skin, inside and outside.
      </div>
      <div className="px-10">
        Our vision for the beauty industry is to be able to create smart
        products that are accessible to everyone who would like to upgrade their
        skincare routine with pure active ingredients, smart formulation, and
        definitely with more advanced technology. Aside from fast and effective
        results, we also prioritize the well-being of your skin in the long run.
        No more compromising the health of your skin barrier, SKINTIFIC will
        give you the best solution of all. Our research team spends years
        studying and developing skincare solutions in a bottle. Our formulas are
        based on our unique TTE Technology (Trilogy Triangle Effect) that not
        only gives you effective and precise results, but gurantees that our
        products are safe and gentle for people with sensitive skin.
      </div>
      <ul className="px-10">Our TTE Technology means:</ul>
      <li className="px-10">Precise active ingredients.</li>
      <li className="px-10">
        Quickly diminishes skin problems but also intensively hydrates and
        soothes the skin.
      </li>
      <li className="px-10">Effectively protects and improves skin barrier.</li>
    </div>
  );
}
