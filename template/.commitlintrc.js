// The following emoji array is obtained from this json,
// you may need to add the latest emoji to this array yourself
// https://github.com/carloscuesta/gitmoji/blob/master/src/data/gitmojis.json
// @see https://gitmoji.dev/


    const gitmojis = [
        '✨','🎨','⚡️','🔥','🐛','🚑','📝','🚀','💄','🎉',
        '✅','🔒','🚨','🚧','💚','⬇️','⬆️',
        '♻️','➕','➖','🔧','🔨','🌐','✏️','💩','⏪',
        '👽','🚚','💥','💡','🍻','🏷️','🚸',
        //'💬','🗃','🔊','🔇','👥','🏗','📱','🤡','🥚','🍱','♿️','📦','🔀',
        //'🙈','📸','⚗','🔍','🌱','🚩','🥅','💫','🗑','🔖','📌','👷','📄',
        //'🛂','🩹','🧐','📈','⚰️'
        ];    
    const matchAnyEmojiWithSpaceAfter =
        /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])\s/;
      const matchOptionalTicketNumberWithSpaceAfter = /(?:\[(T-\d+)\]\s)?/; // "[T-4605] ", "[T-1]"
      const subjectThatDontStartWithBracket = /([^\[].+)/; // "Add tests" but don't allow "[ Add tests"
            
    module.exports = {
    // Default rule: config-conventional
    // https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#rules
    
    // extends: ['@commitlint/config-conventional'],
    parserPreset: {
        parserOpts: {
        // We change the parser regex pattern to match emoji UTF-8 character
        // The "[\u23ea-\ufe0f]{1,2}" means that some emojis are in two bytes but not one
        // So this pattern matchs string like "🐛 Fix a bug"

        // headerPattern: /^([\u23ea-\ufe0f]{1,2})(?:\(([\w\$\.\-\* ]*)\))? (.*)$/,
        headerPattern: new RegExp(
            "^" +
              matchAnyEmojiWithSpaceAfter.source +
              matchOptionalTicketNumberWithSpaceAfter.source +
              subjectThatDontStartWithBracket.source +
              "$"
          ),
        headerCorrespondence: ['type', 'scope', 'subject']
        }
    },
    rules: {
        'type-enum': [2, 'always', gitmojis],
        'type-case': [0, 'always', 'lower-case'],
        'subject-full-stop': [2, 'never', '.'],
        'subject-case': [2, 'always', 'sentence-case'],
        'header-min-length': [2, 'always', 15],
        'header-max-length': [2, 'always', 100],
        'body-max-line-length': [2, 'always', 200],
    },
        
    prompt: {
        questions: {
        type: {
            description: "Select the TYPE of change that you're committing",
            enum: {
                // TODO: update the order of the prompts
                '✨': {
                    description: 'A new feature',
                    title: 'Features',
                    emoji: '✨',
                },
                '🐛': {
                    description: 'A bug fix',
                    title: 'Bug Fixes',
                    emoji: '🐛',
                },
                '📝': {
                    description: 'Documentation only changes',
                    title: 'Documentation',
                    emoji: '📝',
                },
                '💄': {
                    description:
                    'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
                    title: 'Code Styles',
                    emoji: '💄',
                },
                '♻️': {
                    description:
                    'A code change that neither fixes a bug nor adds a feature',
                    title: 'Code Refactoring',
                    emoji: '♻️',
                },
                '🚑': {
                    description: 'A Critical hotfix',
                    title: 'Critical hotfix',
                    emoji: '🚑',
                },
                '🔥': {
                    description: 'Remove code or files',
                    title: 'Remove code or files',
                    emoji: '🔥',
                },
                '🔒': {
                    description: 'Fix security issues',
                    title: 'Fix security issues',
                    emoji: '🔒',
                },
                '⚡️': {
                    description: 'Improve performance',
                    title: 'Improve performance',
                    emoji: '⚡️',
                },
                '🚀': {
                    description: 'Deploy stuff.',
                    title: 'Deploy stuff.',
                    emoji: '🚀',
                },
                '🚧': {
                    description: 'Work in progress',
                    title: 'Work in progress',
                    emoji: '🚧',
                },
                '🎉': {
                    description: 'Begin a project',
                    title: 'Begin a project',
                    emoji: '🎉',
                },
                '🎨': {
                    description: 'Improve structure / format of the code.',
                    title: 'Improve structure / format of the code.',
                    emoji: '🎨',
                },
                '✅': {
                    description: 'Add, update, or pass tests.',
                    title: 'Add, update, or pass tests.',
                    emoji: '✅',
                },
                '🏷️': {
                    description: 'Release / Version tags',
                    title: 'Release / Version tags',
                    emoji: '🏷️',
                },
                '🚨': {
                    description: 'Fix compiler / linter warnings.',
                    title: 'ReFix compiler / linter warnings.',
                    emoji: '🚨',
                },
                '⬆️': {
                    description: 'Upgrade dependencies',
                    title: 'Upgrade dependencies',
                    emoji: '⬆️',
                },
                '⬇️': {
                    description: 'Downgrade dependencies',
                    title: 'Downgrade dependencies',
                    emoji: '⬇️',
                },
                '➕': {
                    description: 'Add a dependency',
                    title: 'Add a dependency',
                    emoji: '➕',
                },
                '➖': {
                    description: 'Remove a dependency',
                    title: 'Remove a dependency',
                    emoji: '➖',
                },
                '🔧': {
                    description: 'Add or update configuration files',
                    title: 'Add or update configuration files',
                    emoji: '🔧',
                },
                '🔨': {
                    description: 'Add or update development scripts',
                    title: 'Add or update development scripts',
                    emoji: '🔨',
                },
                '🌐': {
                    description: 'Internationalization and localization.',
                    title: 'Internationalization and localization.',
                    emoji: '🌐',
                },
                '⏪': {
                    description: 'Revert changes',
                    title: 'Revert changes',
                    emoji: '⏪',
                },
                '💩': {
                    description: 'Write bad code that needs to be improved.',
                    title: 'Write bad code that needs to be improved.',
                    emoji: '💩',
                },
                '👽': {
                    description: 'Update code due to external API changes',
                    title: 'Update code due to external API changes',
                    emoji: '👽',
                },
                '🚚': {
                    description: 'Move or rename resources (e.g.: files, paths, routes).',
                    title: 'Move or rename resources (e.g.: files, paths, routes).',
                    emoji: '🚚',
                },
                '💥': {
                    description: 'Introduce breaking changes.',
                    title: 'Introduce breaking changes.',
                    emoji: '💥',
                },
                '💡': {
                    description: 'Add or update comments in source code.',
                    title: 'Add or update comments in source code.',
                    emoji: '💡',
                },
                '🚸': {
                    description: 'Improve user experience / usability.',
                    title: 'Improve user experience / usability.',
                    emoji: '🚸',
                },
                '💚': {
                    description: 'Fix CI Build',
                    title: 'Fix CI Build',
                    emoji: '💚',
                },
                '✏️': {
                    description: 'Fix Typo',
                    title: 'Fix Typo',
                    emoji: '✏️',
                },
                '🍻': {
                    description: 'Write code drunkenly',
                    title: 'Write code drunkenly',
                    emoji: '🍻',
                },
            },
        },
        scope: {
            description:
            'What is the SCOPE of this change (e.g. component or file name)',
        },
        subject: {
            description:
            'Write a short, imperative tense DESCRIPTION of the change',
        },
        body: {
            description: 'Provide a longer description of the change',
        },
        isBreaking: {
            description: 'Are there any breaking changes?',
        },
        breakingBody: {
            description:
            'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
        },
        breaking: {
            description: 'Describe the breaking changes',
        },
        isIssueAffected: {
            description: 'Does this change affect any open issues?',
        },
        issuesBody: {
            description:
            'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
        },
        issues: {
            description: 'Add issue references (e.g. "fix #123", "re #123".)',
        },
        },
    },
};