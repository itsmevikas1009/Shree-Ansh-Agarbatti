import { useState } from "react";
import { styled, keyframes } from "@mui/material/styles";

const shimmerAnimation = keyframes`
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
`;

const Shimmer = styled("div")(({ borderRadius }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: borderRadius || "4px",
    background: "#f6f7f8",
    backgroundImage:
        "linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)",
    backgroundRepeat: "no-repeat",
    animation: `${shimmerAnimation} 1.2s linear infinite`,
}));

const ImageWithShimmer = ({
    src,
    alt,
    containerClassName = "",
    className = "",
    style = {},
    borderRadius = "4px",
    width = "100%",
    height = "100%",
    objectFit = "cover",
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className={containerClassName}
            style={{
                position: "relative",
                overflow: "hidden",
                width,
                height,
                borderRadius,
                ...style,
            }}
        >
            {!loaded && <Shimmer borderRadius={borderRadius} />}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={className}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit,
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius,
                }}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

export default ImageWithShimmer;
