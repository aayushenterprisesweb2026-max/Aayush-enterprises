-- Aayush Enterprises seed data
-- Import after database/schema.sql

SET NAMES utf8mb4;
SET time_zone = "+00:00";

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
