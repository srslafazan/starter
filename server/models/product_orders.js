/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('product_orders', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		order_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 'nextval(product_orders_order_id_seq::regclass)',
			references: {
				model: 'orders',
				key: 'id'
			}
		},
		product_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: 'nextval(product_orders_product_id_seq::regclass)',
			references: {
				model: 'products',
				key: 'id'
			}
		}
	}, {
		tableName: 'product_orders'
	});
};
