const { green, blue, yellow, red, grey, white } = require('kleur');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n');
      console.log(
        'TheCodingMachine React-Native Boilerplate for Adasa initialized with success ! 🚀\n',
      );
      console.log(
        `
        ${grey('             ;: ')}
        ${grey('          ;8@%S8X ')}
        ${grey('          8%    8%')}
        ${grey('          8%    8S      ;%SXXX%:tt')}${green('88@t%')}
        ${grey('          :@8X@8S     %88@@SXX8 ')}${green('XS@@@8@t ')}
        ${grey('             :       @8X;     ')}${green('88888888@88 ')}
        ${grey('                    t88:    ')}${green('@8X@S8SX88%8XS ')}
        ${blue('           88   S@8X@88@8  S888X8S8@888')}${green('88 ')}
        ${blue('          %8XS@X8X@@@@XXXS888X@SS888888S8')}${green('8S%')}
        ${blue('         ;S@88X@@8@88@S8X8X8S@S8888X8S8X@S')}${green('@88 ')}
        ${blue('         S@8@8X888@888X@8X8X8@888X88888S88')}${green('8@8XS%X ')}
        ${grey('        ;')}${blue('S:8@88;')}${white('░▀▀█░  █░▀▀█░█▀▀░▀▀█')}${blue('::8X@X')}${green('888@88@88%t ')}
        ${grey('      :X8@:')}${blue('8S8@ ')}${white('░█▀█░█▀█░█▀█░▀▀█░█▀█')}${blue('tS@@8X')}${green('8%8888888@88 ')}
        ${grey('      @888@')}${blue(':X@@X')}${white('░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀')}${blue('@X@88%')}${green('88@%@8888@8S ')}
        ${grey('     S88888')}${blue('X8X@S888@X8888@X88@8@88@@8@@88')}${green('888@8888t8888;')}
        ${grey('    t88888@@')}${blue('%X888@@@88@8888888888888@888%')}${green('888888:888 @; ')}
        ${grey('    S888888; ')}${blue('8X888X888X8X888@8@8@8X8888S')}${green('888@8S88%% ')}
        ${grey('    @888888  ')}${green('')}${blue('X@S888X8@8S8@8S8@8X8@8X@@@')}${green('888@@ X%')}
        ${grey('    @888888  ')}${green('@88')}${blue('8 S888X@8@8@8X88888S ')}${green('88S:8;: ')}
        ${grey('    S88888@t  ')}${green('8S@@')}${blue('X8;X8X8@888@88@X')}${green(';8888%')}
        ${grey('    :8888888%;X')}${green('88;@88@88 %t@X@X%88@t888 ')}
        ${grey('     ;888X8@88XS ')}${green('8X888@88888888@8tX888:')}
        ${grey('      :8@8@888888%S')}${green('tt@8888;88t:8@88@@: ')}
        ${grey('        @88X8X8S888S ')}${green('888X88@88@8@8S%')}
        ${grey('         %@888888888888 ')}${green('SX88;888Xt%')}
        ${grey('           :tX@8888888XS:     t;')}
        ${grey('                ::::           : ')}
        
        ${white('   [❤️ based on TCM]')}`,

                                                                      
          // '                                                                    .-`    `::  \n' +
          //   ' `/////////////     `/shhhy+-   ://.        /sy/                   /ss/   :NMN: \n' +
          //   ' `sssssyhhhyhhy:` `yMMMMNNMMMd. osss:     `hMMMh-    .-`         `+ss:   +MMm/. \n' +
          //   '      :MMM+----. `mMMm+:-`.oo/` osssyo`  `dMMMMh-   ohhh-       `oyy+-  sMMd/.  \n' +
          //   '      :MMM+`     oMMN/-         osssyhs`.mMMMMMh-   -hds`      .syy+- `hMMh:`   \n' +
          //   '      :MMM+`     hMMd:          oss-ohhhMMMhdMMh-    `.       +NNm/. .dMMy:`    \n' +
          //   '      :MMM+`     oMMN/          oss-`shdMMd:dMMh-    :-`     sMMd/. -NMMo-      \n' +
          //   '      :MMM+`     `mMMm/`  `/+:. oss- `sdMd:.hMMh-   hMys-  `hMMh:` -hdy-`       \n' +
          //   '      :MMM+`      `yMMMMdssss+  oss.  `oh/- hMMh-   -hyo:  dMMs:` -ss+`         \n' +
          //   '      .oys:`        .+yhyo/-    -::`    ``  -syo-     ..`  +mo-   `//           \n' +
          //   '        ``             ```                    ``            `.                  ',
      );
      if (previousValues.typescript) {
        console.log(blue('  THE TYPESCRIPT VERSION 📘'));
      } else {
        console.log(yellow('  THE JAVASCRIPT VERSION 📒'));
      }
      console.log('\n');

      console.log(
        '- 📚 If you need to read more about the original boilerplate : https://thecodingmachine.github.io/react-native-boilerplate/',
      );
      console.log(
        '- 📗 If you need to read more about this boilerplate : https://github.com/fchaulandadasa/react-native-boilerplate',
      );
      console.log(
        '- 🤕 If you have some troubles : https://github.com/thecodingmachine/react-native-boilerplate/issues',
      );
      console.log(
        '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/thecodingmachine/react-native-boilerplate',
      );

      if (!previousValues.typescript) {
        console.log('\n');
        console.log(
          red(
            '🚨 You choose the javascript version, don\'t forget to run "yarn lint --fix" after the installation 🚨',
          ),
        );
        console.log('\n');
      }

      resolve();
    });
  },
};
