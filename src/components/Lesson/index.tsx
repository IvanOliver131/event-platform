import { CheckCircle } from "phosphor-react";

interface LessonProps {
  tittle: string;
  slug: string;
  availableAt: Date;
  type: "class" | "live";
}

export function Lesson(props: LessonProps) {
  return (
    <a href="#">
      <span className="text-gray-300">{props.availableAt.toString()}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            AO VIVO
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{props.tittle}</strong>
      </div>
    </a>
  );
}
