import { DefaultUi, LoadingScreen, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useQuery } from "@apollo/client";
import { Footer } from "../Footer";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex=1">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="flex-1 ">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data?.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex item-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data?.lesson.teacher.avatarURL}
                  alt="Ivan Oliveira"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data?.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data?.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 w-[100%] lg:max-w-[238px]">
            <a
              href="https://discord.gg/DukkxzdK"
              target="_blank"
              className="p-4 text-sm bg-red-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a
              href="https://app.rocketseat.com.br/?"
              target="_blank"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-1 lg:grid-cols-2">
          <a
            href="https://spacetraveling-ivanoliver131.vercel.app"
            target="_blank"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-red-600 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="https://www.behance.net/search/images?search=rocketseat"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-red-600 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
