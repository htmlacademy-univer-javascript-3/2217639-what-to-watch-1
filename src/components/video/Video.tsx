import { useEffect, useRef } from 'react';
import { IFilm } from '../../types/Film.interface';

type VideoProps = {
  filmData: IFilm;
  isPlaying: boolean;
}

function Video({ filmData, isPlaying }: VideoProps) {
  const previewRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    (async () => {
      if (previewRef.current === null) {
        return;
      }

      if (isPlaying) {
        previewRef.current.src = filmData.previewVideoLink;
        return await previewRef.current.play();
      }

      if (!isPlaying) {
        previewRef.current.src = '';
      }
    })();
  }, [filmData.previewVideoLink, isPlaying]);


  return (
    <video width="280" height="175" poster={filmData.previewImage} ref={previewRef} muted />
  );
}

export default Video;
