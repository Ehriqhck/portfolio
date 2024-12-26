/** @type {import('next').NextConfig} */
const nextConfig = {
  paths: {
    '@/': ['./']
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose', 'axios', 'kerberos', 'mongodb-js/zstd']
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',

      },
      {
        protocol: 'https',
        hostname: 'ehriqhck-portfolio.s3',

      },    {
        protocol: 'https',
        hostname: 'randomuser.me',

      },
      {
        protocol: 'https',
        hostname: 'imgur.com',

      },
    ],
  },
  env: {
    NEXTAUTH_SECRET: 'say_lalisa_love_me_lalisa_love_me_hey'
  },
  webpack (config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    }
    
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack']
      },
      {        exclude: /node_modules\/(?!@aws-sdk\/).*/,
    }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    Object.assign(config.resolve.alias, {
      '@mongodb-js/zstd': false,
      '@aws-sdk/credential-providers': false,
      'snappy': false,
      'aws4': false,
      'mongodb-client-encryption': false,
      'kerberos': false,
      'supports-color': false
    });
   
    return config
  }
}

module.exports = nextConfig
