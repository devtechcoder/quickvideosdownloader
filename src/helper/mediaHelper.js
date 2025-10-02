function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return ` - ${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const processYouTubeMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.height) // वीडियो स्ट्रीम्स को फ़िल्टर करें
    .map((f) => ({
      url: f.url,
      quality: f.label || `${f.height}p`,
      format: f.ext,
      size: f.bitrate ? formatBytes((f.bitrate * f.duration) / 8) : "",
      isAudio: !!f.audioQuality,
    }));

  const audios = medias
    .filter((f) => f.type === "audio") // ऑडियो स्ट्रीम्स को फ़िल्टर करें
    .map((f) => ({
      url: f.url,
      quality: f.quality || `${Math.round(f.bitrate / 1000)}kbps`,
      format: f.ext,
      size: f.bitrate ? formatBytes((f.bitrate * f.duration) / 8) : "",
    }));

  return { videos, audios, images: [] };
};

const processInstagramMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: f?.is_audio || false,
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processFacebookMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video")
    .map((f) => {
      return {
        url: f.url,
        quality: f.quality || "Video",
        format: f.extension || "mp4",
        size: f.size ? formatBytes(f.size) : "",
        isAudio: true, // फेसबुक वीडियो में आमतौर पर ऑडियो होता है
      };
    });

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => {
      return {
        url: f.url,
        quality: f.quality || "Audio",
        format: f.extension || "mp3",
        size: f.size ? formatBytes(f.size) : "",
      };
    });

  return { videos, audios, images: [] };
};

const processThreadsMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processPinterestMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processTwitterMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processLinkedInMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processSnapchatMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processTikTokMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processDouyinMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processTumblrMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processSpotifyMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

const processDefaultMedia = (medias) => {
  const videos = medias
    .filter((f) => f.type === "video" && f.quality)
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "mp4",
      size: f.size ? formatBytes(f.size) : "",
      isAudio: true, // Assuming Threads videos have audio, like Facebook/Instagram
    }));

  const audios = medias
    .filter((f) => f.type === "audio")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "m4a",
      size: f.size ? formatBytes(f.size) : "",
    }));

  const images = medias
    .filter((f) => f.type === "image")
    .map((f) => ({
      url: f.url,
      quality: f.quality,
      format: f.extension || "jpg",
      size: f.size ? formatBytes(f.size) : "",
    }));

  return { videos, audios, images };
};

export const processMediaInfo = (data) => {
  if (!data || !data.source) {
    return null;
  }

  const { source, medias, ...rest } = data;

  switch (source) {
    case "youtube":
      return { ...rest, source, ...processYouTubeMedia(medias) };
    case "instagram":
      return { ...rest, source, ...processInstagramMedia(medias) };
    case "facebook":
      return { ...rest, source, ...processFacebookMedia(medias) };
    case "threads":
      return { ...rest, source, ...processThreadsMedia(medias) };
    case "pinterest":
      return { ...rest, source, ...processPinterestMedia(medias) };
    case "x":
      return { ...rest, source, ...processTwitterMedia(medias) };
    case "linkedin":
      return { ...rest, source, ...processLinkedInMedia(medias) };
    case "snapchat":
      return { ...rest, source, ...processSnapchatMedia(medias) };
    case "tiktok":
      return { ...rest, source, ...processTikTokMedia(medias) };
    case "douyin":
      return { ...rest, source, ...processDouyinMedia(medias) };
    case "tumblr":
      return { ...rest, source, ...processTumblrMedia(medias) };
    case "spotify":
      return { ...rest, source, ...processSpotifyMedia(medias) };

    default:
      // डिफ़ॉल्ट हैंडलिंग या अज्ञात सोर्स के लिए एरर
      return { ...rest, source, ...processDefaultMedia(medias) };
  }
};
