module.exports = {
	description: 'installing Meyer\'s Reset in SASS to your project',

	normalizeEntityName: function() {
		// this prevents an error when the entityName is
		// not specified (since that doesn't actually matter
		// to us
	},

	afterInstall: function(options) {
		return this.addBowerPackageToProject('reset-scss');
	}
};
