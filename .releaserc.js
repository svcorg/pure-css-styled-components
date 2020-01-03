module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', { tarballDir: 'dist' }],
    ['@semantic-release/github', { assets: 'dist/*.tgz' }],
  ],
  ci: true,
};
