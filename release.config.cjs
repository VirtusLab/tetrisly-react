module.exports = {
    branches: ['main', {name: 'release-candidate', prerelease: "rc"}],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/npm',
      '@semantic-release/github',
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
        },
      ],
      [
        '@semantic-release/git',
        {
          assets: ['package.json', 'CHANGELOG.md'],
          message:
            'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
      ],
    ],
  };