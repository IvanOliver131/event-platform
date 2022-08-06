import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "class" | "live";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  // Se a data já passou a aula está liberada
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link
      to={`/event/lesson/${props.slug}`}
      className={classNames("group", {
        "pointer-events-none": !isLessonAvailable
      })}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>

      {/* Coloco as variaveis que nunca mudam e depois as condicionais */}
      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-50",
          {
            "bg-red-500": isActiveLesson
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "flex items-center gap-2 text-smfont-medium",
                {
                  "text-white": isActiveLesson,
                  "text-red-300": !isActiveLesson
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded py-[0.5rem] px-2 text-white border  font-bold",
              {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames(" mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
