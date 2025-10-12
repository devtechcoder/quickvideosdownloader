// import { useState } from "react";
// import { Image, Button, Input, Select, Card, Row, Col, Space, Typography, Progress, Alert, Spin, message } from "antd";
// import { DownloadOutlined, LinkOutlined, PlayCircleOutlined, PictureOutlined, LoadingOutlined } from "@ant-design/icons";
// import Whyus2Img from "../assets/images/iconoir_quote-solid.png";

// const { Title, Text } = Typography;
// const { Option } = Select;

// export default function EnhancedDownloadForm() {
//   const [url, setUrl] = useState("");
//   const [type, setType] = useState("auto");
//   const [media, setMedia] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [downloadProgress, setDownloadProgress] = useState(0);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (!url.trim()) {
//       message.error("Please enter a valid Instagram URL");
//       return;
//     }

//     setError(null);
//     setMedia([]);
//     setLoading(true);
//     setDownloadProgress(0);

//     try {
//       // Simulate progress
//       const progressInterval = setInterval(() => {
//         setDownloadProgress((prev) => {
//           if (prev >= 90) {
//             clearInterval(progressInterval);
//             return prev;
//           }
//           return prev + 10;
//         });
//       }, 200);

//       const res = await fetch(" http://localhost:5000/api/download", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ url, type, username: "ganeshnaruka1" }),
//       });
//       const data = await res.json();

//       clearInterval(progressInterval);
//       setDownloadProgress(100);

//       if (data.ok) {
//         const mediaList = Array.isArray(data.data) ? data.data : [data.mediaUrl];
//         setMedia(mediaList);
//         message.success(`Found ${mediaList.length} media file(s)`);
//       } else {
//         setError(data.error || "Failed to fetch media");
//         message.error(data.error || "Failed to fetch media");
//       }
//     } catch (err) {
//       setError("Server error - Please try again");
//       message.error("Server error - Please try again");
//     } finally {
//       setLoading(false);
//       setDownloadProgress(0);
//     }
//   }

//   const handleDownload = async (fileUrl, index) => {
//     try {
//       const response = await fetch(` http://localhost:5000/api/proxy?url=${encodeURIComponent(fileUrl)}`);
//       const blob = await response.blob();
//       const link = document.createElement("a");
//       link.href = window.URL.createObjectURL(blob);
//       link.download = `instagram-${type}-${index + 1}.${blob.type.includes("mp4") ? "mp4" : "jpg"}`;
//       link.click();
//       window.URL.revokeObjectURL(link.href);
//       message.success(`Download started for file ${index + 1}`);
//     } catch (err) {
//       console.error("Download failed", err);
//       message.error("Download failed - Please try again");
//     }
//   };

//   const handleDownloadAll = async () => {
//     for (let i = 0; i < media.length; i++) {
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Small delay between downloads
//       await handleDownload(media[i], i);
//     }
//     message.success("All downloads completed!");
//   };

//   const getTypeIcon = (fileUrl) => {
//     if (fileUrl.includes(".mp4")) {
//       return <PlayCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />;
//     }
//     return <PictureOutlined style={{ fontSize: "24px", color: "#52c41a" }} />;
//   };

//   const getTypeLabel = (fileUrl) => {
//     if (fileUrl.includes(".mp4")) {
//       return "Video";
//     }
//     return "Image";
//   };

//   return (
//     <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
//       {/* Enhanced Form Section */}
//       <Card
//         style={{
//           borderRadius: "16px",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//           marginBottom: "32px",
//           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//           color: "white",
//         }}
//         bodyStyle={{ padding: "40px" }}
//       >
//         <div style={{ textAlign: "center", marginBottom: "32px" }}>
//           <Title level={2} style={{ color: "white", marginBottom: "8px", fontSize: "32px" }}>
//             🚀 Instagram Media Downloader
//           </Title>
//           <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px" }}>Download Instagram videos, photos, reels, and stories in high quality - Fast & Free!</Text>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <Space direction="vertical" style={{ width: "100%" }} size="large">
//             <Row gutter={16}>
//               <Col xs={24} md={16}>
//                 <Input
//                   size="large"
//                   placeholder="Paste Instagram link here (e.g., https://www.instagram.com/...)"
//                   value={url}
//                   onChange={(e) => setUrl(e.target.value)}
//                   prefix={<LinkOutlined style={{ color: "rgba(255,255,255,0.7)" }} />}
//                   style={{
//                     borderRadius: "12px",
//                     fontSize: "16px",
//                     background: "rgba(255,255,255,0.1)",
//                     border: "1px solid rgba(255,255,255,0.3)",
//                     color: "white",
//                     height: "56px",
//                   }}
//                 />
//               </Col>
//               <Col xs={24} md={8}>
//                 <Select
//                   size="large"
//                   value={type}
//                   onChange={setType}
//                   style={{
//                     width: "100%",
//                     borderRadius: "12px",
//                     background: "rgba(255,255,255,0.1)",
//                     border: "1px solid rgba(255,255,255,0.3)",
//                   }}
//                   placeholder="Select type"
//                   dropdownStyle={{ borderRadius: "12px" }}
//                 >
//                   <Option value="auto">🔍 Auto Detect</Option>
//                   <Option value="reel">📹 Reel</Option>
//                   <Option value="post">📸 Post</Option>
//                   <Option value="igtv">📺 IGTV</Option>
//                   <Option value="stories">📖 Story</Option>
//                   <Option value="highlight">⭐ Highlight</Option>
//                   <Option value="profile">👤 Profile Pic</Option>
//                 </Select>
//               </Col>
//             </Row>

//             <Button
//               type="primary"
//               size="large"
//               onClick={handleSubmit}
//               loading={loading}
//               disabled={!url.trim()}
//               block
//               style={{
//                 height: "56px",
//                 borderRadius: "12px",
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 background: "rgba(255,255,255,0.2)",
//                 border: "1px solid rgba(255,255,255,0.4)",
//                 color: "white",
//                 boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
//               }}
//             >
//               {loading ? (
//                 <Space>
//                   <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
//                   Processing...
//                 </Space>
//               ) : (
//                 <>
//                   <DownloadOutlined />
//                   Get Media
//                 </>
//               )}
//             </Button>
//           </Space>
//         </form>

//         {/* Loading Progress */}
//         {loading && (
//           <div style={{ marginTop: "24px", textAlign: "center" }}>
//             <Progress percent={downloadProgress} status={downloadProgress === 100 ? "success" : "active"} strokeColor="white" trailColor="rgba(255,255,255,0.3)" strokeWidth={8} />
//             <Text style={{ color: "rgba(255,255,255,0.9)" }}>Analyzing Instagram content...</Text>
//           </div>
//         )}

//         {/* Error Display */}
//         {error && <Alert message="Error" description={error} type="error" showIcon closable onClose={() => setError(null)} style={{ marginTop: "16px", borderRadius: "8px" }} />}
//       </Card>

//       {/* Media Results */}
//       {media.length > 0 && (
//         <Card
//           title={
//             <Space>
//               <DownloadOutlined />
//               Found {media.length} Media File{media.length > 1 ? "s" : ""}
//             </Space>
//           }
//           extra={
//             <Button type="primary" onClick={handleDownloadAll} icon={<DownloadOutlined />} style={{ borderRadius: "8px" }}>
//               Download All
//             </Button>
//           }
//           style={{
//             borderRadius: "16px",
//             boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//           }}
//         >
//           <Row gutter={[20, 20]}>
//             {media.map((fileUrl, index) => (
//               <Col xs={24} sm={12} lg={8} key={index}>
//                 <Card
//                   hoverable
//                   style={{
//                     borderRadius: "12px",
//                     overflow: "hidden",
//                     position: "relative",
//                     transition: "all 0.3s ease",
//                   }}
//                   bodyStyle={{ padding: "20px" }}
//                   cover={
//                     <div style={{ position: "relative" }}>
//                       {fileUrl.includes(".mp4") ? (
//                         <video
//                           src={fileUrl}
//                           controls
//                           style={{
//                             width: "100%",
//                             borderRadius: "8px",
//                             maxHeight: "250px",
//                             objectFit: "cover",
//                           }}
//                           preload="metadata"
//                         />
//                       ) : (
//                         <img
//                           src={`http://10.199.80.83:5000/api/proxy?url=${encodeURIComponent(fileUrl)}`}
//                           alt={`Instagram Media ${index + 1}`}
//                           style={{
//                             width: "100%",
//                             borderRadius: "8px",
//                             maxHeight: "250px",
//                             objectFit: "cover",
//                           }}
//                           onError={(e) => {
//                             e.target.src = Whyus2Img;
//                           }}
//                         />
//                       )}

//                       {/* Media Type Badge */}
//                       <div
//                         style={{
//                           position: "absolute",
//                           top: "12px",
//                           right: "12px",
//                           background: "linear-gradient(135deg, #1890ff, #40a9ff)",
//                           color: "white",
//                           padding: "6px 12px",
//                           borderRadius: "20px",
//                           fontSize: "12px",
//                           fontWeight: "bold",
//                           boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//                         }}
//                       >
//                         {getTypeLabel(fileUrl)}
//                       </div>
//                     </div>
//                   }
//                 >
//                   <Space direction="vertical" style={{ width: "100%", textAlign: "center" }}>
//                     <Text strong style={{ fontSize: "16px" }}>
//                       {getTypeIcon(fileUrl)} Media {index + 1}
//                     </Text>

//                     <Button
//                       type="primary"
//                       block
//                       onClick={() => handleDownload(fileUrl, index)}
//                       icon={<DownloadOutlined />}
//                       style={{
//                         borderRadius: "8px",
//                         height: "40px",
//                         fontWeight: "600",
//                       }}
//                     >
//                       Download
//                     </Button>
//                   </Space>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Card>
//       )}

//       {/* Usage Instructions */}
//       <Card
//         size="small"
//         style={{
//           marginTop: "24px",
//           background: "linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)",
//           border: "1px solid #b7eb8f",
//           borderRadius: "12px",
//         }}
//       >
//         <Text style={{ fontSize: "14px", color: "#389e0d" }}>
//           <strong>💡 How to use:</strong> Copy any Instagram post, reel, story, or IGTV link and paste it above. Our tool will automatically detect the content type and provide download options in
//           seconds!
//         </Text>
//       </Card>

//       {/* Features Section */}
//       <Row gutter={[16, 16]} style={{ marginTop: "32px" }}>
//         <Col xs={24} sm={8}>
//           <Card
//             style={{
//               textAlign: "center",
//               borderRadius: "12px",
//               background: "linear-gradient(135deg, #fff1f0 0%, #ffebe9 100%)",
//               border: "1px solid #ffccc7",
//             }}
//           >
//             <div style={{ fontSize: "32px", marginBottom: "12px" }}>⚡</div>
//             <Title level={5}>Lightning Fast</Title>
//             <Text type="secondary">Download in seconds with our optimized servers</Text>
//           </Card>
//         </Col>
//         <Col xs={24} sm={8}>
//           <Card
//             style={{
//               textAlign: "center",
//               borderRadius: "12px",
//               background: "linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)",
//               border: "1px solid #b7eb8f",
//             }}
//           >
//             <div style={{ fontSize: "32px", marginBottom: "12px" }}>🎨</div>
//             <Title level={5}>High Quality</Title>
//             <Text type="secondary">Original quality downloads without watermarks</Text>
//           </Card>
//         </Col>
//         <Col xs={24} sm={8}>
//           <Card
//             style={{
//               textAlign: "center",
//               borderRadius: "12px",
//               background: "linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%)",
//               border: "1px solid #91d5ff",
//             }}
//           >
//             <div style={{ fontSize: "32px", marginBottom: "12px" }}>🔒</div>
//             <Title level={5}>Secure & Free</Title>
//             <Text type="secondary">No registration required, completely free</Text>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }
