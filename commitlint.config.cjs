module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'jira-ticket': ({ subject, scope }) => {
          const shouldContainJiraTicket = /TET-[0-9]{2,}/;
          const orNoJira = /NO-JIRA/;
          const isReleaseMessage = /release/
          return [
            shouldContainJiraTicket.test(subject) || orNoJira.test(subject) || isReleaseMessage.test(scope),
            `Your subject should contain Jira ticket (TET-XX) or NO-JIRA`,
          ];
        },
      },
    },
  ],
  rules: {
    'jira-ticket': [2, 'always'],
    'subject-case': [0],
    'footer-max-line-length': [0],
  },
};
