-- ****************** PostgreSQL ******************;
-- ************************************************;


-- ************************************** "privileges"

CREATE TABLE "privileges"
(
 "id"         serial PRIMARY KEY ,
 "name"       varchar(255) NOT NULL ,
 "createdAt"  timestamp with time zone NOT NULL DEFAULT NOW() ,
 "updatedAt"  timestamp with time zone NOT NULL DEFAULT NOW()
);





-- ************************************** "admins"

CREATE TABLE "admins"
(
 "id"             serial PRIMARY KEY ,
 "name"           varchar(255) NOT NULL ,
 "email"          varchar(255) NOT NULL ,
 "phone"          varchar(50) NOT NULL ,
 "passwordHash"   varchar(255) NOT NULL ,
 "createdAt"      timestamp with time zone NOT NULL DEFAULT NOW() ,
 "updatedAt"      timestamp with time zone NOT NULL DEFAULT NOW()
);





-- ************************************** "productCategories"

CREATE TABLE "productCategories"
(
 "id"         serial PRIMARY KEY ,
 "name"       varchar(100) NOT NULL ,
 "createdAt"  timestamp with time zone NOT NULL DEFAULT NOW() ,
 "updatedAt"  timestamp with time zone NOT NULL DEFAULT NOW()
);





-- ************************************** "users"

CREATE TABLE "users"
(
 "id"             serial PRIMARY KEY ,
 "name"           varchar(255) NOT NULL ,
 "email"          varchar(255) NOT NULL ,
 "phone"          varchar(50) NOT NULL ,
 "passwordHash"   varchar(255) NOT NULL ,
 "createdAt"      timestamp with time zone NOT NULL DEFAULT NOW() ,
 "updatedAt"      timestamp with time zone NOT NULL DEFAULT NOW()
);





-- ************************************** "adminPrivileges"

CREATE TABLE "adminPrivileges"
(
 "id"           serial PRIMARY KEY ,
 "adminId"      bigserial NOT NULL REFERENCES "admins" ("id") ,
 "privilegeId"  bigserial NOT NULL REFERENCES "privileges" ("id") ,
 CONSTRAINT "adminPrivilegesAdmin" FOREIGN KEY ("adminId") REFERENCES "admins" ("id") ,
 CONSTRAINT "adminPrivilegesPrivilege" FOREIGN KEY ("privilegeId") REFERENCES "privileges" ("id")
);





-- ************************************** "orders"

CREATE TABLE "orders"
(
 "id"         bigserial PRIMARY KEY ,
 "userId"     bigserial NOT NULL REFERENCES "users" ("id") ,
 "createdAt"  timestamp with time zone NOT NULL DEFAULT NOW() ,
 "updatedAt"  timestamp with time zone NOT NULL DEFAULT NOW() ,
 CONSTRAINT "ordersUser" FOREIGN KEY ("userId") REFERENCES "users" ("id")
);





-- ************************************** "products"

CREATE TABLE "products"
(
 "id"           bigserial PRIMARY KEY ,
 "categoryId"   bigserial NOT NULL REFERENCES "productCategories" ("id") ,
 "name"         varchar(255) NOT NULL ,
 "description"  text NOT NULL ,
 "imageUrl"     text NOT NULL ,
 "createdAt"    timestamp with time zone NOT NULL DEFAULT NOW() ,
 "updatedAt"    timestamp with time zone NOT NULL DEFAULT NOW() ,
 CONSTRAINT "productsCategory" FOREIGN KEY ("categoryId") REFERENCES "productCategories" ("id")
);


-- ************************************** "productOrders"

CREATE TABLE "productOrders"
(
 "id"         bigserial PRIMARY KEY ,
 "orderId"   bigserial NOT NULL REFERENCES "orders" ("id") ,
 "productId" bigserial NOT NULL REFERENCES "products" ("id") ,
 CONSTRAINT "productOrdersOrder" FOREIGN KEY ("orderId") REFERENCES "orders" ("id") ,
 CONSTRAINT "productOrdersProduct" FOREIGN KEY ("productId") REFERENCES "products" ("id")
);
