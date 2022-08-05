import { MonitorPlay } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <>
            <div className="flex-1 flex flex-col">
              <div className="h-full w-full max-w-[1100px] max-h-[83.5vh] flex justify-center items-center gap-7 flex-col mx-auto">
                <MonitorPlay size={100} />
                <span>
                  <strong>Selecione</strong> algum video ao lado e começe o seu
                  aprendizado! 😁
                </span>
              </div>
              <Footer />
            </div>
          </>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
