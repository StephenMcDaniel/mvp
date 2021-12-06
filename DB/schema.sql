
SET check_function_bodies = false;

/* Table 'category' */
CREATE TABLE IF NOT EXISTS category(
  id serial NOT NULL,
  category varchar NOT NULL,
  PRIMARY KEY(id)
  );

/* Table 'phrases' */
CREATE TABLE IF NOT EXISTS phrases(
  id serial,
  category_id serial NOT NULL,
  phrase varchar NOT NULL,
  url varchar NOT NULL,
  PRIMARY KEY(id)
);

/* Relation 'category_phrases' */
ALTER TABLE phrases
  ADD CONSTRAINT category_phrases
    FOREIGN KEY (category_id) REFERENCES category (id);
