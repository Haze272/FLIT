-- -----------------------------------------------------
-- Table `flit_db`.`ranks_customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flit_db`.`ranks_customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(300) NULL,
  `exp_required` INT NULL,
  `created_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `flit_db`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flit_db`.`customers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `exp` INT NOT NULL DEFAULT 0,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(45) NULL,
  `bio` VARCHAR(300) NULL,
  `ranks_customer_id` INT NOT NULL,
  `created_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_customers_ranks_customer1_idx` (`ranks_customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_customers_ranks_customer1`
    FOREIGN KEY (`ranks_customer_id`)
    REFERENCES `flit_db`.`ranks_customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `flit_db`.`ranks_performer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flit_db`.`ranks_performer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(300) NULL,
  `exp_required` INT NULL,
  `created_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `flit_db`.`performers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flit_db`.`performers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `surname` VARCHAR(45) NULL,
  `exp` INT NOT NULL DEFAULT 0,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(45) NULL,
  `bio` VARCHAR(300) NULL,
  `ranks_performer_id` INT NOT NULL,
  `created_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_performers_ranks_performer1_idx` (`ranks_performer_id` ASC) VISIBLE,
  CONSTRAINT `fk_performers_ranks_performer1`
    FOREIGN KEY (`ranks_performer_id`)
    REFERENCES `flit_db`.`ranks_performer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `flit_db`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flit_db`.`admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  `rank` INT NULL,
  `created_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `flit_db`.`task_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flit_db`.`task_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(300) NULL,
  `created_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `flit_db`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `flit_db`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customers_id` INT NOT NULL,
  `performers_id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `decription` VARCHAR(500) NULL,
  `price` INT NULL,
  `tags` VARCHAR(100) NULL,
  `task_type_id` INT NOT NULL,
  `admins_id` INT NOT NULL,
  `created_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`, `customers_id`),
  INDEX `fk_tasks_customers_idx` (`customers_id` ASC) VISIBLE,
  INDEX `fk_tasks_performers1_idx` (`performers_id` ASC) VISIBLE,
  INDEX `fk_tasks_admins1_idx` (`admins_id` ASC) VISIBLE,
  INDEX `fk_tasks_task_type1_idx` (`task_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_tasks_customers`
    FOREIGN KEY (`customers_id`)
    REFERENCES `flit_db`.`customers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tasks_performers1`
    FOREIGN KEY (`performers_id`)
    REFERENCES `flit_db`.`performers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tasks_admins1`
    FOREIGN KEY (`admins_id`)
    REFERENCES `flit_db`.`admins` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tasks_task_type1`
    FOREIGN KEY (`task_type_id`)
    REFERENCES `flit_db`.`task_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE USER 'admin' IDENTIFIED BY 'gatitogentil';

GRANT ALL ON `flit_db`.* TO 'admin';
GRANT SELECT ON TABLE `flit_db`.* TO 'admin';
GRANT SELECT, INSERT, TRIGGER ON TABLE `flit_db`.* TO 'admin';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `flit_db`.* TO 'admin';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
