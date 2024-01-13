import Card from "./Card";
import OrdererInfo from "./OrdererInfo";
import Summary from "./Summary";
import data_product from "../assets/data";
import Hero from "./Hero";

const Contain = () => {
  return (
    <div className="p-6 md:px-[138px] bg-slate-50 my">
      <Hero />

      <div className="flex flex-col gap-4 my-16">
        <h3 className="font-medium text-3xl">Daftar Foto</h3>
        <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-8">
          {data_product.map(data => {
            return (
              <div key={data.id}>
                <Card data={data}/>
              </div>
            )
          })}
        </div>
      </div>

      <OrdererInfo />
      <Summary />

      <button className="btn btn-accent w-32 mb-20">Pesan</button>
    </div>
  );
};

export default Contain;
