type AvatarProps = (
  | { name: string; img: string; appearance: "image"; emphasis?: "low" }
  | {
      appearance: "blue" | "green" | "gray";
      emphasis?: "low" | "high";
      initials: string;
    }
) & { shape: "rounded" | "square" };
