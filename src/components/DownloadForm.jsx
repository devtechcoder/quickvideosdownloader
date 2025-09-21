import { useState } from "react";
import { Image } from "antd";
import Whyus2Img from "../assets/images/iconoir_quote-solid.png";

export default function DownloadForm() {
  const [url, setUrl] = useState("");
  const [type, setType] = useState("auto"); // default auto detect
  const [media, setMedia] = useState([]); // 👈 ab array rakhenge
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setMedia([]);

    try {
      const res = await fetch(" http://localhost:5000/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, type, username: "ganeshnaruka1" }),
      });
      const data = await res.json();
      if (data.ok) {
        // agar backend `data` array bhejta hai
        const mediaList = Array.isArray(data.data) ? data.data : [data.mediaUrl];
        setMedia(mediaList);
      } else {
        setError(data.error || "Failed");
      }
    } catch (err) {
      setError("Server error");
    }
  }

  // 👇 Function to force download without opening new tab
  const handleDownload = async (fileUrl, index) => {
    try {
      const response = await fetch(` http://localhost:5000/api/proxy?url=${encodeURIComponent(fileUrl)}`);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      // file ka naam customize (type + index)
      link.download = `instagram-${type}-${index + 1}.${blob.type.includes("mp4") ? "mp4" : "jpg"}`;
      link.click();
      window.URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Paste Instagram link" value={url} onChange={(e) => setUrl(e.target.value)} style={{ width: "300px", marginRight: "10px" }} />

        {/* 👇 Type selector */}
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ marginRight: "10px" }}>
          <option value="auto">Auto Detect</option>
          <option value="reel">Reel</option>
          <option value="post">Post</option>
          <option value="igtv">IGTV</option>
          <option value="stories">Story</option>
          <option value="highlight">Highlight</option>
          <option value="profile">Profile Pic</option>
        </select>

        <button type="submit">Get Media</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {media.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {media.map((fileUrl, index) => (
            <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
              {/* Media preview */}
              {fileUrl.includes(".mp4") ? (
                <video src={fileUrl} controls style={{ maxWidth: "100%", borderRadius: "8px" }} />
              ) : (
                <img src={`http://10.199.80.83:5000/api/proxy?url=${encodeURIComponent(fileUrl)}`} alt={`Instagram Media ${index + 1}`} style={{ maxWidth: "100%", borderRadius: "8px" }} />
              )}

              {/* Download button */}
              <button onClick={() => handleDownload(fileUrl, index)} style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}>
                Download {index + 1}
              </button>
            </div>
          ))}
          <Image src={Whyus2Img} alt={`Instagram Media image`} />
        </div>
      )}
    </div>
  );
}
