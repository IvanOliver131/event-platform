import { Rocketseat } from "../Rocketseat";

export function Footer() {
  return (
    <>
      <div className="bg-black w-full h-20 flex justify-around items-center border-t border-gray-400">
        <div className="flex flex-row gap-5 items-center">
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
