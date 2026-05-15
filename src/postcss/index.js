const postcss = require('postcss');
const path = require('path');
const fs = require('fs');

const themes = ['simple', 'dark', 'pastel', 'darkBluePastel', 'lightBluePastel', 'retro'];

const defaultOptions = {
  theme: 'simple',
  includeThemeVariables: true
};

function resetStylePlugin(options = {}) {
  const { theme, includeThemeVariables } = { ...defaultOptions, ...options };

  if (!themes.includes(theme)) {
    throw new Error(`Invalid theme "${theme}". Available: ${themes.join(', ')}`);
  }

  return {
    postcssPlugin: 'ospinajuanp-reset-css',
    Once(root, { result }) {
      const themeFileMap = {
        simple: 'resetStyle.css',
        dark: 'resetStyleDark.css',
        pastel: 'resetStylePastel.css',
        darkBluePastel: 'resetStyleDarkBluePastel.css',
        lightBluePastel: 'resetStyleLightBluePastel.css',
        retro: 'resetStyleRetro.css'
      };

      const themePath = path.join(__dirname, '..', '..', 'dist', themeFileMap[theme]);

      if (!fs.existsSync(themePath)) {
        throw new Error(`Theme file not found: ${themePath}`);
      }

      const themeCss = fs.readFileSync(themePath, 'utf8');

      const resetRoot = postcss.parse(themeCss);
      const varsRoot = postcss.parse(themeCss);

      if (includeThemeVariables) {
        const vars = varsRoot.nodes.filter(node => 
          node.type === 'decl' && node.prop.startsWith('--')
        );
        const varsRule = postcss.rule({ selector: ':root' });
        vars.forEach(v => varsRule.append(v.clone()));
        root.prepend(varsRule);
      }

      const resetRules = resetRoot.nodes.filter(node => 
        node.type === 'rule' && node.selector !== ':root'
      );
      resetRules.forEach(rule => root.prepend(rule.clone()));
    }
  };
}

resetStylePlugin.postcss = true;

module.exports = resetStylePlugin;
module.exports.themes = themes;