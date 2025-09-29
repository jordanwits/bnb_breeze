import MiniCssExtractPlugin from "mini-css-extract-plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    const hasMiniCss = config.plugins?.some((p) => p && p.constructor && p.constructor.name === "MiniCssExtractPlugin")
    if (!hasMiniCss) {
      config.plugins = config.plugins || []
      config.plugins.push(new MiniCssExtractPlugin())
    }
    return config
  },
}

export default nextConfig
