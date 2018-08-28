/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adminPrivileges', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		adminId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 'nextval("adminPrivileges_adminId_seq"::regclass)',
			references: {
				model: 'admins',
				key: 'id'
			}
		},
		privilegeId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 'nextval("adminPrivileges_privilegeId_seq"::regclass)',
			references: {
				model: 'privileges',
				key: 'id'
			}
		}
	}, {
		tableName: 'adminPrivileges'
	});
};
