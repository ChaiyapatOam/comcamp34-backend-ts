-- CreateTable
CREATE TABLE `file` (
    `uid` VARCHAR(255) NOT NULL,
    `image_URL` TEXT NULL,
    `image_Name` TEXT NULL,
    `agreement_URL` TEXT NULL,
    `agreement_Name` TEXT NULL,
    `card_URL` TEXT NULL,
    `card_Name` TEXT NULL,
    `pp7_URL` TEXT NULL,
    `pp7_Name` TEXT NULL,
    `pp1_URL` TEXT NULL,
    `pp1_Name` TEXT NULL,
    `q7_URL` TEXT NULL,
    `q7_Name` TEXT NULL,

    UNIQUE INDEX `file_uid_key`(`uid`),
    INDEX `uid`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `uid` VARCHAR(255) NOT NULL,
    `q1` TEXT NULL,
    `q2` TEXT NULL,
    `q3` TEXT NULL,
    `q4` TEXT NULL,
    `q5` TEXT NULL,
    `q6` TEXT NULL,
    `q7` TEXT NULL,

    UNIQUE INDEX `question_uid_key`(`uid`),
    INDEX `uid`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `register_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(255) NULL,
    `consent` BOOLEAN NOT NULL DEFAULT false,
    `page` INTEGER NULL DEFAULT 0,
    `prefix` VARCHAR(50) NULL,
    `firstname` VARCHAR(50) NULL,
    `middlename` VARCHAR(50) NULL,
    `surname` VARCHAR(50) NULL,
    `nickname` VARCHAR(50) NULL,
    `birth_date` VARCHAR(20) NULL,
    `mobile` VARCHAR(20) NULL,
    `email` VARCHAR(50) NULL,
    `province` VARCHAR(255) NULL,
    `travelby` VARCHAR(255) NULL,
    `shirt_size` VARCHAR(10) NULL,
    `medicine` VARCHAR(255) NULL,
    `underlying` VARCHAR(255) NULL,
    `allergic_food` VARCHAR(255) NULL,
    `allergic_medicine` VARCHAR(255) NULL,
    `special` VARCHAR(255) NULL,
    `notebook` BOOLEAN NULL,
    `school_name` TEXT NULL,
    `school_province` VARCHAR(255) NULL,
    `study_plan` VARCHAR(255) NULL,
    `student_level` VARCHAR(255) NULL,
    `gpax` VARCHAR(10) NULL,
    `university_1` TEXT NULL,
    `faculty_1` TEXT NULL,
    `major_1` TEXT NULL,
    `university_2` TEXT NULL,
    `faculty_2` TEXT NULL,
    `major_2` TEXT NULL,
    `university_3` TEXT NULL,
    `faculty_3` TEXT NULL,
    `major_3` TEXT NULL,
    `comcamp_previous` BOOLEAN NULL DEFAULT false,
    `major_interest` TEXT NULL,
    `reason_major_interest` TEXT NULL,
    `camp_1` TEXT NULL,
    `camp_2` TEXT NULL,
    `camp1_by` TEXT NULL,
    `camp2_by` TEXT NULL,
    `no_previous_camp` BOOLEAN NULL DEFAULT false,
    `parent_prefix` VARCHAR(50) NULL,
    `parent_firstname` VARCHAR(50) NULL,
    `parent_middlename` VARCHAR(50) NULL,
    `parent_surname` VARCHAR(50) NULL,
    `parent_relation` VARCHAR(50) NULL,
    `parent_mobile` VARCHAR(20) NULL,
    `parent_email` VARCHAR(48) NULL,
    `same_parent` BOOLEAN NULL DEFAULT false,
    `emergency_prefix` VARCHAR(50) NULL,
    `emergency_firstname` VARCHAR(50) NULL,
    `emergency_middlename` VARCHAR(50) NULL,
    `emergency_surname` VARCHAR(50) NULL,
    `emergency_relation` VARCHAR(50) NULL,
    `emergency_mobile` VARCHAR(20) NULL,
    `emergency_email` VARCHAR(48) NULL,
    `is_completed` BOOLEAN NULL DEFAULT false,
    `submited_at` DATETIME(3) NULL,

    UNIQUE INDEX `register_data_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `register_data`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `register_data`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
