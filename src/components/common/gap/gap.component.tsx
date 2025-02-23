export const Gap = ({
  flex = "row",
  width = 0,
  height = 0,
}: {
  flex?: "row" | "column";
  width?: number;
  height?: number;
}) => {
  const sytle =
    flex === "row"
      ? {
          width,
          height: "100%",
          flexDirection: flex,
        }
      : {
          width: "100%",
          height,
          flexDirection: flex,
        };
  return <div style={sytle}></div>;
};
