const HeaderSvg = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="72" viewBox="0 0 800 160">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#B3E5FF" />
            <stop offset="100%" stop-color="#00AEEF" />
          </linearGradient>
        </defs>
        <text x="20" y="100" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="72" font-weight="800" fill="url(#g1)">
          clickXpert
        </text>
      </svg>
    </>
  );
};

export { HeaderSvg };
