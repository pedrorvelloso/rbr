module.exports = {
  apps: [
    {
      name: 'Remix (MSW)',
      script:
        'node --require ./node_modules/dotenv/config --require ./mocks ./node_modules/@remix-run/dev/cli.js dev',
      watch: ['./mocks/**/*.ts', './mocks/**/*.js'],
      env: {
        FORCE_COLOR: '1',
      },
    },
    {
      name: 'PostCSS',
      script: 'postcss styles --base styles --dir app/styles',
      autorestart: false,
      watch: [
        './tailwind.config.js',
        './app/**/*.ts',
        './app/**/*.tsx',
        './styles/**/*.css',
      ],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        FORCE_COLOR: '1',
      },
    },
  ],
}
