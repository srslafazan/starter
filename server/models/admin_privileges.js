/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('admin_privileges', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		admin_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 'nextval(admin_privileges_admin_id_seq::regclass)',
			references: {
				model: 'admins',
				key: 'id'
			}
		},
		privilege_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 'nextval(admin_privileges_privilege_id_seq::regclass)',
			references: {
				model: 'privileges',
				key: 'id'
			}
		}
	}, {
		tableName: 'admin_privileges'
	});
};
