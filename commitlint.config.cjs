module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'jira-ticket': ({ subject }) => {
          const shouldContainJiraTicket = /TET-[0-9]{2,}/;
          const orNoJira = /NO-JIRA/;
          const isReleaseMessage = /release/
          return [
            shouldContainJiraTicket.test(subject) || orNoJira.test(subject) || isReleaseMessage.test(subject),
            `Your subject should contain Jira ticket (TET-XX) or NO-JIRA`,
          ];
        },
      },
    },
  ],
  rules: {
    'jira-ticket': [2, 'always'],
    'subject-case': [0],
  },
};
