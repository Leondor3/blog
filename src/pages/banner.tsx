import logo from "../assets/vini-logo.png";

export default function Banner() {
  return (
    <div className="my-16 flex flex-col itens-center justify-center">
      <div className="w-full">
        <img
          className="object-cover w-full h-56 mt-0 mx-auto rounded-full"
          src={logo}
        />
      </div>
      <div className="text-center mt-2">
        <h1 className="text-2xl font-bold uppercase leading-8 tracking-wide">Vinicius Ferreira</h1>
        <h2 className="text-2xl font-bold uppercase">Illustration</h2>
      </div>
    </div>
  );
}
