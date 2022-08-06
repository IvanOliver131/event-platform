import classNames from "classnames";
import { useGetLessonsQuery } from "../../graphql/generated";
import { Lesson } from "../Lesson";

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        " w-[348px] bg-gray-700 p-6 border-l border-gray-600 md:block md:bg-gray-700 md:p-6 md:border-l md:border-gray-600",
        {
          block: isOpen,
          absolute: isOpen,
          hidden: !isOpen,
          "w-[100%]": isOpen,
          "h-full": isOpen
        }
      )}
      id="navbar-default"
    >
      <span className="block w-full font-bold text-2xl pb-6 mb-6 border-b border-gray-500 md:block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            ></Lesson>
          );
        })}
      </div>
    </aside>
  );
}
