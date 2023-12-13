const { aliasWebpack, aliasJest } = require('react-app-alias');

const aliasMap = {
  '@atoms': 'src/features/atoms',
  '@molecules': 'src/features/molecules',
  '@assets': 'src/shared/assets',
  '@hooks': 'src/shared/hooks',
  '@mocks': 'src/shared/mocks',
  '@redux-toolkit': 'src/shared/redux-toolkit',
  '@services': 'src/shared/services',
	"@root": "src"
};

const options = {
	alias: aliasMap
}

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);
