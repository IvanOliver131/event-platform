import { Rocketseat } from "../Rocketseat";

export function Footer() {
  return (
    <>
      <div className="bg-black w-full h-[15vh] flex flex-col justify-around items-center border-t border-gray-400 md:flex-row md:h-20">
        <div className="flex flex-col gap-5 items-center md:flex-row">
          <Rocketseat />
          <span className="text-gray-400">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        <span className="text-gray-400">Políticas de privacidade</span>
      </div>
    </>
  );
}
