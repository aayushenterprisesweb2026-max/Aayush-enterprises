-- Aayush Enterprises full database setup
-- Import this into a fresh MySQL database on Hostinger.
-- It creates the schema and seeds the initial content used by the site.

SET NAMES utf8mb4;
SET time_zone = "+00:00";
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS admin_users (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(191) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('super_admin', 'editor') NOT NULL DEFAULT 'super_admin',
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  last_login_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_admin_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS product_categories (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(160) NOT NULL,
  description VARCHAR(255) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_product_categories_slug (slug),
  UNIQUE KEY uq_product_categories_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS blog_categories (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(160) NOT NULL,
  description VARCHAR(255) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_blog_categories_slug (slug),
  UNIQUE KEY uq_blog_categories_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS media_assets (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  kind ENUM('image', 'document', 'video') NOT NULL DEFAULT 'image',
  original_name VARCHAR(255) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  mime_type VARCHAR(120) NOT NULL,
  file_size_bytes BIGINT UNSIGNED NOT NULL DEFAULT 0,
  storage_path VARCHAR(500) NOT NULL,
  public_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(255) NULL,
  created_by_admin_id BIGINT UNSIGNED NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_media_assets_created_by_admin_id (created_by_admin_id),
  CONSTRAINT fk_media_assets_created_by_admin
    FOREIGN KEY (created_by_admin_id) REFERENCES admin_users (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS products (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  category_id BIGINT UNSIGNED NOT NULL,
  media_id BIGINT UNSIGNED NULL,
  name VARCHAR(180) NOT NULL,
  slug VARCHAR(220) NOT NULL,
  short_description VARCHAR(300) NOT NULL,
  description TEXT NOT NULL,
  status ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
  is_featured TINYINT(1) NOT NULL DEFAULT 0,
  sort_order INT NOT NULL DEFAULT 0,
  published_at DATETIME NULL,
  created_by_admin_id BIGINT UNSIGNED NULL,
  updated_by_admin_id BIGINT UNSIGNED NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_products_slug (slug),
  KEY idx_products_category_id (category_id),
  KEY idx_products_media_id (media_id),
  KEY idx_products_created_by_admin_id (created_by_admin_id),
  KEY idx_products_updated_by_admin_id (updated_by_admin_id),
  CONSTRAINT fk_products_category
    FOREIGN KEY (category_id) REFERENCES product_categories (id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT fk_products_media
    FOREIGN KEY (media_id) REFERENCES media_assets (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_products_created_by_admin
    FOREIGN KEY (created_by_admin_id) REFERENCES admin_users (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_products_updated_by_admin
    FOREIGN KEY (updated_by_admin_id) REFERENCES admin_users (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS product_spec_items (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id BIGINT UNSIGNED NOT NULL,
  label VARCHAR(120) NOT NULL,
  value VARCHAR(255) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_product_spec_items_product_id (product_id),
  CONSTRAINT fk_product_spec_items_product
    FOREIGN KEY (product_id) REFERENCES products (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS services (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  media_id BIGINT UNSIGNED NULL,
  title VARCHAR(180) NOT NULL,
  slug VARCHAR(220) NOT NULL,
  short_description VARCHAR(300) NOT NULL,
  description TEXT NOT NULL,
  status ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
  sort_order INT NOT NULL DEFAULT 0,
  created_by_admin_id BIGINT UNSIGNED NULL,
  updated_by_admin_id BIGINT UNSIGNED NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_services_slug (slug),
  KEY idx_services_media_id (media_id),
  KEY idx_services_created_by_admin_id (created_by_admin_id),
  KEY idx_services_updated_by_admin_id (updated_by_admin_id),
  CONSTRAINT fk_services_media
    FOREIGN KEY (media_id) REFERENCES media_assets (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_services_created_by_admin
    FOREIGN KEY (created_by_admin_id) REFERENCES admin_users (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_services_updated_by_admin
    FOREIGN KEY (updated_by_admin_id) REFERENCES admin_users (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS service_items (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  service_id BIGINT UNSIGNED NOT NULL,
  item_text VARCHAR(255) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_service_items_service_id (service_id),
  CONSTRAINT fk_service_items_service
    FOREIGN KEY (service_id) REFERENCES services (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  category_id BIGINT UNSIGNED NULL,
  media_id BIGINT UNSIGNED NULL,
  title VARCHAR(220) NOT NULL,
  slug VARCHAR(260) NOT NULL,
  excerpt VARCHAR(500) NOT NULL,
  content LONGTEXT NOT NULL,
  status ENUM('draft', 'review', 'published', 'archived') NOT NULL DEFAULT 'draft',
  author_name VARCHAR(120) NOT NULL,
  read_time_minutes SMALLINT UNSIGNED NOT NULL DEFAULT 4,
  published_at DATETIME NULL,
  created_by_admin_id BIGINT UNSIGNED NULL,
  updated_by_admin_id BIGINT UNSIGNED NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_blog_posts_slug (slug),
  KEY idx_blog_posts_category_id (category_id),
  KEY idx_blog_posts_media_id (media_id),
  KEY idx_blog_posts_created_by_admin_id (created_by_admin_id),
  KEY idx_blog_posts_updated_by_admin_id (updated_by_admin_id),
  CONSTRAINT fk_blog_posts_category
    FOREIGN KEY (category_id) REFERENCES blog_categories (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_blog_posts_media
    FOREIGN KEY (media_id) REFERENCES media_assets (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_blog_posts_created_by_admin
    FOREIGN KEY (created_by_admin_id) REFERENCES admin_users (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_blog_posts_updated_by_admin
    FOREIGN KEY (updated_by_admin_id) REFERENCES admin_users (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(191) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  subject VARCHAR(180) NULL,
  message TEXT NOT NULL,
  source_page VARCHAR(100) NOT NULL DEFAULT 'contact',
  status ENUM('new', 'read', 'replied', 'closed') NOT NULL DEFAULT 'new',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_contact_messages_status (status),
  KEY idx_contact_messages_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO admin_users (
  full_name,
  email,
  password_hash,
  role,
  is_active
) VALUES (
  'Aayush Enterprises Admin',
  'aayushenterprisesweb2026@gmail.com',
  'scrypt$16384$8$1$5142388cedf4af1f476af7f28e782b79$9b73b6688a701dcfb483f5f7fbf91886778500da61b0a0e266d726932dcff3c65c6cd3022b99040b63ddbd51a70b3c98cbb1424523eccd847b923f882b91eed2',
  'super_admin',
  1
) ON DUPLICATE KEY UPDATE
  full_name = VALUES(full_name),
  password_hash = VALUES(password_hash),
  role = VALUES(role),
  is_active = VALUES(is_active);

INSERT INTO admin_users (
  full_name,
  email,
  password_hash,
  role,
  is_active
) VALUES (
  'Client Admin',
  'clientadmin@aayushenterprises.in',
  'scrypt$16384$8$1$5608b997b85d8e348c19933803d06ad4$a3fe1ac3d72e82780ae36ea430043ad27598b96e34dac8efa384b9004d5864df3c2061d173ad9906e872c10e54567a8d8c184406ab5d14c01923faf336dc51b0',
  'super_admin',
  1
) ON DUPLICATE KEY UPDATE
  full_name = VALUES(full_name),
  password_hash = VALUES(password_hash),
  role = VALUES(role),
  is_active = VALUES(is_active);

INSERT INTO product_categories (name, slug, description, sort_order, is_active) VALUES
  ('Material Handling Equipments', 'material-handling-equipments', 'Catalogs and products for lifting, movement and warehouse handling.', 10, 1),
  ('Training Kiosks', 'training-kiosks', 'Training kiosk catalog and related display solutions.', 20, 1),
  ('Unique Safety Products', 'unique-safety-products', 'Specialized safety products for industrial use.', 30, 1),
  ('Electrical Supplies', 'electrical-supplies', 'Electrical protection and insulation products.', 40, 1),
  ('Road Safety Products', 'road-safety-products', 'Traffic control and road safety products.', 50, 1),
  ('Lockout Tagout Products', 'lockout-tagout-products', 'Lockout and tagout systems for hazard isolation.', 60, 1)
ON DUPLICATE KEY UPDATE
  description = VALUES(description),
  sort_order = VALUES(sort_order),
  is_active = VALUES(is_active);

INSERT INTO blog_categories (name, slug, description, sort_order, is_active) VALUES
  ('Announcements', 'announcements', 'Company news and updates.', 10, 1),
  ('Safety Guides', 'safety-guides', 'Helpful safety articles and practical guidance.', 20, 1)
ON DUPLICATE KEY UPDATE
  description = VALUES(description),
  sort_order = VALUES(sort_order),
  is_active = VALUES(is_active);

INSERT INTO services (
  media_id,
  title,
  slug,
  short_description,
  description,
  status,
  sort_order,
  created_by_admin_id,
  updated_by_admin_id
) VALUES
  (
    NULL,
    'Industrial Consulting Services',
    'industrial-consulting-services',
    'Practical support for safety, compliance and process improvement.',
    'Industrial consulting services that support audits, workplace safety planning, compliance improvements and operational readiness.',
    'published',
    10,
    NULL,
    NULL
  ),
  (
    NULL,
    'Car Hire Services',
    'car-hire-services',
    'Reliable vehicle support for business travel and site visits.',
    'Car hire services for business movement, field visits and operational support across client locations.',
    'published',
    20,
    NULL,
    NULL
  ),
  (
    NULL,
    'Capability Building',
    'capability-building',
    'Training and capability development for teams and site staff.',
    'Capability building services focused on awareness, safety behavior, process readiness and practical workplace improvement.',
    'published',
    30,
    NULL,
    NULL
  )
ON DUPLICATE KEY UPDATE
  short_description = VALUES(short_description),
  description = VALUES(description),
  status = VALUES(status),
  sort_order = VALUES(sort_order);

SET FOREIGN_KEY_CHECKS = 1;
