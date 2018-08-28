/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productOrders', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		orderId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 'nextval("productOrders_orderId_seq"::regclass)',
			references: {
				model: 'orders',
				key: 'id'
			}
		},
		productId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 'nextval("productOrders_productId_seq"::regclass)',
			references: {
				model: 'products',
				key: 'id'
			}
		}
	}, {
		tableName: 'productOrders'
	});
};
