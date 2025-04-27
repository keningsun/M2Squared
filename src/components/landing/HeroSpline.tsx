import React, { useState, useEffect, useRef } from "react";

interface HeroAnimationProps {
  className?: string;
}

// Renamed conceptually to HeroAnimation, but keeping filename for now
export function HeroSpline({ className = "" }: HeroAnimationProps) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    // Listener for when the video can play through smoothly
    video.addEventListener("canplaythrough", handleCanPlay, { once: true });

    // Attempt to play the video, catching potential errors
    video.play().catch((error) => {
      console.log(
        "Video auto-play maybe prevented. Ensure muted attribute is set.",
        error
      );
    });

    // Cleanup listener on component unmount
    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ background: "transparent" }} // Keep container transparent
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          {/* Added a semi-transparent background to loading state */}
          <div className="animate-pulse text-white"></div>
        </div>
      )}

      {/* Basic HTML5 video loop setup for the MP4 file */}
      <video
        ref={videoRef}
        loop // Standard loop attribute
        autoPlay
        muted // Required for autoplay in most browsers
        playsInline
        preload="auto"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          objectFit: "cover",
          // MP4 likely won't be transparent, so explicit transparent bg might not matter
          // but doesn't hurt.
          backgroundColor: "transparent",
        }}
      >
        {/* Load the new MP4 file */}
        {/* Ensure the filename is exactly "radial-glass (2).mp4" including space and parentheses */}
        <source src="/radial-glass (7).mp4" type="video/mp4" />
        {/* Optional: Provide WebM as fallback if needed, but priority is MP4 */}
        {/* <source src="/hero_m.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
