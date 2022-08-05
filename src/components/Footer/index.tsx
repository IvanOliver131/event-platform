import { Rocketseat } from "../Rocketseat";

export function Footer() {
  return (
    <>
      <div className="bg-black w-full h-[16vh] flex flex-col justify-center items-center border-t border-gray-400 md:flex-row md:h-20 md:justify-around md:fixed bottom-0">
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
