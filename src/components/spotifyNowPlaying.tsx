import { CurrentlyPlayingSong } from "@/utils/spotify";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<CurrentlyPlayingSong>();
  const getData = async () => {
    const res = await fetch(`/api/spotify`, {
      next: { revalidate: 10 },
    });
    setData(await res.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AnimatePresence>
      {data?.isPlaying ? (
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold font-sans">Now Listening</h2>

          <div className="flex flex-row items-center gap-4 p-4">
            <div
              className="h-16 w-16 rounded-lg"
              style={{
                backgroundImage: `url(${data?.albumImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex flex-col">
              <span className="text-lg">{data?.title}</span>
              <span className="text-sm text-zinc-400">{data?.artist}</span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
