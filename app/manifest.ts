import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {

  return {

    name:
      "RHILL 業務管理システム",

    short_name:
      "RHILL管理",

    description:
      "案件・配置・手配管理システム",

    start_url:
      "/",

    display:
      "standalone",

    background_color:
      "#ffffff",

    theme_color:
      "#1d4ed8",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

  };

}