import Image from "next/image";

const people = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-500">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 sm:items-center">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-sm  font-bold tracking-tight text-pink-500 sm:text-4xl">
              Esta es la paginita bebe de Masterjonh
            </h2>
            <p className="text-xl text-gray-100">
              Lo que necesitas para iniciar con Next.js 12 🤓
            </p>
          </div>
          <div className="place-items-center space-y-4 lg:space-y-1 lg:scale-75 lg:grid lg:grid-cols-4"></div>
        </div>
      </div>
    </div>
  );
}
