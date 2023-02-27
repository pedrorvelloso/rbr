module.exports = {
  apps: [
    {
      name: 'Remix (MSW)',
      script:
        'node --require ./node_modules/dotenv/config --require ./mocks ./node_modules/@remix-run/dev/dist/cli.js dev',
      watch: ['./mocks/**/*.ts', './mocks/**/*.js'],
      env: {
        FORCE_COLOR: '1',
      },
    },
  ],
}
